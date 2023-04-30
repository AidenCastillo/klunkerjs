const logger = require('../src/utils/logger');
test("Check logger.info", () => {
	expect(logger.info("test")).tobeDefined;
})