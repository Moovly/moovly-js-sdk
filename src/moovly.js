import { polyfill } from 'es6-promise';
import 'isomorphic-fetch';

import Assets from "./resources/assets";
import Projects from "./resources/projects";
import Users from "./resources/users";
import Jobs from "./resources/jobs";
import Libraries from "./resources/libraries";
import Templates from "./resources/templates";

export const API_URL = 'https://api.moovly.com';
export let TOKEN = null;

polyfill();

export const setToken = token =>
{
  TOKEN = token;
};

const Meta = {
  version: '1.0RC-beta',
};

const Auth = {
  setToken,
};

const Embeds = {};

export const sdk = {
  Assets,
  Projects,
  Users,
  Jobs,
  Libraries,
  Templates,
  Meta,
  Auth,
  Embeds,
};