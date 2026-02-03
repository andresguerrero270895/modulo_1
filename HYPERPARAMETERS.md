**HYPERPARAMETERS**
Hyperparameters are adjustable settings that determine how the model works.

- `Temperature` : When the value is low, close to Zero. This wil make the answers more focused and consistent. although also less creativy and variety.
A higher value closer to 1 will increase diversity and creativy of the outputs, but can also lead to more unpredicatble and possibly less accurate results.

- `max_tokens`: Defines the maximum number of tokens a response can contain. Limiting this value can help prevent overly long responses or ensure more concise answers.

- `top_p`: Controls the diversity and selectivity of the generated responses. A low value (e.g., 0.2) makes the model focus on the most likely options, while a high value (e.g., 0.8) allows for more diverse and less likely options.

- `frequency_penalty`: Penalizes responses that repeat words or phrases used earlier in the conversation. A higher value (e.g., 0.6) will make the model avoid repeating previously used words more frequently.

- `num_return_sequences`: Defines the number of alternative responses generated for a single request. You can set this value to 1 for a single response or increase it for multiple responses.