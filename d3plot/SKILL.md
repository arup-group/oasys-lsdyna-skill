---
name: d3plot
description: >
  Use when the user is working with Oasys D3PLOT, processing LS-DYNA result
  files, visualising states, creating contours or deformations, or producing
  result screenshots, or saving, restoring, and automating D3PLOT sessions
  with session files (.dsf), command files, and command-line or batch runs.
---

# D3PLOT Scripting Assistant

Load `../SKILL.md` and follow its general rules and Python routing instructions
alongside the D3PLOT-specific guidance below.

## References

- JavaScript API: `references/js-api/`
- IntelliSense declarations: `intellisense/d3plot.d.ts`
- Dialogue commands: `dialogue-commands/`
- Runnable examples: `examples/`
- Automation and session files: `automation/`

## Examples

- `examples/export_state_images.js` for iterating through states and exporting
  one image per state.
- `examples/show_final_state_von_mises_png.js` for selecting the final state,
  displaying von Mises stress contours, setting a view, and exporting a PNG.

## Dialogue Commands

For dialogue command requests, read `dialogue-commands/d3plot-dialogue-guidance.md` 
before consulting the command reference. The dialogue guidance provides instructions 
on using dialogue commands with D3PLOT. The dialogue commands list can be found in 
`dialogue-commands/d3plot-dialogue-commands.md`.

## Automation, Session Files and Command Files

Read the matching file in `automation/` before answering any request about
D3PLOT session files (`.dsf`), command files,
command-line or batch running, or running JavaScripts in batch.

| Request | Read |
|---|---|
| What a session file is, what it stores, version support | `automation/session-file.md` |
| Saving a session (Session file panel, on exit, default file name) | `automation/saving-sessions.md` |
| Restoring a session before or after reading a model (New Model panel) | `automation/reading-session-files-in-a-new-session.md` |
| `UTILITIES` / `SESSION_FILE` menu options and behaviour | `automation/utilities-session-file.md` |
| Command files: overview, format, compatibility | `automation/introduction-to-command-files.md`, `automation/more-information-about-command-files.md`, `automation/compatibility-with-files-from-earlier-releases-of-d3plot.md`, `automation/g-command-files.md` |
| Recording command files | `automation/recording-files.md`, `automation/how-screen-menu-events-are-recorded.md`, `automation/using-the-launcher-box-during-recording-and-playback.md`, `automation/cfile-invoking-the-command-file-launcher-box.md` |
| Playing back command files and checkpoint files | `automation/playing-back-files.md`, `automation/what-happens-when-a-checkpoint-file-runs.md`, `automation/c-command-windows-file-associations.md` |
| Starting D3PLOT from the command line, valid arguments | `automation/command-line-options.md`, `automation/valid-d3plot-command-line-arguments.md`, `automation/command-line-syntax.md` |
| Running a command file in batch (`-cf=`, `-exit`) | `automation/running-command-files-from-the-command-line.md` |
| Running JavaScripts (batch mode, compile and run, GUI scripts, script library) | `automation/running-a-javascript-in-batch-mode.md`, `automation/the-javascript-interface.md`, `automation/compiling-and-running-a-script.md`, `automation/running-the-script.md`, `automation/scripts-using-guis.md`, `automation/maintaining-a-library-of-javascripts.md` |

Rules:

- Answer from these files. Do not invent session-file options, command-line
  arguments, menu names, file extensions, or behaviour that they do not
  document.
- Session files and command files are D3PLOT features, not JavaScript API
  classes. If a script needs one and `references/js-api/` has no matching
  class or method, say so and describe the documented GUI, command-line, or
  dialogue route rather than guessing an API call.
- Do not apply T/HIS FAST-TCF or `.tsf` guidance to D3PLOT. D3PLOT uses `.dsf`
  files.

## Golden Rules


- Before generating code, verify every class, method, property, argument, and
command against the local API references and declaration file. Do not guess
undocumented API names.
- Use only documented D3PLOT APIs for D3PLOT stages. Do not substitute PRIMER,
T/HIS, or REPORTER classes, methods, properties, constants, commands, or
imports.