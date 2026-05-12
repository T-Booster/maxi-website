# Hero gym video

Drop the looping gym game capture here as **`gym-loop.mp4`** (and optionally `gym-loop.webm` for slightly better compression on Chrome).

## Spec

- **Filename:** `gym-loop.mp4` (and optionally `gym-loop.webm`)
- **Length:** 6 to 10 seconds, seamless loop
- **Aspect:** 9 by 19.5 (matches the phone frame)
- **Resolution:** 720 by 1560 is plenty. Bigger just bloats first paint.
- **Bitrate:** Aim for under 1.5 MB. Use ffmpeg with `-crf 28 -preset slow` if you need to shrink.
- **Audio:** None. The Hero `<video>` is muted by default.
- **Content idea:** Avatar walks toward a coach, coach turns and gestures, chat opens. The first second matters most.

## Until the file exists

The Hero already renders a poster image (`/mockups/1.png`) so the layout never breaks. Once you drop the MP4 in here, refresh the page and it autoplays.

## Quick ffmpeg recipe

If you have a longer screen recording, trim and compress it like this:

```bash
ffmpeg -i raw-capture.mov \
  -ss 00:00:00 -t 00:00:08 \
  -vf "scale=720:-2,fps=30" \
  -c:v libx264 -crf 28 -preset slow -pix_fmt yuv420p \
  -an -movflags +faststart \
  gym-loop.mp4
```

Replace `-ss` and `-t` with the right start time and duration.
