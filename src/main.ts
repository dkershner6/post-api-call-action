import { getInput, info, error, setFailed } from '@actions/core';
import axios from 'axios';
import { parseJsonSafely } from './parseJsonSafely';

async function run(): Promise<void> {
    try {
        const url: string = getInput('url');
        info(`Sending POST request to ${url}`);
        const data = parseJsonSafely(getInput('data'));
        const headers = parseJsonSafely(getInput('headers'));
        await axios.post(url, data, {
            headers,
        });
    } catch (err) {
        error(err.message);
        setFailed(err.message);
    }
}

run();
