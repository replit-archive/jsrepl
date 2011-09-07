# A simple filter for output that decodes UTF8. Useful for Emscripted code.
@makeUtf8Print = (print) ->
  buffer = []
  return (chr) ->
    if not chr? then return
    if chr < 0 then chr += 256
    switch buffer.length
      when 0
        if chr < 128
          print String.fromCharCode chr
        else
          buffer.push chr
      when 1
        if buffer[0] > 191 and buffer[0] < 224
          uni = ((buffer[0] & 31) << 6) | (chr & 63)
          print String.fromCharCode uni
          buffer = []
        else
          buffer.push chr
      when 2
        uni = (((buffer[0] & 15) << 12) |
               ((buffer[1] & 63) << 6) |
               (chr & 63))
        print String.fromCharCode uni
        buffer = []

@encodeUtf8 = (str) ->
    utftext = []

    for c in str.split ''
      c = c.charCodeAt 0
      if c < 128
        utftext.push String.fromCharCode c
      else if c > 127 and c < 2048
        utftext.push String.fromCharCode (c >> 6) | 192
        utftext.push String.fromCharCode (c & 63) | 128
      else
        utftext.push String.fromCharCode (c >> 12) | 224
        utftext.push String.fromCharCode ((c >> 6) & 63) | 128
        utftext.push String.fromCharCode (c & 63) | 128
 
    return utftext.join ''
