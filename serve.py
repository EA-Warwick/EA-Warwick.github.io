"""Local preview server that resolves /page to page.html, like GitHub Pages.

Usage: python serve.py [port]   (default 8000)
"""
import http.server
import os
import sys


class CleanURLHandler(http.server.SimpleHTTPRequestHandler):
    def translate_path(self, path):
        fs_path = super().translate_path(path)
        if not os.path.exists(fs_path) and os.path.exists(fs_path + ".html"):
            return fs_path + ".html"
        return fs_path


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
    print(f"Serving on http://localhost:{port}")
    http.server.ThreadingHTTPServer(("", port), CleanURLHandler).serve_forever()
