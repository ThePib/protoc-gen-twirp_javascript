// Code generated by protoc-gen-twirp_javascript. DO NOT EDIT.
// Source: example/service.proto

import Axios from 'axios';
import protobuf from 'protobufjs/light';
import { newRPC } from 'pbjs-twirp-rpc';

const json = require('./service.json');
const root = protobuf.Root.fromJSON(json);
const dieRoller = root.lookupService('twirpjs.example.DieRoller');
const echoer = root.lookupService('twirpjs.example.Echoer');

const rpcMethodNameLookupFn = fn => {
	return fn.name;
};

export const dieRollerPrefix = '/twirp/twirpjs.example.DieRoller/';
export const createDieRollerClient = (baseURL, opts) => {
	const defaultOpts = {
		baseURL: baseURL + dieRollerPrefix,
		headers: {
			Accept: 'application/protobuf'
		}
	};
	const axiosOpts = { ...defaultOpts, ...opts };
	const axios = Axios.create(axiosOpts);
	return dieRoller.create(newRPC(axios, rpcMethodNameLookupFn));
};

export const echoerPrefix = '/twirp/twirpjs.example.Echoer/';
export const createEchoerClient = (baseURL, opts) => {
	const defaultOpts = {
		baseURL: baseURL + echoerPrefix,
		headers: {
			Accept: 'application/protobuf'
		}
	};
	const axiosOpts = { ...defaultOpts, ...opts };
	const axios = Axios.create(axiosOpts);
	return echoer.create(newRPC(axios, rpcMethodNameLookupFn));
};
