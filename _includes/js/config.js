var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'light', extendWith: {
  primary: themeStyle.colors.primary
}});

var siteConfig = {
  rootPredicate: {
     "type": "and",
     "predicates": [
        {
         "type": "in",
         "key": "country",
         "values": ["AR", "BR", "CO", "EC", "MX", "UY", "PE"]
       },
       {
         "type": "equals",
         "key": "notIssues",
         "value": "COUNTRY_COORDINATE_MISMATCH"
       }
     ]
   }
};
