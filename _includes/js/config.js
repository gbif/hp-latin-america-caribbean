var siteTheme = gbifReactComponents.themeBuilder.extend({
  baseTheme: 'light', extendWith: {
    primary: themeStyle.colors.primary
  }
});

var siteConfig = {
  routes: {
    alwaysUseHrefs: true,
    occurrenceSearch: {
      // The route you are currently using for occurrence search. The language prefix will be added automatically
      // If you need special routes per language, then you have to add locale specific overwrites. The page language is available as a global variable called `pageLang`
      route: '/data'
    }
  },
  occurrence: {
    rootPredicate: {
      "type": "and",
      "predicates": [
        {
          "type": "in",
          "key": "country",
          "values": ["AR", "BR", "CL", "CO","CR", "EC", "GT", "MX", "PE", "SR", "UY"]
        },
        {
          "type": "equals",
          "key": "notIssues",
          "value": "COUNTRY_COORDINATE_MISMATCH"
        }
      ]
    }
    highlightedFilters: ['taxonKey', 'gadmGid', 'stateProvince', 'publisherKey', 'year', 'basisOfRecord', 'datasetName'],
    occurrenceSearchTabs: ['TABLE', 'MAP', 'GALLERY', 'DATASETS', 'CLUSTERS'],
    availableCatalogues: ['OCCURRENCE', 'DATASET', 'PUBLISHER', 'COLLECTION', 'INSTITUTION', 'LITERATURE'],
    excludedFilters: ['publishingCountryCode']
  }
  dataset: {
    availableCatalogues: ['DATASET', 'PUBLISHER'],
    rootFilter: {publishingCountry: 'EC'},
    highlightedFilters: ['q', 'anyPublisherKey', 'datasetType', 'license'],
    excludedFilters: ['publishingCountryCode']
  },
  literature: {
    availableCatalogues: ['OCCURRENCE', 'DATASET', 'PUBLISHER', 'COLLECTION', 'INSTITUTION', 'LITERATURE'],
     rootFilter: {countriesOfCoverage: ["AR", "BR", "CL", "CO","CR", "EC", "GT", "MX", "PE", "SR", "UY"]}
  },
  collection: {
    availableCatalogues: ['COLLECTION', 'INSTITUTION'],
    excludedFilters: ['countrySingleGrSciColl','country'],
    rootFilter: {
      displayOnNHCPortal: true,
      country: ["AR", "BR", "CL", "CO","CR", "EC", "GT", "MX", "PE", "SR", "UY"],
      active: true
    }
  },
  publisher: {
    rootFilter: {
      country: ["AR", "BR", "CL", "CO","CR", "EC", "GT", "MX", "PE", "SR", "UY"]
    },
    excludedFilters: ['countrySingle'],
  },
  institution: {
    availableCatalogues: ['COLLECTION', 'INSTITUTION'],
    excludedFilters: ['countrySingleGrSciColl'],
    rootFilter: {
      displayOnNHCPortal: true,
      country: ["AR", "BR", "CL", "CO","CR", "EC", "GT", "MX", "PE", "SR", "UY"],
      active: true
    },
    mapSettings: {
      enabled: true,
      lat: -1.4481247373907848,
      lng: -81.95287504757923,
      zoom: 5.654
    },
  },
};
