# Copyright (c) 2026 Mr-Aurevo-X. All rights reserved.
# SPDX-License-Identifier: PolyForm-Noncommercial-1.0.0
# Author: Mr-Aurevo-X · https://github.com/Mr-Aurevo-X

"""TimeTools — horodatage, chrono, minuteries & Pomodoro (100 % local).

© 2026 Mr-Aurevo-X · TimeTools · 100% local · free · updates not guaranteed
All rights reserved. Redistribution / reverse engineering without written consent forbidden.
"""
# © 2026 Mr-Aurevo-X · TimeTools · 100% local · free · updates not guaranteed
from __future__ import annotations

import json
import os
import sys
from pathlib import Path

import webview

_HOST_DIR = Path(__file__).resolve().parent
if str(_HOST_DIR) not in sys.path:
    sys.path.insert(0, str(_HOST_DIR))

import updater as app_updater
from window_chrome import create_tool_window, WindowChromeMixin

DEFAULT_ACCENT = "#5c7cfa"
ENV_ACCENT = "MRAUREVOX_ACCENT"
ENV_LANG = "MRAUREVOX_LANG"


def _local_appdata() -> Path:
    local = os.environ.get("LOCALAPPDATA") or str(Path.home() / "AppData" / "Local")
    return Path(local) / "Mr-Aurevo-X"


def _read_suite_setting(key: str) -> str | None:
    path = _local_appdata() / "user-settings.json"
    if path.is_file():
        try:
            loaded = json.loads(path.read_text(encoding="utf-8-sig"))
            val = str((loaded or {}).get(key) or "").strip()
            return val or None
        except (OSError, json.JSONDecodeError, TypeError):
            pass
    return None


def resolve_suite_accent(default: str = DEFAULT_ACCENT) -> str:
    env = (os.environ.get(ENV_ACCENT) or "").strip()
    if env.startswith("#") and len(env) in (4, 7):
        return env
    val = _read_suite_setting("accent")
    if val and val.startswith("#") and len(val) in (4, 7):
        return val
    return default


def resolve_suite_language(default: str = "fr") -> str:
    env = (os.environ.get(ENV_LANG) or "").strip().lower()
    if env in ("fr", "en"):
        return env
    val = (_read_suite_setting("language") or "").lower()
    return val if val in ("fr", "en") else default


def resolve_suite_theme(default: str = "dark") -> str:
    val = (_read_suite_setting("theme") or "").lower()
    return val if val in ("dark", "light") else default


def app_dir() -> Path:
    if getattr(sys, "frozen", False):
        return Path(sys.executable).resolve().parent
    return Path(__file__).resolve().parent.parent


def ui_dir() -> Path:
    external = app_dir() / "ui"
    if (external / "index.html").is_file():
        return external
    if getattr(sys, "frozen", False):
        base = Path(getattr(sys, "_MEIPASS", app_dir()))
        nested = base / "ui"
        return nested if nested.is_dir() else base
    return app_dir() / "ui"


class Api(WindowChromeMixin):
    """JS bridge — © 2026 Mr-Aurevo-X · TimeTools · all rights reserved."""

    def __init__(self) -> None:
        self._window = None
        self._maximized = False

    def set_window(self, window) -> None:
        WindowChromeMixin.set_window(self, window)

    def get_suite_settings(self) -> dict:
        return {
            "ok": True,
            "accent": resolve_suite_accent(),
            "language": resolve_suite_language(),
            "theme": resolve_suite_theme(),
        }

    def get_suite_accent(self) -> dict:
        return {"ok": True, "accent": resolve_suite_accent()}

    def get_suite_language(self) -> dict:
        return {"ok": True, "language": resolve_suite_language()}

    def get_suite_theme(self) -> dict:
        return {"ok": True, "theme": resolve_suite_theme()}

    def get_version(self) -> dict:
        return {
            "ok": True,
            "version": app_updater.read_local_version(),
            "repo": app_updater.RELEASE_REPO,
        }

    def check_for_update(self) -> dict:
        return app_updater.check_for_update()

    def apply_update(self) -> dict:
        return app_updater.apply_update()

    def dismiss_update(self, version: str | None = None) -> dict:
        return app_updater.dismiss_update(version)

    def set_auto_update(self, enabled: bool = False) -> dict:
        return app_updater.set_auto_update(bool(enabled))

    def beep(self, kind: str = "alarm") -> dict:
        """Optional local system sound (Windows). No-op if unavailable."""
        try:
            import winsound

            if kind == "tick":
                winsound.Beep(880, 90)
            else:
                winsound.MessageBeep(getattr(winsound, "MB_ICONEXCLAMATION", 0x30))
            return {"ok": True}
        except Exception as exc:  # noqa: BLE001
            return {"ok": False, "error": str(exc)}

    def copy_text(self, text: str) -> dict:
        text = text if isinstance(text, str) else str(text or "")
        try:
            import tkinter as tk

            root = tk.Tk()
            root.withdraw()
            root.clipboard_clear()
            root.clipboard_append(text)
            root.update()
            root.destroy()
            return {"ok": True}
        except Exception as exc:  # noqa: BLE001
            return {"ok": False, "error": str(exc)}


def main() -> None:
    # © 2026 Mr-Aurevo-X · TimeTools · windowed host entry
    ui = ui_dir()
    index = ui / "index.html"
    if not index.is_file():
        raise SystemExit(f"UI missing: {index}")
    api = Api()
    create_tool_window(
        title="TimeTools — Mr-Aurevo-X",
        url=index.as_uri(),
        js_api=api,
        width=1080,
        height=760,
        min_size=(900, 600),
        background_color="#0b0b0d",
    )
    webview.start()


if __name__ == "__main__":
    # © 2026 Mr-Aurevo-X · TimeTools · 100% local · free · updates not guaranteed
    main()
