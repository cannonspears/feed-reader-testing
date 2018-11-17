/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(
  (function() {
    //  "RSS Feeds" test suite
    describe("RSS Feeds", function() {
      //  "allFeeds variable defined" test
      it("are defined", function() {
        expect(allFeeds).toBeDefined();
        expect(allFeeds.length).not.toBe(0);
      });
      //  "URL defined in allFeeds object" test
      it("ensures URLs are defined", function() {
        allFeeds.forEach(allFeeds => {
          expect(allFeeds.url).toBeDefined();
          expect(allFeeds.url.length).not.toBe(0);
        });
      });
      // "Names defined in allFeeds object" test
      it("ensures names are defined", function() {
        allFeeds.forEach(allFeeds => {
          expect(allFeeds.name).toBeDefined();
          expect(allFeeds.name.length).not.toBe(0);
        });
      });
    });

    // "The Menu" test suite
    describe("The Menu", function() {
      // "Default hidden menu element" test
      it("ensures menu element is hidden by default", function() {
        expect($("body").hasClass("menu-hidden")).toBe(true);
      });
      // "Menu visibility changed by clicks" test
      it("ensures menu icon changes visibility on click", function() {
        // Expectation 1: Menu displays when clicked
        $(".menu-icon-link").click();
        expect($("body").hasClass("menu-hidden")).toBe(false);
        // Expectation 2: Menu hides when clicked again
        $(".menu-icon-link").click();
        expect($("body").hasClass("menu-hidden")).toBe(true);
      });
    });

    /* TODO: Write a new test suite named "Initial Entries" */

    /* TODO: Write a test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     * Remember, loadFeed() is asynchronous so this test will require
     * the use of Jasmine's beforeEach and asynchronous done() function.
     */

    /* TODO: Write a new test suite named "New Feed Selection" */

    /* TODO: Write a test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * Remember, loadFeed() is asynchronous.
     */
  })()
);
