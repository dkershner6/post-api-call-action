import { error } from '@actions/core';

export const parseJsonSafely = (jsonString: string): unknown => {
    try {
        return JSON.parse(jsonString);
    } catch (err) {
        error(
            `Parsing error: ${jsonString} - ${
                (err as Error)?.message ?? 'Unknown error while parsing JSON'
            }`
        );
        return {};
    }
};
