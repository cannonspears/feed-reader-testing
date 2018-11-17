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

    // "Initial Entries" test suite
    describe("Initial Entries", function() {
      var entry;
      beforeEach(done => {
        loadFeed(0, () => {
          var entry = $(".feed .entry").length;
          done();
        });
      });
      it("ensures at least one .entry within .feed", function(done) {
        expect(entry).not.toBe(0);
        done();
      });
    });

    // "New Feed Selection" test suite
    describe("New Feed Selection", function() {
      // "loadFeed function changes content" tets
      var feed1, feed2;
      beforeEach(done => {
        loadFeed(0, () => {
          feed1 = $(".feed").html();
        });
        loadFeed(1, () => {
          feed2 = $(".feed").html();
          done();
        });
      });
      it("ensures content has changed", done => {
        expect(feed1).not.toEqual(feed2);
        done();
      });
    });
  })()
);
