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
uses: dkershner6/post-api-call-action@v1
with:
  url: ${{ secrets.API_URL }}
  data: "{\"command\": \"publish\"}"
  headers: "{\"Authorization\": \"Bearer ${{ secrets.API_KEY }}\"}"
  params: "{\"content\": \"Test Content\"}"
```


## Contributing

Feel free to open issues or submit PRs.
