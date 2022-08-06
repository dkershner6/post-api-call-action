import { getInput, info, error, setFailed } from '@actions/core';
import axios from 'axios';
import { parseJsonSafely } from './parseJsonSafely';

async function run(): Promise<void> {
    try {
        const url: string = getInput('url');
        const data = parseJsonSafely(getInput('data'));
        const headers = parseJsonSafely(getInput('headers'));
        const params = parseJsonSafely(getInput('params'));

        info(`Sending POST request to ${url}`);
        await axios.post(url, data, {
            headers,
            params,
        });
    } catch (err) {
        if (err instanceof Error) {
            error(err.message);
            setFailed(err.message);
            return;
        }

        setFailed('An unknown error occured');
    }
}

run();
