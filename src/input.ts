/**
 * Parse action input into a some proper thing.
 */

import { input } from '@clechasseur/rs-actions-core';

// Parsed action input
export interface Input {
    token: string;
    ignore: string[];
    new_issue_labels: string[];
    workingDirectory: string;
}

export function get(): Input {
    return {
        token: input.getInput('token', { required: true }),
        ignore: input.getInputList('ignore', { required: false }),
        new_issue_labels: input.getInputList('new-issue-labels', {
            required: false,
        }),
        workingDirectory:
            input.getInput('working-directory', { required: false }) ?? '.',
    };
}
