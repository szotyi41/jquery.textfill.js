# jquery.textfill.js
My jquery textfilljs plugin

# Options
| Variable | Description | Default |
| :---         | :---           |          ---: |
| minFontSize   | Minimum font size in pixels     | 8    |
| maxFontSize     | Maximum font size       | 30      |
| setLineHeight     | Set line height too, to same pixels to font size | false      |
| lineHeightGap     | Gap between lines in pixels | 0 |
| disableWordWrap     | Disable word wrap | false |
| debug     | Debug mode on, if its on write to console | false |
| firstElement     | Element tag name in div inside element to resize | 'div' |

# Use
```js
$('.outerdiv').textfill(options);
```
In html you must give inner tag for text like this:

```html
<div class="outerdiv" style="width: 64px; height: 32px;">
  <div class="innerdiv">Content to fill</div>
</div>
```
