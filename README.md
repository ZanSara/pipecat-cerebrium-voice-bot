# pipecat-cerebrium-voice-bot

Heavily inspired from https://docs.cerebrium.ai/v4/examples/realtime-voice-agents

## Prerequisites:

You will need:

- A Cerebrium account: if you don’t have a Cerebrium account, you can create one by signing up [here](https://dashboard.cerebrium.ai/register) and following the documentation [here](https://docs.cerebrium.ai/cerebrium/getting-started/installation) to get setup.

- A Huggingface token: if you don't have a Huggingface account, you can sign up at [this page](https://huggingface.co/join). You can then find your API keys following [these instructions](https://huggingface.co/docs/hub/security-tokens).

- A Daily developer token: if you don’t have an account you can sign up for one [here](https://dashboard.daily.co/u/signup) and then go to the “developers” tab to fetch your API key.

## Initial setup

Add your HuggingFace token and Daily token to your Cerebrium's account secrets:

![cerebrium-secrets-page.png]

Then clone the repo, or open it up in Codespaces, and run the following commands in the root directory:

```
!pip install --upgrade cerebrium
```


## Notes

.env.development.local should include the following:

```
VITE_APP_TITLE="My voice bot"
VITE_SERVER_URL=https://api.cortex.cerebrium.ai/v4/p-d46ba6ea/voice-bot/create_room
VITE_SERVER_AUTH= the JWT
```