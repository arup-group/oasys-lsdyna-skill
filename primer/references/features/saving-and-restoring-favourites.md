## Saving and Restoring Favourites

The contents of the Favourites menus are saved to a custom config file, oa.conf, that resides in your home directory. The flexible format of the config file allows easy specification of alternate button names, hierarchy levels, custom button text and so on. Interactive editing of the config file data is available so text-editing is neither essential nor recommended.

OA\_ADMIN and OA\_INSTALL variants of this file can also be created as needed, simply manually copy an oa.conf file into the relevant OA\_ADMIN or OA\_INSTALL directory. The OA\_ADMIN variant can also contain a 'locked' key which, when set to **true**, adds a set of buttons that are always mapped first and cannot be edited or removed by a user. Here's what a sample OA\_ADMIN config file can look like:

# oa.conf file currently used by the Favourites menus

title = 'Oasys Config (Admin)'
version = 20.0

[favourites]
locked = true # Akin to a locked pref

[fav\_tools\_primer]

[[fav\_tools\_primer\_item]]
text = 'Arup script'
custom = true
level = 0

[[fav\_tools\_primer\_item]]
text = 'FMH markup'
level = 1

[[fav\_tools\_primer\_item]]
text = 'Spl. line'
full\_name = 'Split | With line'
level = 0

[[fav\_tools\_primer\_item]]
text = 'テスト'
source = 'C:\Temp\beam\_to\_iges.js'	# filename for bespoke script
level = 0

[fav\_keywords\_primer]

[[fav\_keywords\_primer\_item]]
text = 'AB\_TYPE'
full\_name = 'AIRBAG | AB\_TYPE'
level = 0

[end\_favourites]

[Previous](editing-your-favourites-menu.md)  |  [Next](current-limitations.md)