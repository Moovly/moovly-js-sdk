# Moovly JS SDK

This package allows you to interact with the Moovly Public API.

## Usage

All methods return as Promise.

```js
const Moovly = require('moovly-js-sdk');

const token = 'token';
const projectId = 'projectId';

Moovly.setToken(token);

Moovly.sdk.Projects.get(projectId).then(console.log);
Moovly.sdk.Projects.list().then(console.log);

```

## API Reference

To view the API reference, visit [https://developer.moovly.com](https://developer.moovly.com).

## Versioning

Package versioning is equal to our API Hub version.