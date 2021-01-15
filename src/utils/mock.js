import MockAdapter from 'axios-mock-adapter';
import { mockComponent } from 'react-dom/test-utils';
import axios from './axios';

const instance = new MockAdapter(axios, {delayResponse: 0});

export default instance;