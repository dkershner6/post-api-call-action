# webhook-action

GitHub Action that sends a POST request of any kind.

## Inputs

### `url`

**Required**: URL to send post request to.

### `data`

Optional: JSON string of data to pass into request. Default `"{}"`.

### `headers`

Optional: JSON string of headers to pass into request. Default `"{}"`.


## Example usage

```yaml
uses: dkershner6/post-api-call-action@v1
with:
  url: ${{ secrets.API_URL }}
  data: "{\"command\": \"publish\"}"
  headers: "{\"Authorization\": \"Bearer ${{ secrets.API_KEY }}\"}"
```


## Contributing

Feel free to open issues or submit PRs.
