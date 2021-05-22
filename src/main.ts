import { getInput, info, setFailed } from '@actions/core';
import axios from 'axios';

const parseJsonSafely = (jsonString: string): any => {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        return {};
    }
};

async function run(): Promise<void> {
    try {
        const url: string = getInput('url');
        info(`Sending POST request to ${url}`);
        const data = parseJsonSafely(getInput('data'));
        const headers = parseJsonSafely(getInput('headers'));
        await axios.post(url, data, {
            headers,
        });
    } catch (error) {
        setFailed(error.message);
    }
}

run();
