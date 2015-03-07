var expect = require('chai').expect;
var country = require('../index');

describe('countryjs', function() {
  it('should get all country information', function(done) {
    var tester = country.all();
    expect(tester).to.be.an('array');
    expect(tester.length).to.equal(252);
    expect(tester[0]).to.be.an('object');
    done();
  });
  it('should get all available info for United States (default)', function(done) {
    var tester = country.info('US');
    expect(tester).to.be.an('object');
    done();
  });
  it('should get all available info for United States (ISO2)', function(done) {
    var tester = country.info('US', 'ISO2');
    expect(tester).to.be.an('object');
    done();
  });
  it('should get all available info for United States (ISO3)', function(done) {
    var tester = country.info('USA', 'ISO3');
    expect(tester).to.be.an('object');
    done();
  });
  it('should get all available info for United States (name)', function(done) {
    var tester = country.info('United States', 'name');
    expect(tester).to.be.an('object');
    done();
  });
  it('should get all available info for United States (alternate name)', function(done) {
    var tester = country.info('United States of America', 'name');
    expect(tester).to.be.an('object');
    done();
  });
  it('should get all available info for United States (translation name)', function(done) {
    var tester = country.info('Estados Unidos', 'name');
    expect(tester).to.be.an('object');
    done();
  });
  it('should get list of states for United States', function(done) {
    var tester = country.states('US');
    expect(tester).to.be.an('array');
    expect(tester.length).to.equal(51);
    expect(tester[0]).to.be.a('string');
    done();
  });
  it('should get list of provinces for United States', function(done) {
    var tester = country.provinces('US');
    expect(tester).to.be.an('array');
    expect(tester.length).to.equal(51);
    expect(tester[0]).to.be.a('string');
    done();
  });
  it('should get name for United States', function(done) {
    var tester = country.name('US');
    expect(tester).to.be.a('string');
    done();
  });
  it('should get alternate spellings for United States', function(done) {
    var tester = country.altSpellings('US');
    expect(tester).to.be.an('array');
    expect(tester.length).to.equal(3);
    expect(tester[0]).to.be.a('string');
    done();
  });
  it('should get area (km²) of United States', function(done) {
    var tester = country.area('US');
    expect(tester).to.be.a('number');
    done();
  });
  it('should get list of bordering countries for United States', function(done) {
    var tester = country.borders('US');
    expect(tester).to.be.an('array');
    expect(tester.length).to.equal(2);
    expect(tester[0]).to.be.a('string');
    done();
  });
  it('should get list of calling codes for United States', function(done) {
    var tester = country.callingCodes('US');
    expect(tester).to.be.an('array');
    expect(tester.length).to.equal(1);
    expect(tester[0]).to.be.a('string');
    done();
  });
  it('should get capital for United States', function(done) {
    var tester = country.capital('US');
    expect(tester).to.be.a('string');
    done();
  });
  it('should get list of currencies for United States', function(done) {
    var tester = country.currencies('US');
    expect(tester).to.be.an('array');
    expect(tester.length).to.equal(3);
    expect(tester[0]).to.be.a('string');
    done();
  });
  it('should get demonym for United States', function(done) {
    var tester = country.demonym('US');
    expect(tester).to.be.a('string');
    done();
  });
  it('should get flag for United States', function(done) {
    var tester = country.flag('US');
    expect(tester).to.be.a('string');
    done();
  });
  it('should get geoJSON for United States', function(done) {
    var tester = country.geoJSON('US');
    expect(tester).to.be.an('object');
    done();
  });
  it('should get list of ISO codes for United States', function(done) {
    var tester = country.ISOcodes('US');
    expect(tester).to.be.an('object');
    done();
  });
  it('should get list of languages for United States', function(done) {
    var tester = country.languages('US');
    expect(tester).to.be.an('array');
    expect(tester.length).to.equal(1);
    expect(tester[0]).to.be.a('string');
    done();
  });
  it('should get approximate latitude and longitude coordinates for United States', function(done) {
    var tester = country.latlng('US');
    expect(tester).to.be.an('array');
    expect(tester.length).to.equal(2);
    expect(tester[0]).to.be.a('number');
    done();
  });
  it('should get native name for United States', function(done) {
    var tester = country.nativeName('US');
    expect(tester).to.be.a('string');
    done();
  });
  it('should get population for United States', function(done) {
    var tester = country.population('US');
    expect(tester).to.be.a('number');
    done();
  });
  it('should get region for United States', function(done) {
    var tester = country.region('US');
    expect(tester).to.be.a('string');
    done();
  });
  it('should get subregion for United States', function(done) {
    var tester = country.subregion('US');
    expect(tester).to.be.a('string');
    done();
  });
  it('should get list of timezones for United States', function(done) {
    var tester = country.timezones('US');
    expect(tester).to.be.an('array');
    expect(tester.length).to.equal(11);
    expect(tester[0]).to.be.a('string');
    done();
  });
  it('should get tld for United States', function(done) {
    var tester = country.tld('US');
    expect(tester).to.be.an('array');
    expect(tester.length).to.equal(1);
    expect(tester[0]).to.be.a('string');
    done();
  });
  it('should get list of translations of the name of United States', function(done) {
    var tester = country.translations('US');
    expect(tester).to.be.an('object');
    done();
  });
  it('should get wiki page link for United States', function(done) {
    var tester = country.wiki('US');
    expect(tester).to.be.a('string');
    done();
  });
  it('should undefined for a mismatched country identifier', function(done) {
    var tester = country.info('UX');
    expect(tester).to.be.an('undefined');
    done();
  });

});