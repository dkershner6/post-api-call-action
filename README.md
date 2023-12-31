# webhook-action

GitHub Action that sends a POST request of any kind. This is a thin wrapper around Axios.post.

## Inputs

### `url`

**Required**: URL to send post request to.

### `data`

Optional: JSON string of data to pass into request. Default `"{}"`.

### `headers`

Optional: JSON string of headers to pass into request. Default `"{}"`.

### `params`

Optional: JSON string of query parameters to pass into request. Default `"{}"`.


## Example usage

```yaml
uses: dkershner6/post-api-call-action@v2
with:
  url: ${{ secrets.API_URL }}
  data: "{\"command\": \"publish\"}"
  headers: "{\"Authorization\": \"Bearer ${{ secrets.API_KEY }}\"}"
  params: "{\"content\": \"Test Content\"}"
```


## Contributing

All contributions are welcome, please open an issue or pull request.

To use this repository:
1. `npm i -g pnpm` (if don't have pnpm installed)
2. `pnpm i`
3. `npx projen` (this will ensure everything is setup correctly, and you can run this command at any time)
4. Good to make your changes!
5. You can run `npx projen build` at any time to build the project.
