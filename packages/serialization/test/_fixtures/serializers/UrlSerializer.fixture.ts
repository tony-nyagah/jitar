
const validURL = new URL('https://example.com?foo=bar&baz=qux#quux');

const serializedValidUrl = { serialized: true, name: 'Url', value: 'https://example.com/?foo=bar&baz=qux#quux' };

const nonObject = 42;
const nonUrl = new Map();
const notSerialized = { name: 'Url', bytes: [] };
const invalidName = { serialized: true, name: 'Map', value: '2021-01-01T00:00:00.000Z' };
const invalidUrlValue = { serialized: true, name: 'Date', value: true };
const invalidUrlString = { serialized: true, name: 'Date', value: 'example' };

export
{
    validURL,
    serializedValidUrl,
    nonObject, nonUrl, notSerialized, invalidName, invalidUrlValue, invalidUrlString
};
