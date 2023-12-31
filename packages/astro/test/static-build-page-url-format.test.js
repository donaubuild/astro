import { expect } from 'chai';
import { loadFixture } from './test-utils.js';

describe("Static build - format: 'file'", () => {
	let fixture;

	before(async () => {
		fixture = await loadFixture({
			root: './fixtures/static-build-page-url-format/',
		});
		await fixture.build();
	});

	it('Builds pages in root', async () => {
		const html = await fixture.readFile('/one.html');
		expect(html).to.be.a('string');
	});

	it('Builds pages in subfolders', async () => {
		const html = await fixture.readFile('/sub/page.html');
		expect(html).to.be.a('string');
	});
});
