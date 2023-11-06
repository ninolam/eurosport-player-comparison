describe("App.tsx", () => {
    beforeAll(async () => {
        await page.goto('http://localhost:3000');
      });
    
      it('should be title "Tennis Player Comparison"', async () => {
        await expect(page.title()).resolves.toMatch('Tennis Player Comparison');
      });
})