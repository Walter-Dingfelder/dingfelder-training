# Return-to-Portal Timing Fix

This patch fixes the race condition where a user can click **Return to Portal** before the completion sync finishes.

## What changed
- keeps the training completion screen in a **syncing** state until portal completion sync resolves
- disables **Return to Portal** while sync is still running
- preserves the real portal return path

## Install
1. Extract this zip over the training repo root and allow overwrite.
2. Commit once.
3. Deploy once.
