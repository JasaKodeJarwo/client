function artikelterbaru(e){document.write("<ul>");for(var t=0;t<e.feed.entry.length;t++){for(var r=0;r<e.feed.entry[t].link.length&&"alternate"!=e.feed.entry[t].link[r].rel;r++);var n="<li><a href="+("'"+e.feed.entry[t].link[r].href+"'")+'">'+e.feed.entry[t].title.$t+"</a> </li>";document.write(n)}document.write("</ul>")};document.write('<script src="/feeds/posts/summary/?max-results=7&alt=json-in-script&callback=artikelterbaru"></script>')
