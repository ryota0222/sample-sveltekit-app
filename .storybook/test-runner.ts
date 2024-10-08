import { getStoryContext, type TestRunnerConfig } from '@storybook/test-runner';
import { injectAxe, checkA11y, configureAxe } from 'axe-playwright';

/*
 * See https://storybook.js.org/docs/writing-tests/test-runner#test-hook-api
 * to learn more about the test-runner hooks API.
 */
const config: TestRunnerConfig = {
	async preVisit(page) {
		await injectAxe(page);
	},
	async postVisit(page, context) {
		// snapshot test
		const elementHandler = await page.$('#storybook-root');
		if (elementHandler) {
			const innerHTML = await elementHandler.innerHTML();
			expect(innerHTML).toMatchSnapshot();
		}
		// a11y test
		// Get the entire context of a story, including parameters, args, argTypes, etc.
		const storyContext = await getStoryContext(page, context);
		// Do not run a11y tests on disabled stories.
		if (storyContext.parameters?.a11y?.disable) {
			return;
		}
		// Apply story-level a11y rules
		await configureAxe(page, {
			rules: storyContext.parameters?.a11y?.config?.rules
		});
		await checkA11y(page, '#storybook-root', {
			detailedReport: true,
			detailedReportOptions: {
				html: true
			}
		});
	}
};

export default config;
