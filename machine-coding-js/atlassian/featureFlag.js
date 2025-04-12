/**
 *  Browser variant A 50 % users get to see variant A
 *  Browser variant B 50% users get to see variant B
 *
 * setting a cookies from server to client and used for differntiating the HTML layout
 */

// requirement

/**
 * getFeatureState should return the value of the provider feature Flag , on error return a default value
 *
 * the above function to support caching with ttl and minimize call to backend API's
 *
 */

const SAMPLE_FEATURE = {
  show_new_rate: true,
  show_banner: true,
};

const Cache = {
  featureFlag: {},
  timeStamp: null,
};

const MAX_TIMESTAMP_TTL = 100000;

function fetchAllFeatures() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(SAMPLE_FEATURE), 1000);
  });
}

function getFeatureState(featureName, defaultValue) {
  const isCacheDataPresent = Object.keys(Cache.featureFlags).length;
  const isCacheWithinTime = Date.now - Cache.timeStamp < MAX_TIMESTAMP_TTL;

  if (isCacheDataPresent && isCacheWithinTime) {
    const value = Object.prototype.hasOwnProperty.call(
      Cache.featureFlag,
      featureName
    )
      ? featureFlag[featureName]
      : defaultValue;

    return Promise.resolve(value);
  }
  return fetchAllFeatures()
    .then((featureFlag) => {
      Cache.featureFlag = featureFlag;
      Cache.timeStamp = Date.now();

      return Object.prototype.hasOwnProperty.call(featureFlag, featureName)
        ? featureFlag[featureName]
        : defaultValue;
    })
    .catch(() => defaultValue);
}
