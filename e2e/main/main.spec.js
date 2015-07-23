'use strict';

describe('Main', function () {

  beforeEach(function () {
    browser.get('/index.html');
  });

  describe('Photo list should populate with correct amount', function () {

    it('should start with list of 6 photos', function () {
      expect(element.all(by.css('.photoListItem')).count()).toEqual(12);
    });

    it('should lazy load 4 more photos as scrolled to bottom of page', function () {
      browser.sleep(2000);
      browser.executeScript('window.scrollTo(0, 1000);').then(function () {
        browser.sleep(2000);
        expect(element.all(by.css('.photoListItem')).count()).toEqual(16);
      });
    });

  });


});
