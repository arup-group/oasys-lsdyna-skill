declare class Colour {
/**
 * Returns the colour for a given core or user colour name
 * @param name The name of the colour, for example red or user_green or green/cyan.
 * @returns colour value (integer)
 */
    static GetFromName(name: string): number;

/**
 * Creates a colour from red, green and blue components
 * @param red red component of colour (0-255).
 * @param green green component of colour (0-255).
 * @param blue blue component of colour (0-255).
 * @returns colour value (integer)
 */
    static RGB(red: number, green: number, blue: number): number;

/** Background colour */
    static BACKGROUND: number;
/** Colour black */
    static BLACK: number;
/** Colour blue */
    static BLUE: number;
/** Colour cyan */
    static CYAN: number;
/** Colour dark green */
    static DARK_GREEN: number;
/** Colour dark grey */
    static DARK_GREY: number;
/** Colour dark magenta */
    static DARK_MAGENTA: number;
/** Foreground colour */
    static FOREGROUND: number;
/** Colour gold */
    static GOLD: number;
/** Colour green */
    static GREEN: number;
/** Colour hot pink */
    static HOT_PINK: number;
/** Colour indigo */
    static INDIGO: number;
/** Colour light grey */
    static LIGHT_GREY: number;
/** Colour light pink */
    static LIGHT_PINK: number;
/** Colour lime */
    static LIME: number;
/** Colour magenta */
    static MAGENTA: number;
/** Colour maroon */
    static MAROON: number;
/** Colour medium blue */
    static MEDIUM_BLUE: number;
/** Colour medium green */
    static MEDIUM_GREEN: number;
/** Colour medium grey */
    static MEDIUM_GREY: number;
/** Colour navy */
    static NAVY: number;
/** Colour olive */
    static OLIVE: number;
/** Colour orange */
    static ORANGE: number;
/** Colourpale yellow */
    static PALE_YELLOW: number;
/** Colour pink */
    static PINK: number;
/** Colour purple */
    static PURPLE: number;
/** Colour red */
    static RED: number;
/** Colour sea green */
    static SEA_GREEN: number;
/** Colour sky */
    static SKY: number;
/** Colour turquoise */
    static TURQUOISE: number;
/** Colour user defined 1 */
    static USER_1: number;
/** Colour user defined 2 */
    static USER_2: number;
/** Colour user defined 3 */
    static USER_3: number;
/** Colour user defined 4 */
    static USER_4: number;
/** Colour user defined 5 */
    static USER_5: number;
/** Colour user defined 6 */
    static USER_6: number;
/** Colour user defined colour 7 */
    static USER_7: number;
/** Colour user defined colour 8 */
    static USER_8: number;
/** Colour user defined colour 9 */
    static USER_9: number;
/** Colour user defined colour 10 */
    static USER_10: number;
/** Colour user defined colour 11 */
    static USER_11: number;
/** Colour user defined colour 12 */
    static USER_12: number;
/** Colour user defined colour 13 */
    static USER_13: number;
/** Colour user defined colour 14 */
    static USER_14: number;
/** Colour user defined colour 15 */
    static USER_15: number;
/** Colour user defined colour 16 */
    static USER_16: number;
/** Colour user defined colour 17 */
    static USER_17: number;
/** Colour user defined colour 18 */
    static USER_18: number;
/** Colour user defined colour 19 */
    static USER_19: number;
/** Colour user defined colour 20 */
    static USER_20: number;
/** Colour user defined colour 21 */
    static USER_21: number;
/** Colour user defined colour 22 */
    static USER_22: number;
/** Colour user defined colour 23 */
    static USER_23: number;
/** Colour user defined colour 24 */
    static USER_24: number;
/** Colour user defined colour 25 */
    static USER_25: number;
/** Colour user defined colour 26 */
    static USER_26: number;
/** Colour user defined colour 27 */
    static USER_27: number;
/** Colour user defined colour 28 */
    static USER_28: number;
/** Colour user defined colour 29 */
    static USER_29: number;
/** Colour user defined colour 30 */
    static USER_30: number;
/** Colour user defined colour 31 */
    static USER_31: number;
/** Colour user defined colour 32 */
    static USER_32: number;
/** Colour user defined colour 33 */
    static USER_33: number;
/** Colour user defined colour 34 */
    static USER_34: number;
/** Colour user defined colour 35 */
    static USER_35: number;
/** Colour user defined colour 36 */
    static USER_36: number;
/** Colour user defined colour 37 */
    static USER_37: number;
/** Colour user defined colour 38 */
    static USER_38: number;
/** Colour user defined colour 39 */
    static USER_39: number;
/** Colour user defined colour 40 */
    static USER_40: number;
/** Colour user defined colour 41 */
    static USER_41: number;
/** Colour user defined colour 42 */
    static USER_42: number;
/** Colour user defined colour 43 */
    static USER_43: number;
/** Colour user defined colour 44 */
    static USER_44: number;
/** Colour user defined colour 45 */
    static USER_45: number;
/** Colour user defined colour 46 */
    static USER_46: number;
/** Colour user defined colour 47 */
    static USER_47: number;
/** Colour user defined colour 48 */
    static USER_48: number;
/** Colour user defined colour 49 */
    static USER_49: number;
/** Colour user defined colour 50 */
    static USER_50: number;
/** Colour user defined colour 51 */
    static USER_51: number;
/** Colour user defined colour 52 */
    static USER_52: number;
/** Colour user defined colour 53 */
    static USER_53: number;
/** Colour user defined colour 54 */
    static USER_54: number;
/** Colour user defined colour 55 */
    static USER_55: number;
/** Colour user defined colour 56 */
    static USER_56: number;
/** Colour user defined colour 57 */
    static USER_57: number;
/** Colour user defined colour 58 */
    static USER_58: number;
/** Colour user defined colour 59 */
    static USER_59: number;
/** Colour user defined colour 60 */
    static USER_60: number;
/** Colour user defined colour 61 */
    static USER_61: number;
/** Colour user defined colour 62 */
    static USER_62: number;
/** Colour user defined colour 63 */
    static USER_63: number;
/** Colour user defined colour 64 */
    static USER_64: number;
/** Colour user defined colour 65 */
    static USER_65: number;
/** Colour user defined colour 66 */
    static USER_66: number;
/** Colour user defined colour 67 */
    static USER_67: number;
/** Colour user defined colour 68 */
    static USER_68: number;
/** Colour user defined colour 69 */
    static USER_69: number;
/** Colour user defined colour 70 */
    static USER_70: number;
/** Colour user defined colour 71 */
    static USER_71: number;
/** Colour user defined colour 72 */
    static USER_72: number;
/** Colour user defined colour 73 */
    static USER_73: number;
/** Colour user defined colour 74 */
    static USER_74: number;
/** Colour user defined colour 75 */
    static USER_75: number;
/** Colour user defined colour 76 */
    static USER_76: number;
/** Colour user defined colour 77 */
    static USER_77: number;
/** Colour user defined colour 78 */
    static USER_78: number;
/** Colour user defined colour 79 */
    static USER_79: number;
/** Colour user defined colour 80 */
    static USER_80: number;
/** Colour user defined colour 81 */
    static USER_81: number;
/** Colour user defined colour 82 */
    static USER_82: number;
/** Colour user defined colour 83 */
    static USER_83: number;
/** Colour user defined colour 84 */
    static USER_84: number;
/** Colour user defined colour 85 */
    static USER_85: number;
/** Colour user defined colour 86 */
    static USER_86: number;
/** Colour user defined colour 87 */
    static USER_87: number;
/** Colour user defined colour 88 */
    static USER_88: number;
/** Colour user defined colour 89 */
    static USER_89: number;
/** Colour user defined colour 90 */
    static USER_90: number;
/** Colour user defined colour 91 */
    static USER_91: number;
/** Colour user defined colour 92 */
    static USER_92: number;
/** Colour user defined colour 93 */
    static USER_93: number;
/** Colour user defined colour 94 */
    static USER_94: number;
/** Colour user defined colour 95 */
    static USER_95: number;
/** Colour user defined colour 96 */
    static USER_96: number;
/** Colour user defined colour 97 */
    static USER_97: number;
/** Colour user defined colour 98 */
    static USER_98: number;
/** Colour user defined colour 99 */
    static USER_99: number;
/** Colour user defined colour 100 */
    static USER_100: number;
/** Colour user defined colour 101 */
    static USER_101: number;
/** Colour user defined colour 102 */
    static USER_102: number;
/** Colour user defined colour 103 */
    static USER_103: number;
/** Colour user defined colour 104 */
    static USER_104: number;
/** Colour user defined colour 105 */
    static USER_105: number;
/** Colour user defined colour 106 */
    static USER_106: number;
/** Colour user defined colour 107 */
    static USER_107: number;
/** Colour user defined colour 108 */
    static USER_108: number;
/** Colour user defined colour 109 */
    static USER_109: number;
/** Colour user defined colour 110 */
    static USER_110: number;
/** Colour user defined colour 111 */
    static USER_111: number;
/** Colour user defined colour 112 */
    static USER_112: number;
/** Colour user defined colour 113 */
    static USER_113: number;
/** Colour user defined colour 114 */
    static USER_114: number;
/** Colour user defined colour 115 */
    static USER_115: number;
/** Colour user defined colour 116 */
    static USER_116: number;
/** Colour user defined colour 117 */
    static USER_117: number;
/** Colour user defined colour 118 */
    static USER_118: number;
/** Colour user defined colour 119 */
    static USER_119: number;
/** Colour user defined colour 120 */
    static USER_120: number;
/** Colour user defined colour 121 */
    static USER_121: number;
/** Colour user defined colour 122 */
    static USER_122: number;
/** Colour user defined colour 123 */
    static USER_123: number;
/** Colour user defined colour 124 */
    static USER_124: number;
/** Colour user defined colour 125 */
    static USER_125: number;
/** Colour user defined colour 126 */
    static USER_126: number;
/** Colour user defined colour 127 */
    static USER_127: number;
/** Colour user defined colour 128 */
    static USER_128: number;
/** Colour user defined colour 129 */
    static USER_129: number;
/** Colour user defined colour 130 */
    static USER_130: number;
/** Colour user defined colour 131 */
    static USER_131: number;
/** Colour user defined colour 132 */
    static USER_132: number;
/** Colour user defined colour 133 */
    static USER_133: number;
/** Colour user defined colour 134 */
    static USER_134: number;
/** Colour user defined colour 135 */
    static USER_135: number;
/** Colour user defined colour 136 */
    static USER_136: number;
/** Colour user defined colour 137 */
    static USER_137: number;
/** Colour user defined colour 138 */
    static USER_138: number;
/** Colour user defined colour 139 */
    static USER_139: number;
/** Colour user defined colour 140 */
    static USER_140: number;
/** Colour user defined colour 141 */
    static USER_141: number;
/** Colour user defined colour 142 */
    static USER_142: number;
/** Colour user defined colour 143 */
    static USER_143: number;
/** Colour user defined colour 144 */
    static USER_144: number;
/** Colour user defined colour 145 */
    static USER_145: number;
/** Colour user defined colour 146 */
    static USER_146: number;
/** Colour user defined colour 147 */
    static USER_147: number;
/** Colour user defined colour 148 */
    static USER_148: number;
/** Colour user defined colour 149 */
    static USER_149: number;
/** Colour user defined colour 150 */
    static USER_150: number;
/** Colour user defined colour 151 */
    static USER_151: number;
/** Colour user defined colour 152 */
    static USER_152: number;
/** Colour user defined colour 153 */
    static USER_153: number;
/** Colour user defined colour 154 */
    static USER_154: number;
/** Colour user defined colour 155 */
    static USER_155: number;
/** Colour user defined colour 156 */
    static USER_156: number;
/** Colour user defined colour 157 */
    static USER_157: number;
/** Colour user defined colour 158 */
    static USER_158: number;
/** Colour user defined colour 159 */
    static USER_159: number;
/** Colour user defined colour 160 */
    static USER_160: number;
/** Colour user defined colour 161 */
    static USER_161: number;
/** Colour user defined colour 162 */
    static USER_162: number;
/** Colour user defined colour 163 */
    static USER_163: number;
/** Colour user defined colour 164 */
    static USER_164: number;
/** Colour user defined colour 165 */
    static USER_165: number;
/** Colour user defined colour 166 */
    static USER_166: number;
/** Colour user defined colour 167 */
    static USER_167: number;
/** Colour user defined colour 168 */
    static USER_168: number;
/** Colour user defined colour 169 */
    static USER_169: number;
/** Colour user defined colour 170 */
    static USER_170: number;
/** Colour user defined colour 171 */
    static USER_171: number;
/** Colour user defined colour 172 */
    static USER_172: number;
/** Colour user defined colour 173 */
    static USER_173: number;
/** Colour user defined colour 174 */
    static USER_174: number;
/** Colour user defined colour 175 */
    static USER_175: number;
/** Colour user defined colour 176 */
    static USER_176: number;
/** Colour user defined colour 177 */
    static USER_177: number;
/** Colour user defined colour 178 */
    static USER_178: number;
/** Colour user defined colour 179 */
    static USER_179: number;
/** Colour user defined colour 180 */
    static USER_180: number;
/** Colour user defined colour 181 */
    static USER_181: number;
/** Colour user defined colour 182 */
    static USER_182: number;
/** Colour user defined colour 183 */
    static USER_183: number;
/** Colour user defined colour 184 */
    static USER_184: number;
/** Colour user defined colour 185 */
    static USER_185: number;
/** Colour user defined colour 186 */
    static USER_186: number;
/** Colour user defined colour 187 */
    static USER_187: number;
/** Colour user defined colour 188 */
    static USER_188: number;
/** Colour user defined colour 189 */
    static USER_189: number;
/** Colour user defined colour 190 */
    static USER_190: number;
/** Colour user defined colour 191 */
    static USER_191: number;
/** Colour user defined colour 192 */
    static USER_192: number;
/** Colour user defined colour 193 */
    static USER_193: number;
/** Colour user defined colour 194 */
    static USER_194: number;
/** Colour user defined colour 195 */
    static USER_195: number;
/** Colour user defined colour 196 */
    static USER_196: number;
/** Colour user defined colour 197 */
    static USER_197: number;
/** Colour user defined colour 198 */
    static USER_198: number;
/** Colour user defined colour 199 */
    static USER_199: number;
/** Colour user defined colour 200 */
    static USER_200: number;
/** Colour user defined colour 201 */
    static USER_201: number;
/** Colour user defined colour 202 */
    static USER_202: number;
/** Colour user defined colour 203 */
    static USER_203: number;
/** Colour user defined colour 204 */
    static USER_204: number;
/** Colour user defined colour 205 */
    static USER_205: number;
/** Colour user defined colour 206 */
    static USER_206: number;
/** Colour user defined colour 207 */
    static USER_207: number;
/** Colour user defined colour 208 */
    static USER_208: number;
/** Colour user defined colour 209 */
    static USER_209: number;
/** Colour user defined colour 210 */
    static USER_210: number;
/** Colour user defined colour 211 */
    static USER_211: number;
/** Colour user defined colour 212 */
    static USER_212: number;
/** Colour user defined colour 213 */
    static USER_213: number;
/** Colour user defined colour 214 */
    static USER_214: number;
/** Colour user defined colour 215 */
    static USER_215: number;
/** Colour user defined colour 216 */
    static USER_216: number;
/** Colour user defined colour 217 */
    static USER_217: number;
/** Colour user defined colour 218 */
    static USER_218: number;
/** Colour user defined colour 219 */
    static USER_219: number;
/** Colour user defined colour 220 */
    static USER_220: number;
/** Colour user defined colour 221 */
    static USER_221: number;
/** Colour user defined colour 222 */
    static USER_222: number;
/** Colour user defined colour 223 */
    static USER_223: number;
/** Colour user defined colour 224 */
    static USER_224: number;
/** Colour user defined colour 225 */
    static USER_225: number;
/** Colour user defined colour 226 */
    static USER_226: number;
/** Colour user defined colour 227 */
    static USER_227: number;
/** Colour user defined colour 228 */
    static USER_228: number;
/** Colour user defined colour 229 */
    static USER_229: number;
/** Colour user defined colour 230 */
    static USER_230: number;
/** Colour user defined colour 231 */
    static USER_231: number;
/** Colour user defined colour 232 */
    static USER_232: number;
/** Colour user defined colour 233 */
    static USER_233: number;
/** Colour user defined colour 234 */
    static USER_234: number;
/** Colour user defined colour 235 */
    static USER_235: number;
/** Colour user defined colour 236 */
    static USER_236: number;
/** Colour user defined colour 237 */
    static USER_237: number;
/** Colour user defined colour 238 */
    static USER_238: number;
/** Colour user defined colour 239 */
    static USER_239: number;
/** Colour user defined colour 240 */
    static USER_240: number;
/** Colour user defined colour 241 */
    static USER_241: number;
/** Colour user defined colour 242 */
    static USER_242: number;
/** Colour user defined colour 243 */
    static USER_243: number;
/** Colour user defined colour 244 */
    static USER_244: number;
/** Colour user defined colour 245 */
    static USER_245: number;
/** Colour user defined colour 246 */
    static USER_246: number;
/** Colour user defined colour 247 */
    static USER_247: number;
/** Colour user defined colour 248 */
    static USER_248: number;
/** Colour user defined colour 249 */
    static USER_249: number;
/** Colour user defined colour 250 */
    static USER_250: number;
/** Colour user defined colour 251 */
    static USER_251: number;
/** Colour user defined colour 252 */
    static USER_252: number;
/** Colour user defined colour 253 */
    static USER_253: number;
/** Colour user defined colour 254 */
    static USER_254: number;
/** Colour user defined colour 255 */
    static USER_255: number;
/** Colour white */
    static WHITE: number;
/** Colour yellow */
    static YELLOW: number;
}

declare class Constant {
/** Bottom shell surface */
    static BOTTOM: number;
/** Middle shell surface */
    static MIDDLE: number;
/** Top shell surface */
    static TOP: number;
}

declare class Curve {
/**
 * Adds flagged curves to a graph.
 * @param flag Flag to check on the curve
 * @param graph Graph to add the curve to. If undefined then the curve is added to all graphs.
 *        This argument can be repeated if required.
 */
    static AddFlaggedToGraph(flag: number, ...graph: number[]): void;

/**
 * Adds flagged curves to a graph.
 * @param flag Flag to check on the curve
 * @param graph Array where each element specifies a Graph to add the curve to. If undefined then the curve is added to all graphs.
 */
    static AddFlaggedToGraph(flag: number, graph: number[]): void;

/**
 * Adds a point at the end of the curve.
 * @param xvalue The x value of the point.
 * @param yvalue The y value of the point.
 */
    AddPoint(xvalue: number, yvalue: number): void;

/**
 * Adds a curve to a graph.
 * @param graph Graph to add the curve to. If undefined then the curve is added to all graphs.
 *        This argument can be repeated if required.
 */
    AddToGraph(...graph: number[]): void;

/**
 * Adds a curve to a graph.
 * @param graph Array where each element specifies a Graph to add the curve to. If undefined then the curve is added to all graphs.
 */
    AddToGraph(graph: number[]): void;

/**
 * Clears a flag on the curve.
 * @param flag Flag to clear on the curve
 */
    ClearFlag(flag: number): void;

/**
 * Copies a curve.
 * @param source ID of curve to copy from
 * @param target ID of curve to copy to
 */
    static Copy(source: number, target: number): void;

/**
 * Deletes a curve
 * @param curve ID of curve to delete
 */
    static Delete(curve: number): void;

/**
 * Deletes flagged curves
 * @param flag Flag to check on the curve
 */
    static DeleteFlagged(flag: number): void;

/**
 * Deletes a point in a curve. The input for the point number should start at 1 for the 1st point not zero.
 * @param ipt The point you want to insert the data before or after.
 */
    DeletePoint(ipt: number): void;

/**
 * Checks if a curve exists
 * @param curve ID of curve to check
 * @returns TRUE if the curve exists, otherwise FALSE
 */
    static Exists(curve: number): boolean;

/**
 * Returns the first curve.
 * @returns Curve object (or null if there are no more curves in the model).
 */
    static First(): Curve;

/**
 * Returns the ID of the first free curve.
 * @returns ID of first unsued curve.
 */
    static FirstFreeID(): number;

/**
 * Returns the ID of the first curve.
 * @returns ID of the first curve defined.
 */
    static FirstID(): number;

/**
 * Flags all of the curves with a defined flag
 * @param flag Flag to set on the curves
 */
    static FlagAll(flag: number): void;

/**
 * Checks if the curve is flagged or not.
 * @param flag Flag to check on the curve
 * @returns true if flagged, false if not.
 */
    Flagged(flag: number): boolean;

/**
 * Freezes an unblanked curve on one or all graphs.
 * @param graph Graph number to freeze curve on or 0 for all graphs.
 * @param Freeze_option No argument or 1 to freeze the curve, 0 to unfreeze.
 */
    Freeze(graph: number, Freeze_option: number): void;

/**
 * Returns an array of all curves flagged with a given flag.
 * @param flag Flag for which to return flagged objects.
 * @returns Array of Curve objects (or null if no curves are flagged)
 */
    static GetFlagged(flag: number): Curve[];

/**
 * Returns the curve object for a curve ID.
 * @param ID ID of curve to return object for
 * @returns Curve object (or null if the curve does not exist.
 */
    static GetFromID(ID: number): Curve;

/**
 * Finds a curve from it's Tag. This function is only available when running a Javascript from within a FAST-TCF script
 * @param TAG TAG of curve to return object for
 * @returns Curve object (or null if there are no free curves).
 */
    static GetFromTag(TAG: string): Curve;

/**
 * Returns x and y data for a point in a curve. The input for the point number should start at 1 for the 1st point not zero. In the array returned array[0] contains the x axis value and array[1] contains the y-axis value.
 * @param row The point you want the data for.
 * @returns An array of numbers containing the x and y point values
 */
    GetPoint(row: number): number[];

/**
 * Returns the ID of the highest curve currently being used
 * @returns ID of highest curve currently being used.
 */
    static HighestID(): number;

/**
 * Inserts a new point before or after the specified point.
 * @param ipt The point you want to insert the data before or after.
 * @param xvalue The x value of the point.
 * @param yvalue The y value of the point.
 * @param position Specify either before or after the selected pioint. Use 'Curve.BEFORE' for before, and 'Curve.AFTER' for after.
 */
    InsertPoint(ipt: number, xvalue: number, yvalue: number, position: number): void;

/**
 * Returns the next curve in the model.
 * @returns Curve object (or null if there are no more curves in the model).
 */
    Next(): Curve;

/**
 * Picks a single curve.
 * @param prompt Text to display as a prompt to the user
 * @param modal If selection is modal (blocks the user from doing anything else in T/HIS until this window is dismissed). If omitted the selection will be modal.
 * @returns Curve object (or null if the user cancels the pick operation).
 */
    static Pick(prompt: string, modal?: boolean): Curve;

/**
 * Returns the previous curve in the model.
 * @returns Curve object (or null if there are no more curves in the model).
 */
    Previous(): Curve;

/**
 * Removes flagged curves from a graph.
 * @param flag Flag to check on the curve
 * @param graph Graph to remove the curve from. If undefined then the curve is removed from all graphs.
 *        This argument can be repeated if required.
 */
    static RemoveFlaggedFromGraph(flag: number, ...graph: number[]): void;

/**
 * Removes flagged curves from a graph.
 * @param flag Flag to check on the curve
 * @param graph Array where each element specifies a Graph to remove the curve from. If undefined then the curve is removed from all graphs.
 */
    static RemoveFlaggedFromGraph(flag: number, graph: number[]): void;

/**
 * Removes a curve from a graph.
 * @param graph Graph to remove the curve from, If undefined then the curve is removed from all graphs.
 *        This argument can be repeated if required.
 */
    RemoveFromGraph(...graph: number[]): void;

/**
 * Removes a curve from a graph.
 * @param graph Array where each element specifies a Graph to remove the curve from, If undefined then the curve is removed from all graphs.
 */
    RemoveFromGraph(graph: number[]): void;

/**
 * Allows the user to select curves.
 * @param flag Flag to use when selecting curves
 * @param prompt Text to display as a prompt to the user
 * @param modal If selection is modal (blocks the user from doing anything else in T/HIS until this window is dismissed). If omitted the selection will be modal.
 * @returns Number of items selected or null if menu cancelled
 */
    static Select(flag: number, prompt: string, modal?: boolean): number;

/**
 * Sets a flag on the curve.
 * @param flag Flag to set on the curve
 */
    SetFlag(flag: number): void;

/**
 * Sets the x and y values for a specified point in a curve.
 * @param ipt The point to set the data for.
 * @param xvalue The x value of the point.
 * @param yvalue The y value of the point.
 */
    SetPoint(ipt: number, xvalue: number, yvalue: number): void;

/**
 * Unsets a defined flag on all of the curves.
 * @param flag Flag to unset on the curves
 */
    static UnflagAll(flag: number): void;

/**
 * Updates a curve properties (min,max, average values etc).
 */
    Update(): void;

/**
 * Returns the y value of the curve at a given x value, interpolating if requested x value lies between data points.
 * @param xvalue The x value.
 * @returns Y value
 */
    YatX(xvalue: number): number;

/**
 * Create a new Curve object. The curve will be added to all the currently active graphs.
 * @param lcid Curve number
 * @param tag Tag used to reference the curve in FAST-TCF scripts
 * @param Line_label Line label for the curve
 * @param X_axis_label X-axis label for the curve
 * @param Y_axis_label Y-axis label for the curve
 * @returns Curve object
 */
    constructor(lcid: number, tag?: string, Line_label?: string, X_axis_label?: string, Y_axis_label?: string);

/** Curve average value */
    readonly average: number;
/** The Colour of the curve */
    colour: number;
/** Directory the curve came from */
    directory: string;
/** The ID of the entity that the curve was generated from. */
    entity_id: number;
/** The Entity type that the curve was generated from */
    entity_type: number;
/** Filename the curve came from */
    file: string;
/** Curve HIC value - returns 0.0 if the HIC hasn't been calculated */
    readonly hic: number;
/** End of HIC time windows - returns 0.0 if the HIC hasn't been calculated */
    readonly hic_tmax: number;
/** Start of HIC time windows - returns 0.0 if the HIC hasn't been calculated */
    readonly hic_tmin: number;
/** Curve HIC(d) value - returns 0.0 if the HIC(d) hasn't been calculated */
    readonly hicd: number;
/** End of HIC(d) time windows - returns 0.0 if the HIC(d) hasn't been calculated */
    readonly hicd_tmax: number;
/** Start of HIC(d) time windows - returns 0.0 if the HIC(d) hasn't been calculated */
    readonly hicd_tmin: number;
/** Curve ID */
    readonly id: number;
/** Returns 1 if the curve is NULL */
    readonly is_null: number;
/** Curve label */
    label: string;
/** The ID of the model that a curve was read from. */
    model: number;
/** Number of curve points */
    readonly npoints: number;
/** Pearson's R^2 value for regression curve, returns 0.0 if the curve has not come from the regression operation. */
    readonly regr_rsq: number;
/** Standard deviation of the linear regression gradient value, returns 0.0 if the curve has not come from linear regression. */
    readonly regr_sdgrad: number;
/** Standard deviation of the linear regression intercept value, returns 0.0 if the curve has not come from linear regression. */
    readonly regr_sdicpt: number;
/** Standard deviation of the linear regression values 'y = bx + c', returns 0.0 if the curve has not come from linear regression. */
    readonly regr_sdyx: number;
/** Curve RMS value */
    readonly rms: number;
/** The LineStyle used to draw the curve */
    style: number;
/** The Symbol style for a curve */
    symbol: number;
/** Curve tag. If a FAST-TCF script is running then this is the FAST-TCF tag */
    tag: string;
/** Curve title */
    title: string;
/** 3ms Clip value - returns 0.0 if the 3ms Clip value hasn't been calculated */
    readonly tms: number;
/** End of 3ms clip time windows - returns 0.0 if the 3ms Clip hasn't been calculated */
    readonly tms_tmax: number;
/** Start of 3ms clip time windows - returns 0.0 if the 3ms Clip hasn't been calculated */
    readonly tms_tmin: number;
/** The Curve UnitSystem */
    unit_system: number;
/** The LineWidth used to draw the curve */
    width: number;
/** X axis value at the Y axis maximum */
    readonly x_at_ymax: number;
/** X axis value at the Y axis minimum */
    readonly x_at_ymin: number;
/** Curve X axis label */
    x_axis_label: string;
/** The X axis Units */
    x_axis_unit: number;
/** X axis maximum value */
    readonly xmax: number;
/** X axis minimum value */
    readonly xmin: number;
/** The Y axis used by the curve (Curve.Y1_AXIS or Curve.Y2_AXIS). (Note to turn on the display of the Y2 axis you need to set the show_y2axis on the graph to Graph.ON) */
    y_axis: number;
/** Curve Y axis label */
    y_axis_label: string;
/** The Y axis Units */
    y_axis_unit: number;
/** Y axis maximum value */
    readonly ymax: number;
/** Y axis minimum value */
    readonly ymin: number;
/** Insertion of curve data option. */
    static AFTER: number;
/** Insertion of curve data option. */
    static BEFORE: number;
/** Y1 axis option. */
    static Y1_AXIS: number;
/** Y2 axis option. */
    static Y2_AXIS: number;
}

declare class Datum {
/**
 * Adds a datum to a graph.
 * @param graph Graph to add the datum to. If undefined then the datum is added to all graphs.
 *        This argument can be repeated if required.
 */
    AddToGraph(...graph: number[]): void;

/**
 * Adds a datum to a graph.
 * @param graph Array where each element specifies a Graph to add the datum to. If undefined then the datum is added to all graphs.
 */
    AddToGraph(graph: number[]): void;

/**
 * Deletes a datum
 * @param datum Acronym of datum to delete
 */
    static Delete(datum: string): void;

/**
 * Checks if a datum exists
 * @param datum Acronym of datum to check
 * @returns TRUE if the datum exists, otherwise FALSE
 */
    static Exists(datum: string): boolean;

/**
 * Returns the first datum.
 * @returns Datum object (or null if there are no datum in the model).
 */
    static First(): Datum;

/**
 * Returns the datum object for a datum acronym.
 * @param datum Acronym of datum to return object for
 * @returns Datum object (or null if the datum does not exist).
 */
    static GetFromAcronym(datum: string): Datum;

/**
 * Returns whether a datum is on a graph.
 * @param graph Graph id
 * @returns true if it is on the graph, false otherwise
 */
    IsOnGraph(graph: number): boolean;

/**
 * Returns the next datum in the model.
 * @returns Datum object (or null if there are no more datums in the model).
 */
    Next(): Datum;

/**
 * Removes a datum from a graph.
 * @param graph Graph to remove the datum from. If undefined then the datum is removed from all graphs.
 *        This argument can be repeated if required.
 */
    RemoveFromGraph(...graph: number[]): void;

/**
 * Removes a datum from a graph.
 * @param graph Array where each element specifies a Graph to remove the datum from. If undefined then the datum is removed from all graphs.
 */
    RemoveFromGraph(graph: number[]): void;

/**
 * Create a new Datum object. The datum will be added to all the currently active graphs.
 * @param acronym Datum acronym
 * @param type Specify type of datum line. Can be Datum.CONSTANT_X, Datum.CONSTANT_Y, Datum.CONSTANT_Y2, Datum.POINTS
 * @param value Value for Datum.CONSTANT_X, Datum.CONSTANT_Y or Datum.CONSTANT_Y2 type Datum. If it is a Datum.POINTS type Datum then this should be an array of X, Y pairs or a curve ID to copy points from.
 * @param second_value Second constant value for use with constant X,Y or Y2 datums and can optionally be provided
 * @returns Datum object
 */
    constructor(acronym: string, type: number, value: number | number[], second_value?: number);

/** Datum acronym */
    acronym: string;
/** The colour above the datum line */
    fill_colour_above: Colour;
/** The colour below the datum line */
    fill_colour_below: Colour;
/** The colour in between the datum line and the optional second datum line */
    fill_colour_between: Colour;
/** The colour left of the datum line */
    fill_colour_left: Colour;
/** The colour right of the datum line */
    fill_colour_right: Colour;
/** The fill type. Can be Datum.FILL_ABOVE_BELOW, Datum.FILL_RIGHT_LEFT. Note that this can only be changed if the datum is of the type Datum.POINTS. */
    fill_type: number;
/** Datum label */
    label: string;
/** Label for optional 2nd datum line */
    label2: string;
/** The colour of the datum label */
    label_colour: Colour;
/** The label font. Can be Datum.LABEL_DEFAULT, Datum.LABEL_HELVETICA_BOLD, Datum.LABEL_HELVETICA_MEDIUM, Datum.LABEL_TIMES_BOLD, Datum.LABEL_TIMES_MEDIUM, Datum.LABEL_COURIER_BOLD, Datum.LABEL_COURIER_MEDIUM */
    label_font: number;
/** The orientation of the label. Can be Datum.LABEL_HORIZONTAL, Datum.LABEL_VERTICAL */
    label_orientation: number;
/** The label position. Can be Datum.LABEL_NONE, Datum.LABEL_ABOVE_CENTRE, Datum.LABEL_ABOVE_LEFT, Datum.LABEL_ABOVE_RIGHT, Datum.LABEL_BELOW_CENTRE, Datum.LABEL_BELOW_LEFT, Datum.LABEL_BELOW_RIGHT, Datum.LABEL_MIDDLE_LEFT, Datum.LABEL_TOP_LEFT, Datum.LABEL_BOTTOM_LEFT, Datum.LABEL_MIDDLE_RIGHT, Datum.LABEL_TOP_RIGHT, Datum.LABEL_BOTTOM_RIGHT */
    label_position: number;
/** The label font size. Can be Datum.LABEL_AUTOMATIC, Datum.LABEL_8_POINT, Datum.LABEL_10_POINT, Datum.LABEL_12_POINT, Datum.LABEL_14_POINT, Datum.LABEL_18_POINT, Datum.LABEL_24_POINT, */
    label_size: number;
/** The colour of the datum line */
    line_colour: Colour;
/** The line style used to draw the datum line */
    line_style: LineStyle;
/** The line width used to draw the datum line */
    line_width: LineWidth;
/** Constant X type datum. */
    static CONSTANT_X: number;
/** Constant Y type datum. */
    static CONSTANT_Y: number;
/** Constant Y2 type datum. */
    static CONSTANT_Y2: number;
/** Fill datum above and below. */
    static FILL_ABOVE_BELOW: number;
/** Fill datum right and left. */
    static FILL_RIGHT_LEFT: number;
/** Label font size 10. */
    static LABEL_10_POINT: number;
/** Label font size 12. */
    static LABEL_12_POINT: number;
/** Label font size 14. */
    static LABEL_14_POINT: number;
/** Label font size 16. */
    static LABEL_18_POINT: number;
/** Label font size 24. */
    static LABEL_24_POINT: number;
/** Label font size 8. */
    static LABEL_8_POINT: number;
/** Label position above centre. */
    static LABEL_ABOVE_CENTRE: number;
/** Label position above left. */
    static LABEL_ABOVE_LEFT: number;
/** Label position above right. */
    static LABEL_ABOVE_RIGHT: number;
/** Label automatic font size. */
    static LABEL_AUTOMATIC: number;
/** Label position below centre. */
    static LABEL_BELOW_CENTRE: number;
/** Label position below left. */
    static LABEL_BELOW_LEFT: number;
/** Label position below right. */
    static LABEL_BELOW_RIGHT: number;
/** Label position bottom left. */
    static LABEL_BOTTOM_LEFT: number;
/** Label position bottom right. */
    static LABEL_BOTTOM_RIGHT: number;
/** Label Courier bold font. */
    static LABEL_COURIER_BOLD: number;
/** Label Courier medium font. */
    static LABEL_COURIER_MEDIUM: number;
/** Label default font. */
    static LABEL_DEFAULT: number;
/** Label Helvetica bold font. */
    static LABEL_HELVETICA_BOLD: number;
/** Label Helvetica medium font. */
    static LABEL_HELVETICA_MEDIUM: number;
/** Label horizonal orientation. */
    static LABEL_HORIZONTAL: number;
/** Label position middle left. */
    static LABEL_MIDDLE_LEFT: number;
/** Label position middle right. */
    static LABEL_MIDDLE_RIGHT: number;
/** No label. */
    static LABEL_NONE: number;
/** Label Times bold font. */
    static LABEL_TIMES_BOLD: number;
/** Label Times medium font. */
    static LABEL_TIMES_MEDIUM: number;
/** Label position top left. */
    static LABEL_TOP_LEFT: number;
/** Label position top right. */
    static LABEL_TOP_RIGHT: number;
/** Label vertical orientation. */
    static LABEL_VERTICAL: number;
/** Points type datum. */
    static POINTS: number;
}

declare class Entity {
/** AIRBAG entity code (for all airbag related entities) */
    static AIRBAG: number;
/** AIRBAG CHAMBER DATA entity code */
    static AIRBAG_CHAMBER_DATA: number;
/** AIRBAG CPM PART DATA entity code */
    static AIRBAG_CPM_PART_DATA: number;
/** AIRBAG CPM SENSORS entity code */
    static AIRBAG_CPM_SENSORS: number;
/** AIRBAG CV PART DATA entity code */
    static AIRBAG_CV_PART_DATA: number;
/** AIRBAG DATA entity code */
    static AIRBAG_DATA: number;
/** AIRBAG PART DATA entity code */
    static AIRBAG_PART_DATA: number;
/** BEAM entity code */
    static BEAM: number;
/** DISCRETE BEAM entity code */
    static BEAM_DISCRETE: number;
/** NORMAL BEAM entity code */
    static BEAM_NORMAL: number;
/** BEARING entity code */
    static BEARING: number;
/** BOUNDARY entity code */
    static BOUNDARY: number;
/** DISCRETE NODAL LOAD entity code */
    static BOUNDARY_DIS_NODAL_LOAD: number;
/** DISCRETE RIGID BODY LOAD entity code */
    static BOUNDARY_DIS_RBODY_LOAD: number;
/** PRESSURE NODAL LOAD entity code */
    static BOUNDARY_PRES_NODAL_LOAD: number;
/** VELOCITY NODAL LOAD entity code */
    static BOUNDARY_VEL_NODAL_LOAD: number;
/** VELOCITY RIGID BODY LOAD entity code */
    static BOUNDARY_VEL_RBODY_LOAD: number;
/** CESE entity code */
    static CESE: number;
/** CESE FSI DRAG DATA entity code */
    static CESE_DRAG_DATA: number;
/** CESE NODE DATA entity code */
    static CESE_NODE_DATA: number;
/** CESE POINT DATA entity code */
    static CESE_POINT_DATA: number;
/** CESE SEGMENT SET DATA entity code */
    static CESE_SEGMENT_DATA: number;
/** CONTACT entity code */
    static CONTACT: number;
/** CONTACT ENERGIES entity code */
    static CONTACT_ENERGIES: number;
/** CONTACT FORCES entity code */
    static CONTACT_FORCES: number;
/** CURVOUT entity code */
    static CURVOUT: number;
/** DEMRCF entity code */
    static DEMRCF: number;
/** EM entity code */
    static EM: number;
/** EM BOUNDARYOUT DATA entity code */
    static EM_BOUNDARYOUT_DATA: number;
/** EM CIRCUIT0D DATA entity code */
    static EM_CIRCUIT0D_DATA: number;
/** EM CIRCUITRES DATA entity code */
    static EM_CIRCUITRES_DATA: number;
/** EM CIRCUIT DATA entity code */
    static EM_CIRCUIT_DATA: number;
/** EM GLOBAL DATA entity code */
    static EM_GLOBAL_DATA: number;
/** EM ISOPOTCONNOUT DATA entity code */
    static EM_ISOPOTCONNOUT_DATA: number;
/** EM ISOPOTOUT DATA entity code */
    static EM_ISOPOTOUT_DATA: number;
/** EM NODE DATA entity code */
    static EM_NODE_DATA: number;
/** EM PARTDATA DATA entity code */
    static EM_PARTDATA_DATA: number;
/** EM POINT DATA entity code */
    static EM_POINT_DATA: number;
/** EM RANDLESCELL DATA entity code */
    static EM_RANDLESCELL_DATA: number;
/** EM RANDLESINTSHORTCELL DATA entity code */
    static EM_RISC_DATA: number;
/** EM ROGOCOIL DATA entity code */
    static EM_ROGOCOIL_DATA: number;
/** FSI entity code */
    static FSI: number;
/** FSI SENSOR DATA entity code */
    static FSI_SENSOR_DATA: number;
/** FSI SURFACE DATA entity code */
    static FSI_SURFACE_DATA: number;
/** GEOMETRIC CONTACT entity code */
    static GEOMETRIC_CONTACT: number;
/** ICFD entity code */
    static ICFD: number;
/** ICFD DRAG DATA entity code */
    static ICFD_DRAG_DATA: number;
/** ICFD ICVOUT ICVI DATA entity code */
    static ICFD_ICVOUT_ICVI_DATA: number;
/** ICFD ICVOUT ICV DATA entity code */
    static ICFD_ICVOUT_ICV_DATA: number;
/** ICFD NODE DATA entity code */
    static ICFD_NODE_DATA: number;
/** ICFD POINT DATA entity code */
    static ICFD_POINT_DATA: number;
/** ICFD THERMAL DATA entity code */
    static ICFD_THERMAL_DATA: number;
/** JOINT entity code */
    static JOINT: number;
/** FLEXION TORSION JOINT entity code */
    static JOINT_FLEXION_TORSION: number;
/** GENERALIZED JOINT entity code */
    static JOINT_GENERALIZED: number;
/** Conventional LS-DYNA JOINT entity code */
    static JOINT_JOINT: number;
/** TRANSLATIONAL JOINT entity code */
    static JOINT_TRANSLATIONAL: number;
/** MASS entity code */
    static MASS: number;
/** MODEL entity code */
    static MODEL: number;
/** NODAL RIGID BODY entity code */
    static NODAL_RB: number;
/** BODY in NODAL RIGID BODY entity code */
    static NODAL_RB_BODY: number;
/** PART in NODAL RIGID BODY entity code */
    static NODAL_RB_PART: number;
/** NODE entity code */
    static NODE: number;
/** NODAL FORCE GROUP entity code */
    static NODE_GROUP: number;
/** GROUPS in NODAL FORCE GROUP entity code */
    static NODE_GROUP_GROUPS: number;
/** NODES in NODAL FORCE GROUP entity code */
    static NODE_GROUP_NODES: number;
/** PART entity code */
    static PART: number;
/** PART GROUP entity code */
    static PART_GROUP: number;
/** PBLAST entity code */
    static PBLAST: number;
/** PBLAST DATA entity code */
    static PBLAST_DATA: number;
/** PBLAST PART entity code */
    static PBLAST_PART: number;
/** PRETENSIONER entity code */
    static PRETENSIONER: number;
/** PRTUBE entity code */
    static PRTUBE: number;
/** PULLEY entity code */
    static PULLEY: number;
/** RETRACTOR entity code */
    static RETRACTOR: number;
/** RIGIDWALL entity code */
    static RIGIDWALL: number;
/** SEATBELT entity code */
    static SEATBELT: number;
/** SHELL entity code */
    static SHELL: number;
/** SLIPRING entity code */
    static SLIPRING: number;
/** SOLID entity code */
    static SOLID: number;
/** SPC entity code */
    static SPC: number;
/** SPC FORCES entity code */
    static SPC_FORCES: number;
/** SPC MODEL entity code */
    static SPC_MODEL: number;
/** SPC MOMENTS entity code */
    static SPC_MOMENTS: number;
/** SPC SET entity code */
    static SPC_SET: number;
/** SPH entity code */
    static SPH: number;
/** SPRING entity code */
    static SPRING: number;
/** ROTATIONAL SPRING entity code */
    static SPRING_ROTATIONAL: number;
/** TRANSLATIONAL SPRING entity code */
    static SPRING_TRANSLATIONAL: number;
/** SUBSYSTEM entity code */
    static SUBSYSTEM: number;
/** THICK SHELL entity code */
    static THICK_SHELL: number;
/** TRACER entity code */
    static TRACER: number;
/** WELD entity code */
    static WELD: number;
/** WELD ASSEMBLY entity code */
    static WELD_ASSEMBLY: number;
/** CONSTRAINED WELD entity code */
    static WELD_CONSTRAINED: number;
/** GENERALISED WELD entity code */
    static WELD_GENERALISED: number;
/** NON-NODAL WELD entity code */
    static WELD_NON_NODAL: number;
/** SOLID WELD entity code */
    static WELD_SOLID: number;
/** SPOTWELD BEAMS entity code */
    static WELD_SPOTWELD_BEAMS: number;
/** CROSS SECTION entity code */
    static X_SECTION: number;
}


/** Object function argument in Get */
interface GetArgument_options {
    /** Password */
    password?: string;
    /** If set to true, then the response code will be returned instead of true/false. This can be used to retieve error messages and codes when the file is not returned successfully. */
    response?: boolean;
    /** Username */
    username?: string;
}


/** Object function argument in Upload */
interface UploadArgument_options {
    /** Password */
    password?: string;
    /** Username */
    username?: string;
}

declare class File {
/**
 * Close a file opened by a File object.
 */
    Close(): void;

/**
 * Copies a file
 * @param source Source filename you want to copy.
 * @param dest Destination filename you want to copy source file to.
 * @returns true if copy successful, false otherwise.
 */
    static Copy(source: string, dest: string): boolean;

/**
 * Deletes a file
 * @param filename Filename you want to delete.
 * @returns true if successful, false if not.
 */
    static Delete(filename: string): boolean;

/**
 * Changes a filename or directory name to the correct format for a specific operating system using the directory mappings (if present)
 * @param filename Filename you want to drive map.
 * @param format The format for the file/directory name. Can be Include.NATIVE, Include.UNIX or Include.WINDOWS
 * @returns string containing drive mapped filename
 */
    static DriveMapFilename(filename: string, format: number): string;

/**
 * Check if a file exists. See also File.IsDirectory() and See also File.IsFile().
 * @param filename Filename you want to check for existance.
 * @returns true/false
 */
    static Exists(filename: string): boolean;

/**
 * Find any files and/or directories in a directory.
 * @param directory Directory to look for files/directories in.
 * @param type Type of things to find. Can be bitwise OR of File.FILE and File.DIRECTORY. If omitted only files will be returned.
 * @returns Array of filenames/directories
 */
    static FindFiles(directory: string, type?: number): string[];

/**
 * Reads a line from a file which contains contain, opened for reading by a File object. Although this is possible using core JavaScript functions this function should be significantly faster as most of the processing is done by PRIMER in C rather than in the JavaScript interpreter. To enable this function to be as fast as possible a maximum line length of 512 characters is used. If you expect a file to have lines longer than 512 characters then use ReadLongLine which allows lines of any length. If one argument is used then the line must contain that string. If more than one argument is used then lines which contain any of the arguments will be returned
 * @param contain String which matching lines must contain
 *        This argument can be repeated if required.
 * @returns string read from file or undefined if end of file
 */
    FindLineContaining(...contain: string[]): string;

/**
 * Reads a line from a file which contains contain, opened for reading by a File object. Although this is possible using core JavaScript functions this function should be significantly faster as most of the processing is done by PRIMER in C rather than in the JavaScript interpreter. To enable this function to be as fast as possible a maximum line length of 512 characters is used. If you expect a file to have lines longer than 512 characters then use ReadLongLine which allows lines of any length. If one argument is used then the line must contain that string. If more than one argument is used then lines which contain any of the arguments will be returned
 * @param contain Array where each element specifies a String which matching lines must contain
 * @returns string read from file or undefined if end of file
 */
    FindLineContaining(contain: string[]): string;

/**
 * Reads a line from a file which starts with start, opened for reading by a File object. Although this is possible using core JavaScript functions this function should be significantly faster as most of the processing is done by PRIMER in C rather than in the JavaScript interpreter. To enable this function to be as fast as possible a maximum line length of 512 characters is used. If you expect a file to have lines longer than 512 characters then use ReadLongLine which allows lines of any length. If one argument is used then the line must start with that string. If more than one argument is used then lines which start with any of the arguments will be returned
 * @param start String which matching lines must start with
 *        This argument can be repeated if required.
 * @returns string read from file or undefined if end of file
 */
    FindLineStarting(...start: string[]): string;

/**
 * Reads a line from a file which starts with start, opened for reading by a File object. Although this is possible using core JavaScript functions this function should be significantly faster as most of the processing is done by PRIMER in C rather than in the JavaScript interpreter. To enable this function to be as fast as possible a maximum line length of 512 characters is used. If you expect a file to have lines longer than 512 characters then use ReadLongLine which allows lines of any length. If one argument is used then the line must start with that string. If more than one argument is used then lines which start with any of the arguments will be returned
 * @param start Array where each element specifies a String which matching lines must start with
 * @returns string read from file or undefined if end of file
 */
    FindLineStarting(start: string[]): string;

/**
 * Flushes a file opened for writing by a File object.
 */
    Flush(): void;

/**
 * Get a file from a remote location. See also File.Proxy(), File.ProxyPassword() and File.ProxyUsername().
 * @param url URL (uniform resource locator) of remote file you want to get. Currently http and ftp are supported. For http give the full address including the leading 'http://'. e.g. 'http://www.example.com/file.html'. For ftp an optional username and password can be given. e.g. 'ftp://ftp.example.com' retrieves the directory listing for the root directory. 'ftp://ftp.example.com/readme.txt' downloads the file readme.txt from the root directory. 'ftp://user:password@ftp.example.com/readme.txt' retrieves the readme.txt file from the user's home directory.
 * @param filename Filename you want to save the file to.
 * @param options Options for get. If 'username' and 'password' are set then basic authorization using the username and password will be used.
 * @returns true if file was successfully got, false otherwise.
 */
    static Get(url: string, filename: string, options?: GetArgument_options): boolean;

/**
 * Check if a filename is absolute or relative.
 * @param filename Filename you want to check.
 * @returns true/false
 */
    static IsAbsolute(filename: string): boolean;

/**
 * Check if a filename is a directory. See also File.Exists(), File.IsFile(), File.IsReadable() and File.IsWritable().
 * @param filename Filename you want to check.
 * @returns true/false
 */
    static IsDirectory(filename: string): boolean;

/**
 * Check if a filename is a file. See also File.Exists(), File.IsDirectory(), File.IsReadable() and File.IsWritable().
 * @param filename Filename you want to check.
 * @returns true/false
 */
    static IsFile(filename: string): boolean;

/**
 * Check if a filename has read permissions. See also File.Exists(), File.IsDirectory() and File.IsWritable().
 * @param filename Filename you want to check.
 * @returns true/false
 */
    static IsReadable(filename: string): boolean;

/**
 * Check if a filename has write permissions. If filename exists and it is a file then it is checked to see if it can be opened with write (File.APPEND permissions). If filename exists and it is a directory then the directory is checked for write permission (can files be created in the directory). If filename does not exist then it is assumed to be a file and is checked to see if it can be opened for writing (File.WRITE permissions). See also File.Exists(), File.IsDirectory() and File.IsReadable().
 * @param filename Filename you want to check.
 * @returns true/false
 */
    static IsWritable(filename: string): boolean;

/**
 * Make a directory. If PRIMER preference 'directory_permission' is set e.g.755 then this will apply (same as if set by chmod 755) ignoring any setting of umask. If there is no preference then the users current setting of umask will control permissions (same as system mkdir)
 * @param directory The name of the directory you want to create.
 * @returns true if successfully created, false if not.
 */
    static Mkdir(directory: string): boolean;

/**
 * Make a temporary filename for writing a temporary file.
 * @returns String name of temporary filename that can be used.
 */
    static Mktemp(): string;

/**
 * Set a proxy for files opened by http, ftp etc. See also File.Get(), File.ProxyPassword() and File.ProxyUsername().
 * @param name The name of the proxy.
 */
    static Proxy(name: string): void;

/**
 * Set a proxy password for files opened by http, ftp etc. See also File.Get(), File.Proxy() and File.ProxyUsername().
 * @param name Password for the proxy server.
 */
    static ProxyPassword(name: string): void;

/**
 * Set a proxy username for files opened by http, ftp etc. See also File.Get(), File.Proxy() and File.ProxyPassword().
 * @param username The username for the proxy.
 */
    static ProxyUsername(username: string): void;

/**
 * Reads all the remaining characters from a file opened for reading by a File object. As this function can read the entire file as a string be careful when reading large files as it will consume large amounts of memory.
 * @returns String. Characters read from file or undefined if end of file
 */
    ReadAll(): string;

/**
 * Reads binary data from a file opened for reading by a File object. The data is returned as an ArrayBuffer object. For more details on how to use an ArrayBuffer see the following links: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView.
 * @param length Number of bytes to try to read from the file. If omitted all the remaining data from the file will be read.
 * @returns ArrayBuffer object or undefined if end of file
 */
    ReadArrayBuffer(length?: number): ArrayBuffer;

/**
 * Reads the input CSV file and returns an array of string arrays. If the CSV file has legitimate records the function returns an Array object containing sub-arrays of strings otherwise the function returns NULL. The lengths of all the sub-arrays are the same and equal to maximum number of fields in any of the records. For records in a CSV file having fewer fields, the respective sub-arrays are padded with NULL elements to the maximum array length.
 * @param filename Filename you want to read CSV options from.
 * @param delimiter Delimiter string to be used. Default is a comma (",").
 * @param comment Comment string to be used. Default is a dollar sign ("$").
 * @returns 2d array of strings.
 */
    static ReadCSV(filename: string, delimiter?: string, comment?: string): string[][];

/**
 * Reads a single character from a file opened for reading by a File object.
 * @returns character read from file or undefined if end of file
 */
    ReadChar(): string;

/**
 * Reads a line from a file opened for reading by a File object. To enable this function to be as fast as possible a maximum line length of 512 characters is used. If you expect a file to have lines longer than 512 characters then use ReadLongLine which allows lines of any length.
 * @returns string read from file or undefined if end of file
 */
    ReadLine(): string;

/**
 * Reads a line from a file opened for reading by a File object. The line can be any length. If your file has lines shorter than 512 characters then you may want to use ReadLine instead which is faster.
 * @returns string read from file or undefined if end of file
 */
    ReadLongLine(): string;

/**
 * Rename an existing file to have a different name.
 * @param oldname Existing filename you want to rename
 * @param newname New filename you want to rename to
 * @returns true if successful, false if not.
 */
    static Rename(oldname: string, newname: string): boolean;

/**
 * Set the current position for reading or writing in a File object.
 * @param offset Offset to seek to in the file
 * @param origin Origin for offset. Must be one of File.START, File.END or File.CURRENT. If omitted File.START will be used.
 */
    Seek(offset: number, origin?: number): void;

/**
 * Return the size of a file in bytes
 * @param filename Filename you want the size of.
 * @returns size in bytes
 */
    static Size(filename: string): number;

/**
 * Return the current file position for a File object. Note that on Windows when reading files if the file is not opened with File.BINARY this may not return the correct file position for files with unix line endings.
 * @returns integer
 */
    Tell(): number;

/**
 * Uploads a file to a remote location. See also File.Proxy(), File.ProxyPassword() and File.ProxyUsername().
 * @param filename Filename you want to upload.
 * @param url URL (uniform resource locator) of the remote location you want to upload the file to. Currently only http is supported. Give the full address including the leading 'http://'. e.g. 'http://www.example.com/file.html'.
 * @param options Options for upload. If both of these are set then basic authorization using the username and password will be used.
 * @returns true if file was successfully uploaded, false otherwise.
 */
    static Upload(filename: string, url: string, options?: UploadArgument_options): boolean;

/**
 * Write a string to a file opened for writing by a File object. Note that a carriage return is not added.
 * @param string The string/item that you want to write
 */
    Write(string: any): void;

/**
 * Writes binary data to a file opened for writing by a File object. The data to write is an ArrayBuffer object. For more details on how to use an ArrayBuffer see the following links: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView.
 * @param buffer ArrayBuffer to write to file
 * @param length Number of bytes to write to the file. If omitted all the data in the ArrayBuffer will be written (buffer.byteLength bytes)
 */
    WriteArrayBuffer(buffer: ArrayBuffer, length?: number): void;

/**
 * Write a string to a file opened for writing by a File object adding a carriage return.
 * @param string The string/item that you want to write
 */
    Writeln(string: any): void;

/**
 * Create a new File object for reading and writing text files.
 * @param filename Filename of the file you want to read/write. If reading, the file must exist. If writing, the file will be overwritten (if it exists) if mode is File.WRITE, or if mode is File.APPEND it will be appended to if it exists, or created if it does not. When reading a file the filename can also be a URL (uniform resource locator) in which case the file will be read from the remote site. See File.Get() for more details on the format of the URL.
 * @param mode The mode to open the file with. Can be File.READ, File.WRITE or File.APPEND. For File.WRITE or File.APPEND it can also be ORed with File.BINARY if required. By default text is read and written as ASCII. To read/write text in utf-8 mode can also be ORed with File.UTF8 if required.
 * @returns File object
 */
    constructor(filename: string, mode: number);

/** Name of the file */
    readonly filename: string;
/** Mode the file was opened with (File.READ, File.WRITE etc) */
    readonly mode: number;
/** Flag to open file for appending */
    static APPEND: number;
/** Flag to open file in binary mode. This will have no effect on unix/linux but for windows if a file is opened for writing with binary mode \n will not be translated to \r\n (CRLF), it will be written as \n (LF) */
    static BINARY: number;
/** Seek relative to current file position */
    static CURRENT: number;
/** Find directories */
    static DIRECTORY: number;
/** Seek relative to end of the file */
    static END: number;
/** Find files */
    static FILE: number;
/** Flag to open file for reading */
    static READ: number;
/** Seek relative to start of the file */
    static START: number;
/** Flag to open file for reading as UTF-8 encoding. */
    static UTF8: number;
/** Flag to open file for writing */
    static WRITE: number;
}

declare class Graph {
/**
 * Adds a curve to the graph.
 * @param Curve_ID ID of the curve to add.
 * @param redraw If this argument is false then the graph will not be redrawn after the curve is added. This is to be used if a large number of curves are to be added to a graph, so as to avoid the same curves being drawn multiple times. No argument or true will trigger a redraw after the curve is added.
 * @returns Returns true if the curve is successfully added to the graph else it would return false
 */
    AddCurveID(Curve_ID: number, redraw?: boolean): boolean;

/**
 * Adds the graph to the page.
 * @param Page_number Page number for which to add the graph to.
 * @returns Returns true if the graph is successfully added to the page else it would return false
 */
    AddToPage(Page_number: number): boolean;

/**
 * Deletes the graph
 */
    Delete(): void;

/**
 * Deletes a graph
 * @param ID ID of graph to delete
 */
    static DeleteFromID(ID: number): void;

/**
 * Returns the IDs of the curves present in the graph in an array.
 * @returns An array of numbers containing the curve IDs
 */
    GetAllCurveIDs(): number[];

/**
 * Returns all the pages containing the graph.
 * @returns An array of numbers containing the page IDs
 */
    GetAllPageIDs(): number[];

/**
 * Returns the graph object for a given graph id.
 * @param ID ID of graph to return the graph for
 * @returns Graph object or NULL if graph does not exists
 */
    static GetFromID(ID: number): Graph;

/**
 * Returns number curves present in the graph.
 * @returns Number of curves present in the graph.
 */
    GetNumCurves(): number;

/**
 * Locks the blanking status of either blanked curves, unblanked curves or all curves on the graph.
 * @param Lock_type No argument or 0 to lock blanked curves, -1 to unlock blanked curves, -2 to unfreeze all visible curves
 */
    Lock(Lock_type: number): void;

/**
 * Removes a curve from the graph.
 * @param ID ID of the curve to be removed
 * @returns Returns true if the curve is successfully removed from the graph else it would return false
 */
    RemoveCurveID(ID: number): boolean;

/**
 * Removes the graph from a page.
 * @param ID ID of the page from which the graph is to be removed
 * @returns Returns true if the graph is successfully removed from the page else it would return false
 */
    RemoveFromPage(ID: number): boolean;

/**
 * Returns the total number of graphs.
 * @returns integer
 */
    static Total(): number;

/**
 * Create a new Graph.
 * @param index Graph index to copy initial display and axis settings from (optional). If not defined then the display and axis settings will be copied from those defined in the preference file.
 * @returns Graph object
 */
    constructor(index?: number);

/** If the graph is active or inactive. Can take Graph.YES or Graph.NO */
    active: number;
/** shows x-axis units. It can take either Graph.ON or Graph.OFF */
    add_x_units: number;
/** shows second y-axis units. It can take either Graph.ON or Graph.OFF */
    add_y2_units: number;
/** shows y-axis units. It can take either Graph.ON or Graph.OFF */
    add_y_units: number;
/** Turn on to set graph title automatically and turn off to define the graph title manually using the property Graph.title. Can take either Graph.ON or Graph.OFF */
    auto_title: string;
/** Turn on to set label for the x-axis automatically and turn off to define the label for the x-axis manually using the property xlabel. Can take either Graph.ON or Graph.OFF */
    auto_xlabel: number;
/** Can take either Graph.ON or Graph.OFF. Graph.ON will set the maximum value for the y-axis range automatically and Graph.OFF will use the property xmax value as the maximum value for the x-axis range */
    auto_xmax: number;
/** Can take either Graph.ON or Graph.OFF. Graph.ON will set the minimum value for the x-axis range automatically and Graph.OFF will use the property xmin value as the minimum value for the x-axis range */
    auto_xmin: number;
/** Turn on to set label for the second y-axis automatically and turn off to define the label for the second y-axis manually using the property y2label. Can take either Graph.ON or Graph.OFF */
    auto_y2label: number;
/** Can take either Graph.ON or Graph.OFF. Graph.ON will set the maximum value for the second y-axis range automatically and Graph.OFF will use the property y2max value as the maximum value for the second y-axis range */
    auto_y2max: number;
/** Can take either Graph.ON or Graph.OFF. Graph.ON will set the minimum value for the second y-axis range automatically and Graph.OFF will use the property y2min value as the minimum value for the second y-axis range */
    auto_y2min: number;
/** Turn on to set label for the y-axis automatically and turn off to define the label for the y-axis manually using the property ylabel. Can take either Graph.ON or Graph.OFF */
    auto_ylabel: number;
/** Can take either Graph.ON or Graph.OFF. Graph.ON will set the maximum value for the y-axis range automatically and Graph.OFF will use the property ymax value as the maximum value for the y-axis range */
    auto_ymax: number;
/** Can take either Graph.ON or Graph.OFF. Graph.ON will set the minimum value for the y-axis range automatically and Graph.OFF will use the property ymin value as the minimum value for the y-axis range */
    auto_ymin: number;
/** Graph background colour */
    background_colour: Colour;
/** Graph foreground colour */
    foreground_colour: Colour;
/** To turn on/off the grid. Can take Graph.GRID_ON or Graph.GRID_OFF */
    grid: number;
/** Graph ID */
    readonly id: number;
/** Background colour for the legend area */
    legend_background_colour: Colour;
/** Transparancy of the legend area. The value should lie between 0 and 100 */
    legend_background_trans: number;
/** Font for the curve labels in the legend. Can take either Graph.FONT_DEFAULT, Graph.FONT_HELVETICA_MEDIUM, Graph.FONT_HELVETICA_BOLD, Graph.FONT_TIMES_MEDIUM, Graph.FONT_TIMES_BOLD, Graph.FONT_COURIER_MEDIUM or Graph.FONT_COURIER_BOLD */
    legend_font: number;
/** Font colour for the curve labels in the legend */
    legend_font_colour: Colour;
/** Font size for the curve labels in the legend. Can take either Graph.FONT_SIZE_AUTO, Graph.FONT_SIZE_8, Graph.FONT_SIZE_10, Graph.FONT_SIZE_12, Graph.FONT_SIZE_14, Graph.FONT_SIZE_18 or Graph.FONT_SIZE_24 */
    legend_font_size: number;
/** Defines the legend layout type. Can take Graph.LEGEND_COLUMN_LIST, Graph.LEGEND_AUTO, Graph.LEGEND_OFF or Graph.LEGEND_FLOATING */
    legend_layout: number;
/** Format of the prefix that is being included in the curve label of the legend. Can take either Graph.PREFIX_MODEL_NUMBER, Graph.DIR, Graph.PREFIX_THF or Graph.PREFIX_USER_DEFINED */
    legend_prefix_format: number;
/** Include the prefix in the curve label of the legend. Can take either Graph.PREFIX_AUTO, Graph.PREFIX_ON or Graph.PREFIX_OFF */
    legend_show_prefix: number;
/** Visibility of user lines when Graph.LEGEND_COLUMN_LIST is selected for legend layout. Can take either Graph.ON or Graph.OFF */
    legend_show_user_lines: number;
/** User defined line 1 from the legend area */
    legend_user_line_1: string;
/** Font size for the user defined line 1. Can take either Graph.FONT_SIZE_AUTO, Graph.FONT_SIZE_8, Graph.FONT_SIZE_10, Graph.FONT_SIZE_12, Graph.FONT_SIZE_14, Graph.FONT_SIZE_18 or Graph.FONT_SIZE_24 */
    legend_user_line_1_size: number;
/** User defined line 2 from the legend area */
    legend_user_line_2: string;
/** Font size for the user defined line 2. Can take either Graph.FONT_SIZE_AUTO, Graph.FONT_SIZE_8, Graph.FONT_SIZE_10, Graph.FONT_SIZE_12, Graph.FONT_SIZE_14, Graph.FONT_SIZE_18 or Graph.FONT_SIZE_24 */
    legend_user_line_2_size: number;
/** User defined line 3 from the legend area */
    legend_user_line_3: string;
/** Font size for the user defined line 3. Can take either Graph.FONT_SIZE_AUTO, Graph.FONT_SIZE_8, Graph.FONT_SIZE_10, Graph.FONT_SIZE_12, Graph.FONT_SIZE_14, Graph.FONT_SIZE_18 or Graph.FONT_SIZE_24 */
    legend_user_line_3_size: number;
/** User defined line 4 from the legend area */
    legend_user_line_4: string;
/** Font size for the user defined line 4. Can take either Graph.FONT_SIZE_AUTO, Graph.FONT_SIZE_8, Graph.FONT_SIZE_10, Graph.FONT_SIZE_12, Graph.FONT_SIZE_14, Graph.FONT_SIZE_18 or Graph.FONT_SIZE_24 */
    legend_user_line_4_size: number;
/** User defined line 6 from the legend area */
    legend_user_line_5: string;
/** Font size for the user defined line 5. Can take either Graph.FONT_SIZE_AUTO, Graph.FONT_SIZE_8, Graph.FONT_SIZE_10, Graph.FONT_SIZE_12, Graph.FONT_SIZE_14, Graph.FONT_SIZE_18 or Graph.FONT_SIZE_24 */
    legend_user_line_5_size: number;
/** User defined line 6 from the legend area */
    legend_user_line_6: string;
/** Font size for the user defined line 6. Can take either Graph.FONT_SIZE_AUTO, Graph.FONT_SIZE_8, Graph.FONT_SIZE_10, Graph.FONT_SIZE_12, Graph.FONT_SIZE_14, Graph.FONT_SIZE_18 or Graph.FONT_SIZE_24 */
    legend_user_line_6_size: number;
/** Font colour for the user defined lines in the legend */
    legend_user_lines_colour: Colour;
/** Font for the user defined lines in the legend. Can take either Graph.FONT_DEFAULT, Graph.FONT_HELVETICA_MEDIUM, Graph.FONT_HELVETICA_BOLD, Graph.FONT_TIMES_MEDIUM, Graph.FONT_TIMES_BOLD, Graph.FONT_COURIER_MEDIUM or Graph.FONT_COURIER_BOLD */
    legend_user_lines_font: number;
/** Number of columns of curve labels in legends. Can take Graph.LEGEND_1_COLUMN, Graph.LEGEND_2_COLUMN or Graph.LEGEND_3_COLUMN */
    num_legend_columns: number;
/** Shows graph title. Can take either Graph.ON or Graph.OFF */
    show_title: string;
/** Shows graph x-axis label. Can take either Graph.ON or Graph.OFF */
    show_xlabel: number;
/** Shows graph second y-axis. Can take either Graph.ON or Graph.OFF. (Note, Curve property y_axis must be set to Curve.Y2_AXIS for the curve to be plotted on the second y-axis.) */
    show_y2axis: number;
/** Shows graph second y-axis label. Can take either Graph.ON or Graph.OFF */
    show_y2label: number;
/** Shows graph y-axis label. Can take either Graph.ON or Graph.OFF */
    show_ylabel: number;
/** Graph title */
    title: string;
/** Defines x-axis type i.e. linear or logarithmic. Can take either Graph.AXIS_LINEAR or Graph.AXIS_LOG */
    x_axis_type: number;
/** Colour of the x-axis units */
    x_unit_colour: Colour;
/** Defines the number decimals in the x-axis units. */
    x_unit_decimals: number;
/** Font for the x-axis units. Can take either Graph.FONT_DEFAULT, Graph.FONT_HELVETICA_MEDIUM, Graph.FONT_HELVETICA_BOLD, Graph.FONT_TIMES_MEDIUM, Graph.FONT_TIMES_BOLD, Graph.FONT_COURIER_MEDIUM or Graph.FONT_COURIER_BOLD */
    x_unit_font: number;
/** Defines the format for the x-axis units. Can take either Graph.AXIS_UNITS_AUTO, Graph.AXIS_UNITS_SCIENTIFIC or Graph.AXIS_UNITS_GENERAL */
    x_unit_format: number;
/** Font size for the x-axis units. Can take either Graph.FONT_SIZE_AUTO, Graph.FONT_SIZE_8, Graph.FONT_SIZE_10, Graph.FONT_SIZE_12, Graph.FONT_SIZE_14, Graph.FONT_SIZE_18 or Graph.FONT_SIZE_24 */
    x_unit_size: number;
/** Label for x-axis */
    xlabel: string;
/** Colour of the x-axis label */
    xlabel_colour: Colour;
/** Font for the x-axis label. Can take either Graph.FONT_DEFAULT, Graph.FONT_HELVETICA_MEDIUM, Graph.FONT_HELVETICA_BOLD, Graph.FONT_TIMES_MEDIUM, Graph.FONT_TIMES_BOLD, Graph.FONT_COURIER_MEDIUM or Graph.FONT_COURIER_BOLD */
    xlabel_font: number;
/** Font size for the x-axis label. Can take either Graph.FONT_SIZE_AUTO, Graph.FONT_SIZE_8, Graph.FONT_SIZE_10, Graph.FONT_SIZE_12, Graph.FONT_SIZE_14, Graph.FONT_SIZE_18 or Graph.FONT_SIZE_24 */
    xlabel_size: number;
/** Maximum value of x-axis range */
    xmax: number;
/** Minimum value of the x-axis range */
    xmin: number;
/** Defines second y-axis type i.e. linear or logarithmic. Can take either Graph.AXIS_LINEAR or Graph.AXIS_LOG */
    y2_axis_type: number;
/** Colour of the second y-axis units */
    y2_unit_colour: Colour;
/** Defines the number decimals in the second y-axis units. */
    y2_unit_decimals: number;
/** Font for the second y-axis label. Can take either Graph.FONT_DEFAULT, Graph.FONT_HELVETICA_MEDIUM, Graph.FONT_HELVETICA_BOLD, Graph.FONT_TIMES_MEDIUM, Graph.FONT_TIMES_BOLD, Graph.FONT_COURIER_MEDIUM or Graph.FONT_COURIER_BOLD */
    y2_unit_font: number;
/** Defines the format for the second y-axis units. Can take either Graph.AXIS_UNITS_AUTO, Graph.AXIS_UNITS_SCIENTIFIC or Graph.AXIS_UNITS_GENERAL */
    y2_unit_format: number;
/** Font size for the second y-axis units. Can take either Graph.FONT_SIZE_AUTO, Graph.FONT_SIZE_8, Graph.FONT_SIZE_10, Graph.FONT_SIZE_12, Graph.FONT_SIZE_14, Graph.FONT_SIZE_18 or Graph.FONT_SIZE_24 */
    y2_unit_size: number;
/** Label for second y-axis */
    y2label: string;
/** Colour of the second y-axis label */
    y2label_colour: Colour;
/** Font for the second y-axis label. Can take either Graph.FONT_DEFAULT, Graph.FONT_HELVETICA_MEDIUM, Graph.FONT_HELVETICA_BOLD, Graph.FONT_TIMES_MEDIUM, Graph.FONT_TIMES_BOLD, Graph.FONT_COURIER_MEDIUM or Graph.FONT_COURIER_BOLD */
    y2label_font: number;
/** Font size for the second y-axis label. Can take either Graph.FONT_SIZE_AUTO, Graph.FONT_SIZE_8, Graph.FONT_SIZE_10, Graph.FONT_SIZE_12, Graph.FONT_SIZE_14, Graph.FONT_SIZE_18 or Graph.FONT_SIZE_24 */
    y2label_size: number;
/** Maximum value of the second y-axis range */
    y2max: number;
/** Minimum value of the second y-axis range */
    y2min: number;
/** Defines y-axis type i.e. linear or logarithmic. Can take either Graph.AXIS_LINEAR or Graph.AXIS_LOG */
    y_axis_type: number;
/** Colour of the y-axis units */
    y_unit_colour: Colour;
/** The number decimals in the y-axis units. */
    y_unit_decimals: number;
/** Font for the y-axis units. Can take either Graph.FONT_DEFAULT, Graph.FONT_HELVETICA_MEDIUM, Graph.FONT_HELVETICA_BOLD, Graph.FONT_TIMES_MEDIUM, Graph.FONT_TIMES_BOLD, Graph.FONT_COURIER_MEDIUM or Graph.FONT_COURIER_BOLD */
    y_unit_font: number;
/** Defines the format for the y-axis units. Can take either Graph.AXIS_UNITS_AUTO, Graph.AXIS_UNITS_SCIENTIFIC or Graph.AXIS_UNITS_GENERAL */
    y_unit_format: number;
/** Font size for the y-axis units. Can take either Graph.FONT_SIZE_AUTO, Graph.FONT_SIZE_8, Graph.FONT_SIZE_10, Graph.FONT_SIZE_12, Graph.FONT_SIZE_14, Graph.FONT_SIZE_18 or Graph.FONT_SIZE_24 */
    y_unit_size: number;
/** Label for y-axis */
    ylabel: string;
/** Colour of the y-axis label */
    ylabel_colour: Colour;
/** Font for the y-axis label. Can take either Graph.FONT_DEFAULT, Graph.FONT_HELVETICA_MEDIUM, Graph.FONT_HELVETICA_BOLD, Graph.FONT_TIMES_MEDIUM, Graph.FONT_TIMES_BOLD, Graph.FONT_COURIER_MEDIUM or Graph.FONT_COURIER_BOLD */
    ylabel_font: number;
/** Font size for the y-axis label. Can take either Graph.FONT_SIZE_AUTO, Graph.FONT_SIZE_8, Graph.FONT_SIZE_10, Graph.FONT_SIZE_12, Graph.FONT_SIZE_14, Graph.FONT_SIZE_18 or Graph.FONT_SIZE_24 */
    ylabel_size: number;
/** Maximum value of y-axis range */
    ymax: number;
/** Minimum value of the y-axis range */
    ymin: number;
/** Linear axis type */
    static AXIS_LINEAR: number;
/** Logarithmic axis type */
    static AXIS_LOG: number;
/** Auto format axis units */
    static AXIS_UNITS_AUTO: number;
/** General format for axis units */
    static AXIS_UNITS_GENERAL: number;
/** Scientific format for axis units */
    static AXIS_UNITS_SCIENTIFIC: number;
/** Courier bold font */
    static FONT_COURIER_BOLD: number;
/** Courier medium font */
    static FONT_COURIER_MEDIUM: number;
/** Takes the font defined in the preference file */
    static FONT_DEFAULT: number;
/** Helvetical bold font */
    static FONT_HELVETICA_BOLD: number;
/** Helvetical medium font */
    static FONT_HELVETICA_MEDIUM: number;
/** 10 point font size */
    static FONT_SIZE_10: number;
/** 12 point font size */
    static FONT_SIZE_12: number;
/** 14 point font size */
    static FONT_SIZE_14: number;
/** 18 point font size */
    static FONT_SIZE_18: number;
/** 24 point font size */
    static FONT_SIZE_24: number;
/** 8 point font size */
    static FONT_SIZE_8: number;
/** Font size would be automatically adjusted based on the graph area */
    static FONT_SIZE_AUTO: number;
/** Times New Roman bold font */
    static FONT_TIMES_BOLD: number;
/** Times New Roman medium font */
    static FONT_TIMES_MEDIUM: number;
/** Turn off the grid. */
    static GRID_OFF: number;
/** Turn on the grid. */
    static GRID_ON: number;
/** Curve labels will be displayed in a single column in the legend */
    static LEGEND_1_COLUMN: number;
/** Curve labels will be displayed in two columns in the legend */
    static LEGEND_2_COLUMN: number;
/** Curve labels will be displayed in three columns in the legend */
    static LEGEND_3_COLUMN: number;
/** Automatic legend layout (see Legend) */
    static LEGEND_AUTO: number;
/** Column list legend layout (see Legend) */
    static LEGEND_COLUMN_LIST: number;
/** Floating legend layout (see Legend) */
    static LEGEND_FLOATING: number;
/** Off legend layout (see Legend) */
    static LEGEND_OFF: number;
/** Flag for no. */
    static NO: number;
/** Flag to turn off. */
    static OFF: number;
/** Flag to turn on. */
    static ON: number;
/** Automatically add prefix to the curve label in the legend (see Legend) */
    static PREFIX_AUTO: number;
/** Directory name of the model will be used as the curve label prefix in the legend (see Legend) */
    static PREFIX_DIR: number;
/** Model number will be used as the curve label prefix in the legend (see Legend) */
    static PREFIX_MODEL_NUMBER: number;
/** Turn off the curve label prefix in the legend (see Legend) */
    static PREFIX_OFF: number;
/** Add prefix to the curve label in the legend (see Legend) */
    static PREFIX_ON: number;
/** Root name of the THF file will be used as the curve label prefix in the legend (see Legend) */
    static PREFIX_THF: number;
/** A user defined prefix will be used as the curve label prefix in the legend (see Legend) */
    static PREFIX_USER_DEFINED: number;
/** Flag for yes. */
    static YES: number;
}

declare class Group {
/**
 * Adds a curve object to group.
 * @param Curve Curve that will be added to group
 */
    Add(Curve: Curve): void;

/**
 * Adds all curves to group.
 */
    AddAll(): void;

/**
 * Adds curve by ID to a group.
 * @param ID The ID of the curve you want to add.
 */
    AddID(ID: number): void;

/**
 * Checks if a curve object is in a curve group.
 * @param Curve Curve that will be checked
 * @returns TRUE if the curve is in the group, otherwise FALSE
 */
    Contains(Curve: Curve): boolean;

/**
 * Checks if a curve ID is in a curve group.
 * @param ID The ID of the curve you want to check.
 * @returns TRUE if the curve is in the group, otherwise FALSE
 */
    ContainsID(ID: number): boolean;

/**
 * Deletes a curve group
 * @param group_ID_or_name ID of group to delete or name of group. If this argument is 0, delete all groups. Automatically generated groups won't be deleted unless the next argument is set to 1.
 * @param delete_automatic_groups If this argument is 1, automatic groups can be deleted. If no argument or 0, automatic groups cant be deleted.
 */
    static DeleteGroup(group_ID_or_name: number | string, delete_automatic_groups?: number): void;

/**
 * Returns a group object.
 * @param Name Name of the group to return object for
 * @returns Group object (or Null if the group does not exist).
 */
    static Get(Name: string): Group;

/**
 * Returns an array of Curve ID's for all the Curves in the group.
 * @returns Array of integers.
 */
    GetCurveIDs(): number[];

/**
 * Returns an array of Curve Objects for all the Curves in the group.
 * @returns Array of Curve objects.
 */
    GetCurves(): Curve[];

/**
 * Returns a group object.
 * @param ID ID of the group to return object for
 * @returns Group object (or Null if the group does not exist).
 */
    static GetFromID(ID: number): Group;

/**
 * Removes a curve object from a group.
 * @param Curve Curve that will be removed from group
 */
    Remove(Curve: Curve): void;

/**
 * Removes all curves from a group.
 */
    RemoveAll(): void;

/**
 * Remove a curve by ID from a group.
 * @param ID The ID of the curve you want to remove.
 */
    RemoveID(ID: number): void;

/**
 * Spools a group, entry by entry and returns the curve objects. See also Group.StartSpool
 * @returns Curve Object of item, or NULL if no more curves in group
 */
    Spool(): Curve;

/**
 * Spools a group, entry by entry and returns the curve ID's or 0 when no more curves in group. See also Group.StartSpool
 * @returns integer
 */
    SpoolID(): number;

/**
 * Starts a group spooling operation. See also Group.Spool
 */
    StartSpool(): void;

/**
 * Returns the total number of curve group currently defined
 * @returns Number of curve groups currently defined.
 */
    static Total(): number;

/**
 * Create a new Group object.
 * @param name Group name used to reference the group
 * @returns Group object
 */
    constructor(name: string);

/** Curve number of the curve with the maximum Y value in the group. */
    crv_at_ymax: number;
/** Curve number of the curve with the minimum Y value in the group. */
    crv_at_ymin: number;
/** Number of curves in the group */
    readonly curves: number;
/** Group name */
    readonly name: string;
/** X value at the maximum Y value over all curves in the group. */
    x_at_ymax: number;
/** X value at the minimum Y value over all curves in the group. */
    x_at_ymin: number;
/** X value at the minimum positive Y value over all curves in the group. */
    x_at_yminpos: number;
/** Maximum X value over all curves in the group. */
    xmax: number;
/** Minimum X value over all curves in the group. */
    xmin: number;
/** Minimum positive X value over all curves in the group. */
    xminpos: number;
/** Maximum Y value over all curves in the group. */
    ymax: number;
/** Minimum Y value over all curves in the group. */
    ymin: number;
/** Minimum positive Y value over all curves in the group. */
    yminpos: number;
}

declare class Include {
/** Use directory separators native to this machine when writing directory names. */
    static NATIVE: number;
/** Use unix directory separators when writing directory names. */
    static UNIX: number;
/** Use windows directory separators when writing directory names. */
    static WINDOWS: number;
}

declare class LineStyle {
/** Dashes lines */
    static DASH: number;
/** Dash pattern 2 */
    static DASH2: number;
/** Dash pattern 3 */
    static DASH3: number;
/** Dash pattern 4 */
    static DASH4: number;
/** Dash pattern 5 */
    static DASH5: number;
/** Dash pattern 6 */
    static DASH6: number;
/** No line */
    static NONE: number;
/** Solid lines */
    static SOLID: number;
}

declare class LineWidth {
/** Bold lines (4 pixels wide) */
    static BOLD: number;
/** Fine lines (1 pixel wide) */
    static FINE: number;
/** Heavy lines (8 pixels wide) */
    static HEAVY: number;
/** Normal lines (2 pixels wide) */
    static NORMAL: number;
/** 1 pixel wide */
    static W1: number;
/** 10 pixel wide */
    static W10: number;
/** 2 pixel wide */
    static W2: number;
/** 3 pixel wide */
    static W3: number;
/** 4 pixel wide */
    static W4: number;
/** 5 pixel wide */
    static W5: number;
/** 6 pixel wide */
    static W6: number;
/** 7 pixel wide */
    static W7: number;
/** 8 pixel wide */
    static W8: number;
/** 9 pixel wide */
    static W9: number;
}


/** Object function argument in Link constructor */
interface Link_constructor_Argument_data {
    /** Name of function to call in the remote script when the link connected. This function will be called when the connection is made with a Link object as the argument. */
    connectFunction: string;
    /** Name of function to call in the remote script when the link is disconnected, either because the local program has terminated, or the local script has finished. The status property can be used to distinguish these cases. This is provided as an easy way to set up a disconnect callback in the remote script. Alternatively, the remote script could set the onDisconnect property in connectFunction. */
    disconnectFunction?: string;
    /** For the specific case of starting T/HIS from D3PLOT, the required time for D3PLOT to be idle for in msecs before the connect function is called. If omitted then a default idle time of 1s is used */
    idelTime?: number;
    /** Model number to pass across the link to the remote program */
    model?: number;
    /** Function to call in the local script when the link is disconnected, either because the remote program has terminated, or the remote script has finished. The status property can be used to distinguish these cases. */
    onDisconnect?: () => void;
    /** Function to call in the local script to acknowledge receipt of the data in the remote program (data sent from a Send command in the local program to the remote program). The function takes a single argument which is the UUID returned from the original Send command. This function is useful if the link is asynchronous to know that the command has been processed. In the synchronous case the local program will wait for the remote program to process the Send command so this is unnecessary. However, the function can still be used. */
    onReceipt?: () => void;
    /** Function to call in the local script when data is received from a Send command in the remote script. The function takes a single argument which contains the data passed by Send */
    onReceive?: () => void;
    /** Path to a model to pass across the link to the remote program. This can be used instead of a model. For example if you want to open a different model in D3PLOT to what you have open in PRIMER then you could pass the path to the d3plot file to open */
    path?: string;
    /** Name of function to call in the remote script to acknowledge receipt of the data in the local script (data sent from a Send command in the remote link object to the local script). The function takes a single argument which is the UUID returned from the original Send command. Note that this function will only be called if the link is asynchronous. In the synchronous case the local program will wait for the remote to process the Send command so this is unnecessary. This is provided as an easy way to set up a receipt callback in the remote script. Alternatively, the remote script could set the onReceipt property in connectFunction. */
    receiptFunction?: string;
    /** Name of function to call in the remote script when data is received from a Send command in the local script. The function takes a single argument which contains the data passed by Send. This is provided as an easy way to set up a receive callback in the remote script. Alternatively, the remote script could set the onReceive property in connectFunction. */
    receiveFunction?: string;
    /** The script to run */
    script: string;
    /** Size of shared memory buffer in KB. If omitted a default size of 10KB is used */
    size?: number;
    /** Whether link Send commands are synchronous or asynchronous (default if omitted) */
    synchronous?: boolean;
    /** Timeout for Send commands in msecs. If equal to 0 (default if omitted) then a default timeout of 5s is used */
    timeout?: number;
}

declare class Link {
/**
 * Check if the script has been started on the remote side of a link and, if so, whether calling the connect function is pending. This may be useful to make a script behave differently, depending on whether it is being run normally or has been started on the remote side of a link.
 * @returns true if a remote link script is waiting to connect, false for all other cases
 */
    static ConnectPending(): boolean;

/**
 * Send data/command across link
 * @param data The data/command to pass. The data can either be an ArrayBuffer or any JavaScript type that can be represented as JSON
 * @returns UUID string to uniquely identify this Send command
 */
    Send(data: ArrayBuffer | string): string;

/**
 * Terminate the program on the remote side of the link
 */
    Terminate(): void;

/**
 * Create a new Link object to communicate with one of the linked Oasys LS-DYNA programs running on the computer, starting it if required. Note that you should not try to use the Send method immediately after the constructor. If you do, the remote program may not have time to initialise properly. If you want to interact with the remote program immediately then the connect function in the remote program should send a command to the local program to say that it is initialised. The onReceive function in the local program can then be used to send the command. See the simple example at the top of this class for more details. For the specific case of D3PLOT starting T/HIS, the connect function will not be called straight away. As D3PLOT and T/HIS are integrated together into a single user interface, the script must return back to the main event loop after the constructor is called so that D3PLOT and T/HIS can communicate with each other to set up the integration. Once this has been done and D3PLOT is 'idle', the connect function will be called. The idleTime property in the data object can be used to control this delay if required. As D3PLOT must return back to the event loop when starting T/HIS do not put any statements immediately after the link constructor call.
 * @param program The program that you want to link to. See the programs constants
 * @param data link data
 * @returns Link object
 */
    constructor(program: number, data: Link_constructor_Argument_data);

/** Function to call when when the link is disconnected, either because the remote program has terminated, or the remote script has finished. The status property can be used to distinguish these cases. The function has no arguments. The Link object is accessible in the function using the 'this' keyword. To unset the function, set the property to null. */
    onDisconnect: () => void;
/** Function to call to acknowledge receipt of the data in the remote program (data sent from a Send command). The function takes a single argument which is the UUID returned from the original Send command. Note that this function will only be called if the link is asynchronous. In the synchronous case the local program will wait for the remote program to process the Send command so this is unnecessary. To unset the function, set the property to null. */
    onReceipt: () => void;
/** Function to call when data is received from a Send command in the remote program. The function takes a single argument which contains the data passed by Send. To unset the function, set the property to null. */
    onReceive: () => void;
/** Size of shared memory buffer in KB */
    readonly size: number;
/** The status of the connection. Can be Link.CREATED, Link.CONNECTED, Link.DISCONNECTED or Link.TERMINATED */
    readonly status: number;
/** whether link Send commands are synchronous or asynchronous (default) */
    synchronous: boolean;
/** Timeout for Send commands in msecs. If equal to 0 (default) then a default timeout of 5s is used */
    timeout: number;
/** Link is connected to the remote script */
    static CONNECTED: number;
/** Link has been created but not connected to the remote script */
    static CREATED: number;
/** Link to D3PLOT */
    static D3PLOT: number;
/** Link has been disconnected as the remote script has finished/exited */
    static DISCONNECTED: number;
/** Link to PRIMER */
    static PRIMER: number;
/** Link has been terminated as the remote program has closed/crashed */
    static TERMINATED: number;
/** Link to T-HIS */
    static THIS: number;
}


/** Object function argument in GetDataFlagged */
interface GetDataFlaggedArgument_int_pnt {
    /** Through thickness integration point as described above. */
    ip: number;
    /** The nodes to extrapolate to. For SOLIDs, SHELLs and THICK_SHELLs: value between 1 and # nodes on the entity. (Defaults to none). */
    np?: number;
    /** On plan integration point. For SHELLs and THICK_SHELLs: value between 0 for Average/Centre and 4. (Defaults to Average/Centre). */
    op?: number;
}


/** Object function argument in QueryDataPresent */
interface QueryDataPresentArgument_int_pnt {
    /** Through thickness integration point as described above. */
    ip: number;
    /** The nodes to extrapolate to. For SOLIDs, SHELLs and THICK_SHELLs: value between 1 and # nodes on the entity. (Defaults to none). */
    np?: number;
    /** On plan integration point. For SHELLs and THICK_SHELLs: value between 0 for Average/Centre and 4. (Defaults to Average/Centre). */
    op?: number;
}

declare class Model {
/**
 * Clears a defined flag on an internal (or external) item(s) of type of entity_type in the model.
 * @param flag The flag you want to clear.
 * @param entity_type The Entity type that the defined flag will be cleared on.
 * @param item If +ive: The internal item number starting from 1. If -ive: The external item label.
 * @param end To unflag range of items, specify an optional end of range. Unflags items from item to range.
 * @returns TRUE if the flag is successfully cleared on the item, otherwise FALSE
 */
    ClearFlag(flag: number, entity_type: number, item: number, end?: number): boolean;

/**
 * Deletes a modelDo not use the Model object after calling this method.
 * @returns TRUE if the model sucessfully deleted, otherwise FALSE
 */
    Delete(): boolean;

/**
 * Checks if a model exists
 * @param model_number The number of the model you want to check the existence of.
 * @returns TRUE if the model exists, otherwise FALSE
 */
    static Exists(model_number: number): boolean;

/**
 * Sets a defined flag on all of items of type of entity_type in the model.
 * @param flag The flag you want to set.
 * @param entity_type The Entity type that the defined flag will be set on.
 * @returns TRUE if the flag is successfully set on all the items, otherwise FALSE
 */
    FlagAll(flag: number, entity_type: number): boolean;

/**
 * Checks if a defined flag is set on an internal (or external) item of type of entity_type in the model.
 * @param flag The flag you want to check.
 * @param entity_type The Entity type to check.
 * @param item If +ive: The internal item number starting from 1. If -ive: The external item label.
 * @returns TRUE if the flag is set, FALSE if the flag is not set.
 */
    Flagged(flag: number, entity_type: number, item: number): boolean;

/**
 * Gets curve objects for a data component for relevant items that are flagged with a specified flag in the model.  Some data components are valid for different entity types (e.g. SXX). If the same flag is set on items of different entity types, data is returned for all relevant, flagged entity types.  To return the same data for multiple items of the same type, it will be much faster if you flag all items you want data for, and do a single call to GetDataFlagged().  The curves are ordered by type, then by the ascending internal index of the items. Use curve properties to identify which curve is which. If the data is not available in the model for a flagged item, or not available for the selected integration points or extra value, a curve is not returned. You can use QueryDataPresent() to check if the data is available. It is recommended that you check the number of curves returned. This can be compared with the number of flagged entities, see GetNumberFlagged(). If the data is generally available in the model, but not for the specific flagged item, a "null curve" which contains no x-y data values is returned. For example, a specific shell may have fewer integration points than MAX_INT for all shells, a "null curve" would be returned for the higher integration points.
 * @param flag The flag to use. For model data, use 0 to define a null "padding" argument.
 * @param data_comp The Data Component to extract.
 * @param int_pnt The integration points to extract. This argument can be either an integer or an object. This argument is ignored when the entity type is not SOLID, SHELL, THICK_SHELL or BEAM. An integer specifies the integration point to extract: For SOLIDs: value between 0 for Average/Centre and 8. (Defaults to Average/Centre). For SHELLs and THICK_SHELLs: value between 1 and # integration points, or codes Constant.TOP, Constant.MIDDLE, Constant.BOTTOM. (Defaults to MIDDLE integration point).  For integrated BEAMs: value between 1 and # integration points. (Defaults to integration point 1).   Use 0 to define a null "padding" argument, then uses the default integration point.
 * @param extra The extra component id for SOLIDs, SHELLs, THICK_SHELLs or BEAMs.
 * @returns Array of Curve objects.
 */
    GetDataFlagged(flag: number, data_comp: number, int_pnt?: GetDataFlaggedArgument_int_pnt|number, extra?: number): Curve[];

/**
 * Returns the Model object for a model ID or null if model does not exist.
 * @param model_number number of the model you want the Model object for
 * @returns Model object (or null if model does not exist).
 */
    static GetFromID(model_number: number): Model;

/**
 * Gets the internal ID of external item of type entity_type in the model.
 * @param entity_type The Entity type of the item.
 * @param item The external item number.
 * @returns Integer internal ID (starting from 1) with reference to the entity_type code. Returns integer internal ID of 0 if item cannot be found.
 */
    GetInternalID(entity_type: number, item: number): number;

/**
 * Gets the external label of internal item of type entity_type in the model.
 * @param entity_type The Entity type of the item.
 * @param item The internal item number starting from 1.
 * @returns Integer external ID (or 0 if there is an error, or the internal ID if there are no external IDs).
 */
    GetLabel(entity_type: number, item: number): number;

/**
 * Gets the external label from the database history name name of type entity_type in the model. This is quicker if you use parent entity type codes (e.g. Entity.WELD rather than Entity.WELD_CONSTRAINED)
 * @param entity_type The Entity type of the item.
 * @param name The name of the item. If only the first part of the name is given, it must be unambiguous.
 * @returns Integer external ID of the first matching name (or 0 if there is an error).
 */
    GetLabelFromName(entity_type: number, name: string): number;

/**
 * Returns the Model units of a particular model
 * @returns String indicating the model unit system of the model
 */
    GetModelUnits(): string;

/**
 * Gets the database history name of an internal (or external) item of type entity_type in the model.
 * @param entity_type The Entity type of the item.
 * @param item If +ive: The internal item number starting from 1. If -ive: The external item label.
 * @returns String containing the database history name (or null if not available).
 */
    GetName(entity_type: number, item: number): string;

/**
 * Gets the number of entities flagged with a requested flag in the model.
 * @param flag The flag you want to check.
 * @param entity_type If specified, the Entity type to look at. If not specified, all types are looked at.
 * @returns Integer number
 */
    GetNumberFlagged(flag: number, entity_type?: number): number;

/**
 * Gets the number of entities of a requested type in the model.
 * @param entity_type The Entity type that you want to know the number of.
 * @returns Integer number
 */
    GetNumberOf(entity_type: number): number;

/**
 * Returns the ID of the highest model currently being used
 * @returns ID of highest model currently being used.
 */
    static HighestID(): number;

/**
 * Checks if a data component data_comp for a given entity is present in a model's database. For SOLIDs, SHELLs, THICK_SHELLs and BEAMs the integration point and extra component ID can also be checked. This will show if curves for any flagged items of this type will be returned for GetDataFlagged(). Note, it does not check if the data component is valid, for example a specific shell may have fewer integration points than MAX_INT for all shells, so curves returned for GetDataFlagged() may still be "null" with no x-y data.
 * @param data_comp The Data Component to check.
 * @param entity_type The Entity type to check. This argument can only be omitted when checking for global model data.
 * @param int_pnt The integration points to check. This argument can be either an integer or an object. This argument is ignored if the entity type is not SOLID, SHELL, THICK_SHELL or BEAM. An integer specifies the integration point to check: For SOLIDs: value between 0 for Average/Centre and 8. (Defaults to Average/Centre). For SHELLs and THICK_SHELLs: value between 1 and # integration points, or codes Constant.TOP, Constant.MIDDLE, Constant.BOTTOM. (Defaults to MIDDLE integration point).  For integrated BEAMs: value between 1 and # integration points. (Defaults to integration point 1).   Use 0 to define a null "padding" argument, then checks the default integration point.
 * @param extra The extra component id for SOLIDs, SHELLs, THICK_SHELLs or BEAMs.
 * @returns true if data is present, otherwise false.
 */
    QueryDataPresent(data_comp: number, entity_type?: number, int_pnt?: QueryDataPresentArgument_int_pnt|number, extra?: number): boolean;

/**
 * Reads in a new model.
 * @param filename Filename you want to read.
 * @param filetype Filetypes you want to read. Can be bitwise OR of Model.THF, Model.XTF, Model.LSDA, Model.ASCII, Model.ZTF and Model.ALL_FILES. If omitted all available files will be read.
 * @returns Model object (or null if error).
 */
    static Read(filename: string, filetype?: number): Model;

/**
 * Sets a defined flag on an internal (or external) item(s) of type of entity_type in the model.
 * @param flag The flag you want to set.
 * @param entity_type The Entity type that the defined flag will be set on.
 * @param item If +ive: The internal item number starting from 1. If -ive: The external item label.
 * @param end To flag range of items, specify an optional end of range. Flags items from item to range.
 * @returns TRUE if the flag is successfully set on the item, otherwise FALSE
 */
    SetFlag(flag: number, entity_type: number, item: number, end?: number): boolean;

/**
 * Set the model units of a model to the units provided by the user
 * @param unit_system The unit system you want to set the model units of model to
 * @returns TRUE if the Model units are set successfully else FALSE
 */
    SetModelUnits(unit_system: string): boolean;

/**
 * Returns the total number of models.
 * @returns integer
 */
    static Total(): number;

/**
 * Unsets a defined flag flag on all of items of type of entity_type in the model.
 * @param flag The flag you want to unset.
 * @param entity_type The Entity type that the defined flag will be unset on.
 * @returns TRUE if the flag is successfully unset on all the items, otherwise FALSE
 */
    UnflagAll(flag: number, entity_type: number): boolean;

/** Directory containing the model file. */
    readonly dir: string;
/** File selected when reading the model. */
    readonly file: string;
/** Model ID */
    readonly id: number;
/** Model title. */
    readonly title: string;
/** Option to select all files (.thf, LSDA, ASCII, .ztf) when reading model in. */
    static ALL_FILES: number;
/** Option to select ASCII files when reading model in. */
    static ASCII: number;
/** Option to select LSDA/binout file when reading model in. */
    static LSDA: number;
/** Option to select .thf/d3thdt file when reading model in. */
    static THF: number;
/** Option to select .xtf/xtfile file when reading model in. */
    static XTF: number;
/** Option to select .ztf file when reading model in. */
    static ZTF: number;
}

declare class Operate {
/**
 * Convert a curve to absolute values
 * @param Input_Curve Input Curve
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Abs(Input_Curve: Curve, Output_Curve?: Curve): Curve;

/**
 * Calculate Arc Cosine
 * @param Input_Curve Input Curve
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Acos(Input_Curve: Curve, Output_Curve?: Curve): Curve;

/**
 * Evaluates the integratal of a curve over a user defined period
 * @param Input_Curve Input Curve
 * @param Offset User defined offset
 * @param Time_Period Time to integrate over
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Acu(Input_Curve: Curve, Offset: number, Time_Period: number, Output_Curve?: Curve): Curve;

/**
 * Convert acceleration spectrum to a displacment spectrum
 * @param Input_Curve Input Curve
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Ad(Input_Curve: Curve, Output_Curve?: Curve): Curve;

/**
 * Add Y axis values
 * @param Input_Curve Input Curve
 * @param Second_Curve_or_constant Second Curve or constant
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Add(Input_Curve: Curve, Second_Curve_or_constant: Curve | number, Output_Curve?: Curve): Curve;

/**
 * Add X axis values
 * @param First_Curve First Curve
 * @param Second_Curve_or_constant Second Curve or constant
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Adx(First_Curve: Curve, Second_Curve_or_constant: Curve | number, Output_Curve?: Curve): Curve;

/**
 * Acceleration Severity Index. This value is used to assess the performance of road side crash barriers. The calculation method can be set to 2010 (BS EN 1317-1:2010) or 1998 (BS EN 1317-1:1998).
 * @param X_Acceleration X Acceleration Curve
 * @param Y_Acceleration Y Acceleration Curve
 * @param Z_Acceleration Z Acceleration Curve
 * @param Acceleration_conversion_factor Factor required to divide input acceleration curve by to convert to (G)
 * @param X_Acceleration_Limit X direction acceleration limit
 * @param Y_Acceleration_Limit Y direction acceleration limit
 * @param Z_Acceleration_Limit Z direction acceleration limit
 * @param Calculation_method Either 2010 or 1998.
 * @param X_axis_interval If defined then T-HIS will automatically regularise the curve using this value first
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Asi(X_Acceleration: Curve, Y_Acceleration: Curve, Z_Acceleration: Curve, Acceleration_conversion_factor: number, X_Acceleration_Limit: number, Y_Acceleration_Limit: number, Z_Acceleration_Limit: number, Calculation_method: string, X_axis_interval?: number, Output_Curve?: Curve): Curve;

/**
 * Calculate Arc Sine
 * @param Input_Curve Input Curve
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Asin(Input_Curve: Curve, Output_Curve?: Curve): Curve;

/**
 * Calculate Arc Tangent
 * @param Input_Curve Input Curve
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Atan(Input_Curve: Curve, Output_Curve?: Curve): Curve;

/**
 * Calculate Arc Tangent using atan2(y, x)
 * @param First_Input_Curve Input Curve
 * @param Second_Input_Curve Input Curve
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Atan2(First_Input_Curve: Curve, Second_Input_Curve: Curve, Output_Curve?: Curve): Curve;

/**
 * Convert acceleration spectrum to a velocity spectrum
 * @param Input_Curve Input Curve
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Av(Input_Curve: Curve, Output_Curve?: Curve): Curve;

/**
 * Average a group of curves
 * @param Curves Array of Curve objects
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Ave(Curves: Curve[], Output_Curve?: Curve): Curve;

/**
 * Bessel Filter
 * @param Input_Curve Input Curve
 * @param Frequency Cut-off Frequency (Hz)
 * @param Order Filter order
 * @param X_axis_interval If defined then T-HIS will automatically regularise the curve using this value first
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Bes(Input_Curve: Curve, Frequency: number, Order: number, X_axis_interval?: number, Output_Curve?: Curve): Curve;

/**
 * Carry out a baseline correction on an accleration time history
 * @param Input_Curve Moment / Time Curve
 * @returns Array of Curve objects. 1st curve : Corrected curve 2nd curve : Integrated Velocity 3rd curve : Integrated Displacement
 */
    static Blc(Input_Curve: Curve): Curve[];

/**
 * Butterworth Filter
 * @param Input_Curve Input Curve
 * @param Frequency Cut-off Frequency (Hz)
 * @param Order Filter order
 * @param X_axis_interval If defined then T-HIS will automatically regularise the curve using this value first
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static But(Input_Curve: Curve, Frequency: number, Order: number, X_axis_interval?: number, Output_Curve?: Curve): Curve;

/**
 * SAE Class 1000 Filter
 * @param Input_Curve Input Curve
 * @param X_axis_interval If defined then T-HIS will automatically regularise the curve using this value first
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static C1000(Input_Curve: Curve, X_axis_interval?: number, Output_Curve?: Curve): Curve;

/**
 * SAE Class 180 Filter
 * @param Input_Curve Input Curve
 * @param X_axis_interval If defined then T-HIS will automatically regularise the curve using this value first
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static C180(Input_Curve: Curve, X_axis_interval?: number, Output_Curve?: Curve): Curve;

/**
 * SAE Class 60 Filter
 * @param Input_Curve Input Curve
 * @param X_axis_interval If defined then T-HIS will automatically regularise the curve using this value first
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static C60(Input_Curve: Curve, X_axis_interval?: number, Output_Curve?: Curve): Curve;

/**
 * SAE Class 600 Filter
 * @param Input_Curve Input Curve
 * @param X_axis_interval If defined then T-HIS will automatically regularise the curve using this value first
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static C600(Input_Curve: Curve, X_axis_interval?: number, Output_Curve?: Curve): Curve;

/**
 * Concatenate 2 curves together
 * @param First_Curve First Curve
 * @param Second_Curve Second Curve
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Cat(First_Curve: Curve, Second_Curve: Curve | number, Output_Curve?: Curve): Curve;

/**
 * Clip a curve
 * @param Input_Curve Input Curve
 * @param X_min X minimum value
 * @param X_max X maximum value
 * @param Y_min Y minimum value
 * @param Y_max Y maximum value
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Clip(Input_Curve: Curve, X_min: number, X_max: number, Y_min: number, Y_max: number, Output_Curve?: Curve): Curve;

/**
 * Combine Y axis values from 2 curves together
 * @param First_Curve First Curve
 * @param Second_Curve Second Curve
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Com(First_Curve: Curve, Second_Curve: Curve | number, Output_Curve?: Curve): Curve;

/**
 * Curve Correlation function. This Correlation function provides a measure of the degree to which two curves match. When comparing curves by eye, the quality of correlation may be judged on the basis of how well matched are the patterns of peaks, the overall shapes of the curves, etc, and can allow for differences of timing as well as magnitude. Thus a simple function based on the difference of Y-values (such as T/HIS ERR function) does not measure correlation in the same way as the human eye. The T/HIS correlation function attempts to include and quantify the more subtle ways in which the correlation of two curves may be judged. The correlation can be calculated using either a strict or loose set of input parameters. The degree of correlation is rated between 0 and 100.
 * @param First_Curve First Curve
 * @param Second_Curve Second Curve
 * @param Correlation_type Correlation type, strict or loose
 * @returns Correlation value
 */
    static Cor(First_Curve: Curve, Second_Curve: Curve, Correlation_type: string): number;

/**
 * Curve Correlation function. This function first normalises the curves using two factors either specified by the user or defaults calculated by the program (the maximum absolute X and Y values of both graphs). For each point on the first normalised curve, the shortest distance to the second normalised curve is calculated. The root mean square value of all these distances is subtracted from 1 and then multiplied by 100 to get an index between 0 and 100. The process is repeated along the second curve and the two indices are averaged to get a final index. The higher the index the closer the correlation between the two curves. Note that the choice of normalising factors is important. Incorrect factors may lead to a correlation index outside the range of 0 to 100
 * @param First_Curve First Curve
 * @param Second_Curve Second Curve
 * @param X_axis_factor Normalising factor used for X axis values
 * @param Y_axis_factor Normalising factor used for Y axis values
 * @returns Correlation value
 */
    static Cor3(First_Curve: Curve, Second_Curve: Curve, X_axis_factor?: number, Y_axis_factor?: number): number;

/**
 * Calculate Cosine
 * @param Input_Curve Input Curve
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Cos(Input_Curve: Curve, Output_Curve?: Curve): Curve;

/**
 * Convert displacment spectrum to an acceleration spectrum
 * @param Input_Curve Input Curve
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Da(Input_Curve: Curve, Output_Curve?: Curve): Curve;

/**
 * Differentiate a curve
 * @param Input_Curve Input Curve
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Dif(Input_Curve: Curve, Output_Curve?: Curve): Curve;

/**
 * Divide Y axis values
 * @param First_Curve First Curve
 * @param Second_Curve_or_constant Second Curve or constant
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Div(First_Curve: Curve, Second_Curve_or_constant: Curve | number, Output_Curve?: Curve): Curve;

/**
 * Divide X axis values
 * @param First_Curve First Curve
 * @param Second_Curve_or_constant Second Curve or constant
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Dix(First_Curve: Curve, Second_Curve_or_constant: Curve | number, Output_Curve?: Curve): Curve;

/**
 * Damage Criterion DAMAGE Criterion is a brain injury metric which is based on deformation output from a second-order system of equation. DMG requires three input curves: Head Rotation Velocity X, Head Rotation Velocity Y, v. The function returns an array containing 4 curve objects. 1st Curve: Damage Resultant 2nd Curve: Damage X Component 3rd Curve: Damage Y Component 4th Curve: Damage Z Component
 * @param Head_Rotation_Velocity_X Head Rotation Velocity X Curve
 * @param Head_Rotation_Velocity_Y Head Rotation Velocity Y Curve
 * @param Head_Rotation_Velocity_Z Head Rotation Velocity Z Curve
 * @param Calculation_method Calculation method used to solve Damage operation: 'rk4', 'rkf45', 'nbm'
 * @param X_axis_interval If defined then T-HIS will automatically regularise the curve using this value first
 * @param Filter_Class If defined then T-HIS will automatically filter the input curve. The acceptable inputs for Filter class are 'C60', 'C180', 'C600', 'C1000'
 * @returns Array of Curve objects. 1st Curve: Damage Resultant 2nd Curve: Damage X Component 3rd Curve: Damage Y Component 4th Curve: Damage Z Component
 */
    static Dmg(Head_Rotation_Velocity_X: Curve, Head_Rotation_Velocity_Y: Curve, Head_Rotation_Velocity_Z: Curve, Calculation_method: string, X_axis_interval?: number, Filter_Class?: string): Curve[];

/**
 * Generate a design spectrum from a reponse spectrum
 * @param Input_Curve Input Curve
 * @param Broadening_Factor Spectrum broadening factor
 * @param Redefine_Frequencies T-HIS selects a new set of frequencies for the output (yes or no)
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Ds(Input_Curve: Curve, Broadening_Factor: number, Redefine_Frequencies: string, Output_Curve?: Curve): Curve;

/**
 * Convert displacment spectrum to a velocity spectrum
 * @param Input_Curve Input Curve
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Dv(Input_Curve: Curve, Output_Curve?: Curve): Curve;

/**
 * Generate an Envelope that bounds the min and max values of a group of curves
 * @param Curves Array of Curve objects
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Env(Curves: Curve[], Output_Curve?: Curve): Curve;

/**
 * Calculate the degree of correlation between 2 curves
 * @param First_Curve First Curve
 * @param Second_Curve Second Curve
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Err(First_Curve: Curve, Second_Curve: Curve | number, Output_Curve?: Curve): Curve;

/**
 * Calculate and displays an EXCeedence plot. This is a plot of force (Y axis) versus cumulative time (X axis) for which the force level has been exceeded. By default the Automatic option will create an exceedence plot using either the +ve OR the -ve values depending on which the input curve contains most of. The Positive option will calculate the exceedence plot using only the points with +ve y values. The Negative option will calculate the exceedence plot using only the points with -ve y values.
 * @param Input_Curve Input Curve
 * @param Output_option Select between automatic, positive or negative.
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Exc(Input_Curve: Curve, Output_option: string, Output_Curve?: Curve): Curve;

/**
 * Calculate E to the power of Y axis values
 * @param Input_Curve Input Curve
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Exp(Input_Curve: Curve, Output_Curve?: Curve): Curve;

/**
 * Fast Fourier Transform
 * @param Input_Curve Input Curve
 * @param Output_option Generate magnitude, magnitude+phase or real+imaginary, (one of magnitude,phase,real)
 * @param X_axis_interval If defined then T-HIS will automatically regularise the curve using this value first
 * @param Scaling_option Scaling option, (either one or two)
 * @returns Curve object/array or NULL
 */
    static Fft(Input_Curve: Curve, Output_option: string, X_axis_interval?: number, Scaling_option?: string): Curve[];

/**
 * FIR Filter
 * @param Input_Curve Input Curve
 * @param X_axis_interval If defined then T-HIS will automatically regularise the curve using this value first
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Fir(Input_Curve: Curve, X_axis_interval?: number, Output_Curve?: Curve): Curve;

/**
 * HIC Calculation. After calculating the HIC value for a curve the value can also be obtained from the curve using the Curve.hic property. In addition to the HIC value the start and end time for the time window can also be obtained using the Curve.hic_tmin and Curve.hic_tmax properties.
 * @param Input_Curve Input Curve
 * @param Window Maximum time window
 * @param Acceleration_factor Factor required to divide input acceleration curve by to convert to (G)
 * @returns HIC value
 */
    static Hic(Input_Curve: Curve, Window: number, Acceleration_factor: number): number;

/**
 * Modified HIC(d) Calculation for free motion headform. After calculating the HIC value for a curve the value can also be obtained from the curve using the Curve.hicd property. In addition to the HIC(d) value the start and end time for the time window can also be obtained using the Curve.hicd_tmin and Curve.hicd_tmax properties.
 * @param Input_Curve Input Curve
 * @param Window Maximum time window
 * @param Acceleration_factor Factor required to divide input acceleration curve by to convert to (G)
 * @returns HIC(d) value
 */
    static Hicd(Input_Curve: Curve, Window: number, Acceleration_factor: number): number;

/**
 * Inverse Fast Fourier Transform
 * @param First_Curve First Curve
 * @param Second_Curve Second Curve
 * @param Input_type Specifies if inputs are magnitude+phase or real+imaginary, (magnitude or real)
 * @returns Curve object or NULL
 */
    static Ifft(First_Curve: Curve, Second_Curve: Curve, Input_type: string): Curve;

/**
 * Integrate a curve
 * @param Input_Curve Input Curve
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Int(Input_Curve: Curve, Output_Curve?: Curve): Curve;

/**
 * Calculate Natural Log of Y axis values
 * @param Input_Curve Input Curve
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Log(Input_Curve: Curve, Output_Curve?: Curve): Curve;

/**
 * Calculate Log (base 10) of Y axis values
 * @param Input_Curve Input Curve
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Log10(Input_Curve: Curve, Output_Curve?: Curve): Curve;

/**
 * Calculate Log (base 10) of X axis values
 * @param Input_Curve Input Curve
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Log10x(Input_Curve: Curve, Output_Curve?: Curve): Curve;

/**
 * Calculate Natural Log of X axis values
 * @param Input_Curve Input Curve
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Logx(Input_Curve: Curve, Output_Curve?: Curve): Curve;

/**
 * Calculate Least Squares Fit for a curve
 * @param Input_Curve Input Curve
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Lsq(Input_Curve: Curve, Output_Curve?: Curve): Curve;

/**
 * Map Y axis values from one curve onto another curve
 * @param First_Curve First Curve
 * @param Second_Curve Second Curve
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Map(First_Curve: Curve, Second_Curve: Curve | number, Output_Curve?: Curve): Curve;

/**
 * Maximum of a group of curves
 * @param Curves Array of Curve objects
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Max(Curves: Curve[], Output_Curve?: Curve): Curve;

/**
 * Minimum of a group of curves
 * @param Curves Array of Curve objects
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Min(Curves: Curve[], Output_Curve?: Curve): Curve;

/**
 * Sort a curve into monotonically increasing X axis values.
 * @param Input_Curve Input Curve
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Mon(Input_Curve: Curve, Output_Curve?: Curve): Curve;

/**
 * Multiply Y axis values
 * @param First_Curve First Curve
 * @param Second_Curve_or_constant Second Curve or constant
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Mul(First_Curve: Curve, Second_Curve_or_constant: Curve | number, Output_Curve?: Curve): Curve;

/**
 * Multiply X axis values
 * @param First_Curve First Curve
 * @param Second_Curve_or_constant Second Curve or constant
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Mux(First_Curve: Curve, Second_Curve_or_constant: Curve | number, Output_Curve?: Curve): Curve;

/**
 * Calculate a platic rotation curve for a beam from a moment/time and rotation/time
 * @param First_Curve Moment / Time Curve
 * @param Second_Curve Rotation /Time Curve
 * @returns Curve object or NULL
 */
    static Ncp(First_Curve: Curve, Second_Curve: Curve): Curve;

/**
 * Biomechanical neck injury predictor. Used as a measure of injury due to the load transferred through the occipital condyles. This function returns an array containing 4 curve objects. Curve 1 - "Nte" is the tension-extension condition Curve 2 - "Ntf" is the tension-flexion condition Curve 3 - "Nce" is the compression-extension condition Curve 4 - "Ncf" is the compression-flexion condition.
 * @param Shear_Force Shear Force Curve
 * @param Axial_Force Axial Force Curve
 * @param Moment Moment Curve
 * @param Fzc_t Critical Axial Force (Tension)
 * @param Fzc_c Critical Axial Force (Compression)
 * @param Myc_f Critical bending moment (Flexion)
 * @param Myc_e Critical bending moment (Extension)
 * @param E Distance
 * @returns Array of Curve objects. 1st curve : Nte curve 2nd curve : Ntf curve 3rd curve : Nce curve 4th curve : Ncf curve
 */
    static Nij(Shear_Force: Curve, Axial_Force: Curve, Moment: Curve, Fzc_t: number, Fzc_c: number, Myc_f: number, Myc_e: number, E: number): Curve[];

/**
 * Normalise Y axis values between [-1,1]
 * @param Input_Curve Input Curve
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Nor(Input_Curve: Curve, Output_Curve?: Curve): Curve;

/**
 * Normalise Y axis values with manual settings. The operation takes the absolute value of the user-specified Y Min and Y Max. It then finds the maximum of these two numbers and divides all Y data by this number. There are two locks which probe or "lock on to" the Y Max and Y Min axis values which offers quick axis-normalizing.
 * @param Input_Curve First Curve
 * @param Y_Min_Value The Minimum Y value
 * @param Y_Max_Value The Maximum Y value
 * @param Lock_to_Axis_Y_Min Set the Lock button for the Y Minimum textbox
 * @param Lock_to_Axis_Y_Max Set the Lock button for the Y Maximum textbox
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Nor2(Input_Curve: Curve, Y_Min_Value: number, Y_Max_Value: number, Lock_to_Axis_Y_Min: number, Lock_to_Axis_Y_Max: number, Output_Curve?: Curve): Curve;

/**
 * Normalise X axis values between [-1,1]
 * @param Input_Curve Input Curve
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Nox(Input_Curve: Curve, Output_Curve?: Curve): Curve;

/**
 * Normalise X axis values with manual settings. The operation takes the absolute value of the user-specified X Min and X Max. It then finds the maximum of these two numbers and divides all X data by this number. There are two locks which probe or "lock on to" the X Max and X Min axis values which offers quick axis-normalizing.
 * @param Input_Curve First Curve
 * @param X_Min_Value The Minimum X value
 * @param X_Max_Value The Maximum X value
 * @param Lock_to_Axis_X_Min Set the Lock button for the X Minimum textbox
 * @param Lock_to_Axis_X_Max Set the Lock button for the X Maximum textbox
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Nox2(Input_Curve: Curve, X_Min_Value: number, X_Max_Value: number, Lock_to_Axis_X_Min: number, Lock_to_Axis_X_Max: number, Output_Curve?: Curve): Curve;

/**
 * Coverts a narrow band curve to either Octave or 1/Third Octave bands
 * @param Input_Curve Input Curve
 * @param Band_type_to_convert_to Band type to convert to. Either "Octave" or "Third" Octave.
 * @param Output_Type Generate curve containing either "RMS" or "mean" values.
 * @param Input_Type Input curve contains either "Linear" or "dB" values.
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Octave(Input_Curve: Curve, Band_type_to_convert_to: string, Output_Type: string, Input_Type: string, Output_Curve?: Curve): Curve;

/**
 * Occupant load Criterion. Used as a parameter to evaluate Euro NCAP MPDB assessment as specified in Technical Bulletin TB 027 v1.1.1, which is intended to be used with the Adult Occupant Protection. The function returns an array containing 5 curve objects. Curve 1 - Velocity of Virtual Occupant Curve 2 - Velocity of the Barrier Model Curve 3 - Displacement of the Barrier Model Curve 4 - Displacement of the Virtual Occupant Curve 5 - Relative Displacement between the two models
 * @param Input_Curve Input Curve
 * @param Second_Curve_or_constant Second Curve or constant
 * @param X_axis_interval If defined then T-HIS will automatically regularise the curve using this value first
 * @param Filter_Class If defined then T-HIS will automatically filter the input curve. The acceptable inputs for Filter class are 'C60', 'C180', 'C600', 'C1000'
 * @returns Array of Curve objects. 1st Curve: Velocity of Virtual Occupant 2nd Curve: Velocity of the Barrier Model 3rd Curve: Displacement of the Barrier Model 4th Curve: Displacement of the Virtual Occupant 5th Curve: Relative Displacement between the two models
 */
    static Olc(Input_Curve: Curve, Second_Curve_or_constant: Curve | number, X_axis_interval?: number, Filter_Class?: string): Curve[];

/**
 * Reverse the order of points in a curve
 * @param Input_Curve Input Curve
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Order(Input_Curve: Curve, Output_Curve?: Curve): Curve;

/**
 * Pure Butterworth Filter
 * @param Input_Curve Input Curve
 * @param Frequency Cut-off Frequency (Hz)
 * @param Order Filter order
 * @param X_axis_interval If defined then T-HIS will automatically regularise the curve using this value first
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Pbut(Input_Curve: Curve, Frequency: number, Order: number, X_axis_interval?: number, Output_Curve?: Curve): Curve;

/**
 * Raise to the power
 * @param Input_Curve Input Curve
 * @param Power Power to raise Y axis values by
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Power(Input_Curve: Curve, Power: number, Output_Curve?: Curve): Curve;

/**
 * Calculate rolling average of a curve
 * @param Input_Curve Input Curve
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Rave(Input_Curve: Curve, Output_Curve?: Curve): Curve;

/**
 * Calculate reciprocal
 * @param Input_Curve Input Curve
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Rec(Input_Curve: Curve, Output_Curve?: Curve): Curve;

/**
 * Regularise X axis intervals for a curve.
 * @param Input_Curve Input Curve
 * @param X_axis_interval New X axis interval
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Reg(Input_Curve: Curve, X_axis_interval: number, Output_Curve?: Curve): Curve;

/**
 * Resultant of a group of curves
 * @param Curves Array of Curve objects
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Res(Curves: Curve[], Output_Curve?: Curve): Curve;

/**
 * Reverse X and Y axis values
 * @param Input_Curve Input Curve
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Rev(Input_Curve: Curve, Output_Curve?: Curve): Curve;

/**
 * Generate a reponse spectrum from input accelerations
 * @param Input_Curve Input Curve
 * @param Damping_Factor Dammping factor
 * @param Sampling_Points Number of points to sample over (30 or 70)
 * @param X_axis_interval If defined then T-HIS will automatically regularise the curve using this value first
 * @param Output_Curve Curve to overwrite
 * @returns Array of Curve objects 1st curve : Relative displacement 2nd curve : Relative velocity 3th curve : Pseudo relative velocity 4th curve : Absolute acceleration 5th curve : Pseudo absolute acceleration
 */
    static Rs(Input_Curve: Curve, Damping_Factor: number, Sampling_Points: number, X_axis_interval?: number, Output_Curve?: Curve): Curve[];

/**
 * Calculate Sine
 * @param Input_Curve Input Curve
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Sin(Input_Curve: Curve, Output_Curve?: Curve): Curve;

/**
 * Apply a smoothing factor to a curve
 * @param Input_Curve Input Curve
 * @param Smoothing_Factor Number of points to average over
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Smooth(Input_Curve: Curve, Smoothing_Factor: number, Output_Curve?: Curve): Curve;

/**
 * Square root of a curve
 * @param Input_Curve Input Curve
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Sqr(Input_Curve: Curve, Output_Curve?: Curve): Curve;

/**
 * Convert between true and engineering stress
 * @param Input_Curve Input Curve
 * @param Convert_to Type to convert to (True or Engineering)
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Stress(Input_Curve: Curve, Convert_to: string, Output_Curve?: Curve): Curve;

/**
 * Subtract Y axis values
 * @param First_Curve First Curve
 * @param Second_Curve_or_constant Second Curve or constant
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Sub(First_Curve: Curve, Second_Curve_or_constant: Curve | number, Output_Curve?: Curve): Curve;

/**
 * Sum of a group of curves
 * @param Curves Array of Curve objects
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Sum(Curves: Curve[], Output_Curve?: Curve): Curve;

/**
 * Subtract X axis values
 * @param First_Curve First Curve
 * @param Second_Curve_or_constant Second Curve or constant
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Sux(First_Curve: Curve, Second_Curve_or_constant: Curve | number, Output_Curve?: Curve): Curve;

/**
 * Calculate Tangent
 * @param Input_Curve Input Curve
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Tan(Input_Curve: Curve, Output_Curve?: Curve): Curve;

/**
 * Theoretical Head Impact Velocity and the Post Impact Head Deceleration. These values are used to assess the performance of road side crash barriers. This function returns an array containing 2 curve objects. The 1st curve is the THIV curve and the 2nd is the PHD curve. The peak values of these curves are the corresponding THIV and PHD values and can be obtained using the Curve.ymax property.
 * @param X_Acceleration X Acceleration Curve
 * @param Y_Acceleration Y Acceleration Curve
 * @param Yaw_Rate Yaw Rate Curve
 * @param Dx Horizontal distance between occupants head and vehicle
 * @param Dy Lateral distance between occupants head and vehicle
 * @param X0 Horizontal distance between occupants head and vehicle CofG
 * @returns Array of Curve objects. 1st curve : THIV curve 2nd curve : PHD curve
 */
    static Thiv(X_Acceleration: Curve, Y_Acceleration: Curve, Yaw_Rate: Curve, Dx: number, Dy: number, X0: number): Curve[];

/**
 * Tibia Index is an injury criterion for the lower leg area used to predict leg injuries.
 * @param Axial_Force Axial Force Curve
 * @param X_Moment X Moment Curve
 * @param Y_Moment Y Moment Curve
 * @param Fzc Critical Axial Force
 * @param Mrc Critical Resultant Moment
 * @param X_axis_interval If defined then T-HIS will automatically regularise the curve using this value first
 * @param Filter_Class If defined then T-HIS will automatically filter the input curve. The acceptable inputs for Filter class are 'C60', 'C180', 'C600', 'C1000'
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Ti(Axial_Force: Curve, X_Moment: Curve, Y_Moment: Curve, Fzc: number, Mrc: number, X_axis_interval?: number, Filter_Class?: string, Output_Curve?: Curve): Curve;

/**
 * 3ms Clip Calculation. After calculating the 3ms clip value for a curve the value can also be obtained from the curve using the Curve.tms property. In addition to the 3ms clip value the start and end time for the time window can also be obtained using the Curve.tms_tmin and Curve.tms_tmax properties.
 * @param Input_Curve Input Curve
 * @param Period Clip period
 * @returns 3ms clip value
 */
    static Tms(Input_Curve: Curve, Period: number): number;

/**
 * Translate a curve
 * @param Input_Curve Input Curve
 * @param X_value X translation value
 * @param Y_value Y translation value
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Translate(Input_Curve: Curve, X_value: number, Y_value: number, Output_Curve?: Curve): Curve;

/**
 * Thorax Trauma Index.
 * @param Upper_Rib_Acceleration Upper Rib Acceleration Curve
 * @param Lower_Rib_Acceleration Lower Rib Acceleration Curve
 * @param T12_Acceleration T12 Acceleration Curve
 * @returns TTI value
 */
    static Tti(Upper_Rib_Acceleration: Curve, Lower_Rib_Acceleration: Curve, T12_Acceleration: Curve): number;

/**
 * Convert velocity spectrum to an acceleration spectrum
 * @param Input_Curve Input Curve
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Va(Input_Curve: Curve, Output_Curve?: Curve): Curve;

/**
 * Viscous Criteria calculate. The VC calculation can be done using 2 different calculation methods ECER95 and IIHS.
 * @param Input_Curve Input Curve
 * @param A Constant A
 * @param B Constant B
 * @param Calculation_method Either ECER95 or IIHS.
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Vc(Input_Curve: Curve, A: number, B: number, Calculation_method: string, Output_Curve?: Curve): Curve;

/**
 * Convert velocity spectrum to a displacment spectrum
 * @param Input_Curve Input Curve
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Vd(Input_Curve: Curve, Output_Curve?: Curve): Curve;

/**
 * Vector magnitude of 3 curves
 * @param First_Curve First Curve
 * @param Second_Curve Second Curve
 * @param Third_Curve Second Curve
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Vec(First_Curve: Curve, Second_Curve: Curve | number, Third_Curve: Curve | number, Output_Curve?: Curve): Curve;

/**
 * Vector magnitude of 2 curves
 * @param First_Curve First Curve
 * @param Second_Curve Second Curve
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Vec2d(First_Curve: Curve, Second_Curve: Curve | number, Output_Curve?: Curve): Curve;

/**
 * Weigthed Integrated Factor (WIFAC) Correlation function.
 * @param First_Curve First Curve
 * @param Second_Curve Second Curve
 * @returns Correlation value
 */
    static Wif(First_Curve: Curve, Second_Curve: Curve): number;

/**
 * Apply a smoothing window to a curve
 * @param Input_Curve Input Curve
 * @param Window_Type Window type to apply (Hanning, cosine or exponetial)
 * @param percentage_lead_in percentage lead in for cosine window
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Window(Input_Curve: Curve, Window_Type: string, percentage_lead_in?: number, Output_Curve?: Curve): Curve;

/**
 * Translate curve to 0,0
 * @param Input_Curve Input Curve
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static Zero(Input_Curve: Curve, Output_Curve?: Curve): Curve;

/**
 * Translate curve to X=0.0
 * @param Input_Curve Input Curve
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static ZeroX(Input_Curve: Curve, Output_Curve?: Curve): Curve;

/**
 * Translate curve to Y=0.0
 * @param Input_Curve Input Curve
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static ZeroY(Input_Curve: Curve, Output_Curve?: Curve): Curve;

/**
 * Converts a curve to dB (y = 20.0*log(y/yref))
 * @param Input_Curve Input Curve
 * @param Reference_Value Reference value
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static dB(Input_Curve: Curve, Reference_Value: number, Output_Curve?: Curve): Curve;

/**
 * Applies A-weighting to a curve (convert from dB to dBA)
 * @param Input_Curve Input Curve
 * @param Weighting_Type Apply either Narrow band (narrow) or Octave band (octave) A weighting
 * @param Output_Curve Curve to overwrite
 * @returns Curve object or NULL
 */
    static dBA(Input_Curve: Curve, Weighting_Type: string, Output_Curve?: Curve): Curve;

}

declare class Options {
/** If true then T/HIS will automatically confirm (i.e. press the OK button) on (most) message boxes that are mapped. If false (default) then the message boxes will be shown and wait for the user to press a button. This option may be useful to help automate an operation where T/HIS would normally show a message box and wait for the user to press a button. */
    static auto_confirm: boolean;
/** If true (default) error messages will be printed to the dialogue box/stdout when an exception occurs in the API. If false they will not be printed. This option may be useful if you are using try/catch to manage exceptions and you do not want any error messages to be printed. */
    static exception_messages: boolean;
/** The maximum number of Widgets that can be made for one Window. The default value is 1000 */
    static max_widgets: number;
/** The maximum number of lines that can be made for a Window.Error(), Window.Information(), Window.Message(), Window.Question() or Window.Warning() window. The default value is 25 */
    static max_window_lines: number;
/** The size of the buffer used (in kiloBytes) when transferring data to/from the remote machine in the Ssh class. Depending on your network and the size of the files you are transferring, changing this value may make file transfers quicker. The default value is 64(kB) but any value in the range 1(kB) to 1024(kB) is allowed. */
    static ssh_buffer_size: number;
}

declare class Page {
/**
 * Adds one or more graphs to the specified page.
 * @param Page_number Page number to add graph(s) to.
 * @param Graph_number Graph number to add to page. If this argument is 0 or not given, a new graph is created.
 * @param Graph_number_to_copy_properties_from If the second argument is 0, this specifies which graph to copy properties from when creating new graphs.
 * @param Number_of_graphs If the second argument is 0, this specifies the number of new graphs to create and add to the specified page.
 * @returns True if the graph was added, false if failed.
 */
    static AddGraph(Page_number: number, Graph_number?: number, Graph_number_to_copy_properties_from?: number, Number_of_graphs?: number): boolean;

/**
 * Creates Page
 * @returns Boolean
 */
    static CreatePage(): boolean;

/**
 * Deletes Page
 * @param Page_number The page number which needs to be deleted.
 * @returns String
 */
    static DeletePage(Page_number: number): string;

/**
 * Retrieves the id of a page from it's name.
 * @param Page_name The page name for which the page id will be retrieved.
 * @returns Integer
 */
    static GetPageFromName(Page_name: number): number;

/**
 * Retrieves the name of a page.
 * @param Page_number The page number for which the name will be retrieved.
 * @returns String
 */
    static GetPageName(Page_number: number): string;

/**
 * Sets the layout of either all pages or a specified page.
 * @param Page_number Page number for which to set layout. If this argument is 0 then layout will be set on all pages individually. If -1 then the layout will be set globally, as in the 'Graphs' panel.
 * @param Layout Layout specifier. Options are: "wide" or 1 - Tile wide, "tall" or 2 - Tile tall, "1x1" or 3 - 1x1, "2x2" or 4 - 2x2, "3x3" or 5 - 3x3, "xy" or 6 - XxY.
 * @param Num_in_X Number of graphs in X-direction if user-defined XxY layout (6).
 * @param Num_in_Y Number of graphs in Y-direction if user-defined XxY layout (6).
 * @returns True if the layout was set, false if failed.
 */
    static Layout(Page_number: number, Layout: string | number, Num_in_X?: number, Num_in_Y?: number): boolean;

/**
 * Remove one or more graphs from the specified page.
 * @param Page_number Page number to remove the graph from.
 * @param Graph_number Graph number to remove from page. If this argument is 0 or not given, the highest number graph on the page will be removed. If this argument is -1, all graphs will be removed.
 * @param Lower_end_of_range_for_removing_graphs If the second argument is 0, this specifies the lower end of the range for removing graphs. All graphs with numbers within the specified range will be removed from the page.
 * @param Upper_end_of_range_for_removing_graphs If the second argument is 0, this specifies the upper end of the range for removing graphs. All graphs with numbers within the specified range will be removed from the page. If this argument is not given then it will be set to the maximum number of graphs by default.
 * @returns True if the graph was removed, false if failed.
 */
    static RemoveGraph(Page_number: number, Graph_number?: number, Lower_end_of_range_for_removing_graphs?: number, Upper_end_of_range_for_removing_graphs?: number): boolean;

/**
 * Returns the current active page in T/HIS.
 * @returns integer
 */
    static ReturnActivePage(): number;

/**
 * Returns the graphs on the specified page as an array of Graph objects.
 * @param Page_number Page number for which to return the graphs it contains.
 * @returns Array of Graph objects
 */
    static ReturnGraphs(Page_number: number): Graph[];

/**
 * Sets the current active page in T/HIS, returning -1 if the page does not exist or the page number if it does.
 * @param Page_number Page number to set to active page
 * @returns True if the page was set, false if the page does not exist.
 */
    static SetActivePage(Page_number: number): boolean;

/**
 * Sets the Name of a Page
 * @param Page_number The page number for which the name will be set.
 * @param Page_name The name to assign to the page.
 * @returns Boolean
 */
    static SetPageName(Page_number: number, Page_name: string): boolean;

/**
 * Returns the total number of pages.
 * @returns integer
 */
    static Total(): number;

}

declare class PopupWindow {
/**
 * Hides (unmaps) the popup window.
 */
    Hide(): void;

/**
 * Create a new PopupWindow object.
 * @returns PopupWindow object
 */
    constructor();

/** If the popup window will remain mapped when a button is pressed in it. By default (false) when a button is pressed in the popup window the popup will be unmapped. If set to true then the popup will remain mapped until the user clicks out of the window or hides it by calling Hide() */
    persistent: boolean;
}


/** Object function argument in Bulk */
interface BulkArgument_Options {
    /** Allows you to control which curve ID number the file will begin to read at. This can either be a whole number greater than 0 or specified as a string like "#3" for curve 3. There are also the special string characters "%", standing for highest free curve as well as "#", standing for the lowest free curve. By default, this will be set to the highest free curve. */
    outputOpt?: number;
}


/** Object function argument in CSV */
interface CSVArgument_Options {
    /** CSV file type. Can be Read.CSV_XYXY or Read.CSV_XYYY */
    csvType?: number;
    /** Allows you to control which curve ID number the file will begin to read at. This can either be a whole number greater than 0 or specified as a string like "#3" for curve 3. There are also the special string characters "%", standing for highest free curve as well as "#", standing for the lowest free curve. By default, this will be set to the highest free curve. */
    outputOpt?: number;
    /** Index of the row containing axis labels. This is row 2 by default, so should be set to 0 if no axis labels are present. */
    rowAxisLabel?: number;
    /** Index of the row containing curve labels. This is row 1 by default, so should be set to 0 if no curve labels are present. */
    rowCurveLabel?: number;
    /** Separator. Can be Read.CSV_COMMA, Read.CSV_SPACE or Read.CSV_TAB */
    separator?: number;
    /** Index of the column containing X-values. This is column 1 by default. */
    xColIndex?: number;
    /** User defined X-interval between points, to use together with xStartVal */
    xInterval?: number;
    /** Instead of taking X-values from the CSV file, this allows the user to define a value for the start of the X-axis. */
    xStartVal?: number;
}


/** Object function argument in Cur */
interface CurArgument_Options {
    /** Allows you to control which curve ID number the file will begin to read at. This can either be a whole number greater than 0 or specified as a string like "#3" for curve 3. There are also the special string characters "%", standing for highest free curve as well as "#", standing for the lowest free curve. */
    outputOpt?: number;
}


/** Object function argument in DIAdem */
interface DIAdemArgument_Options {
    /** String to filter channel names/comments. Only channels whose names/comments contain the filter string will be read. */
    filter?: string;
    /** Allows you to control which curve ID number the file will begin to read at. This can either be a whole number greater than 0 or specified as a string like "#3" for curve 3. There are also the special string characters "%", standing for highest free curve as well as "#", standing for the lowest free curve. By default, this will be set to the highest free curve. */
    outputOpt?: number;
    /** Option to select what is written to the curve tag. Can be Read.DIADEM_COMMENT or Read.DIADEM_NAME */
    showChannelName?: number;
    /** User defined interval between points on the X-axis, to use together with the previous argument. */
    xAxisInterval?: number;
    /** Instead of taking X-values from a DIAdem channel, this allows the user to define a value for the start of the X-axis. */
    xAxisStartVal?: number;
}


/** Object function argument in Equation */
interface EquationArgument_Options {
    /** Allows you to control which curve ID the file will begin to read into. By default, this will be set to the highest free curve by default if the option is not selected. */
    curveID?: number;
    /** Right endpoint of the x range. Default 1.0. */
    xEndVal?: number;
    /** Interval between points. Default 0.01. */
    xInterval?: number;
    /** Left endpoint of the x range. Default 0.0. */
    xStartVal?: number;
    /** Option to select how x values are determined for the given equation. Read.EQUATION_X_VALS, requires the xStartVal, xEndVal and xInterval options to also be set however these default to 0, 1 and 0.01 respectively. Read.EQUATION_CURVE_VARS will calculate it's x values from the curve variables that are used in the equation. This is the default if curve variables are used and no xValOpt has been provided. Read.EQUATION_X_OR_CURVE will use Rea.EQUATION_X_VALS if there are no curve variables in the equation otherwise Read.EQUATION_CURVE_VARS if there are. -ID to take x values from Curve #ID (e.g. -5 for curve ID 5) */
    xValOpt?: number;
}


/** Object function argument in ISO */
interface ISOArgument_Options {
    /** Format of ISO file. Can be Read.MULTIPLE_CHANNELS, Read.ISO_SINGLE_CHANNEL */
    fileFormat?: number;
    /** Label type to use. Can be Read.ISO_CHANNEL_LABEL, Read.ISO_CHANNEL_CODE */
    labelType?: number;
    /** Allows you to control which curve ID the file will begin to read to. This can either be a whole number greater than 0 or specified as a string like "#3" for curve 3. There are also the special string characters "%", standing for highest free curve as well as "#", standing for the lowest free curve. By default, this will be set to the highest free curve. */
    outputOpt?: number;
}


/** Object function argument in Key */
interface KeyArgument_Options {
    /** Allows you to control which curve ID number the file will begin to read at. This can either be a whole number greater than 0 or specified as a string like "#3" for curve 3. There are also the special string characters "%", standing for highest free curve as well as "#", standing for the lowest free curve. */
    outputOpt?: number;
}


/** Object function argument in LSPP */
interface LSPPArgument_Options {
    /** LSPP file format. Can be Read.LSPP_CURVE_FILE or Read.LSPP_XY_PAIRS */
    fileFormat?: number;
    /** Allows you to control which curve ID number the file will begin to read at. This can either be a whole number greater than 0 or specified as a string like "#3" for curve 3. There are also the special string characters "%", standing for highest free curve as well as "#", standing for the lowest free curve. By default, this will be set to the highest free curve. */
    outputOpt?: number;
}

declare class Read {
/**
 * Reads a Bulk Data file into T/HIS.
 * @param Filename Name of Bulk Data file to read
 * @param Options Options which give you greater control of reading a Bulk file:
 */
    static Bulk(Filename: string, Options?: BulkArgument_Options): void;

/**
 * Reads a CSV file into T/HIS.
 * @param Filename Name of CSV file to read.
 * @param Options Options which give you greater control of reading a CSV file:
 */
    static CSV(Filename: string, Options?: CSVArgument_Options): void;

/**
 * Reads a Curve file into T/HIS.
 * @param Filename Name of Curve file to read
 * @param Options Options which give you greater control of reading a Curve file:
 */
    static Cur(Filename: string, Options?: CurArgument_Options): void;

/**
 * Reads a DIAdem file into T/HIS.
 * @param Filename Name of DIAdem header file to read.
 * @param X_axis_channel Index of the channel to use as X-axis values. If this is 0 then the X-values can be generated from a start value and an interval in the following two arguments.
 * @param Options Options which give you greater control of reading the Diadem file:
 */
    static DIAdem(Filename: string, X_axis_channel: number, Options?: DIAdemArgument_Options): void;

/**
 * Create a curve from a user-defined equation.
 * @param Formula Equation string.
 * @param Options Options which give you greater control of reading the Diadem file:
 */
    static Equation(Formula: string, Options?: EquationArgument_Options): void;

/**
 * Reads an ISO file into T/HIS.
 * @param Filename Name of ISO file to read
 * @param Options Options which give you greater control of reading an ISO file:
 */
    static ISO(Filename: string, Options?: ISOArgument_Options): void;

/**
 * Reads a Keyword file into T/HIS.
 * @param Filename Name of Keyword file to read
 * @param Options Options which give you greater control of reading a Keyword file:
 */
    static Key(Filename: string, Options?: KeyArgument_Options): void;

/**
 * Reads an LS-PREPOST file into T/HIS.
 * @param Filename Name of LS-PREPOST file to read
 * @param Options Options which give you greater control of reading a Keyword file:
 */
    static LSPP(Filename: string, Options?: LSPPArgument_Options): void;

/** CSV comma separator */
    static CSV_COMMA: number;
/** CSV space separator */
    static CSV_SPACE: number;
/** CSV tab separator */
    static CSV_TAB: number;
/** CSV format X,Y,X,Y */
    static CSV_XYXY: number;
/** CSV format X,Y,Y,Y */
    static CSV_XYYY: number;
/** Diadem comment written to curve tag */
    static DIADEM_COMMENT: number;
/** Diadem channel name written to curve tag */
    static DIADEM_NAME: number;
/** Calculate x values from curve variables for equations */
    static EQUATION_CURVE_VARS: number;
/** If there are no curve variables, use the X start, end and interval values for equation x values. Otherwise calculate x values from the curve variables. */
    static EQUATION_X_OR_CURVE: number;
/** Use the X start, end and interval values for equation x values */
    static EQUATION_X_VALS: number;
/** Use the channel code for the ISO curve labels */
    static ISO_CHANNEL_CODE: number;
/** Use the channel label for the ISO curve labels */
    static ISO_CHANNEL_LABEL: number;
/** Multiple channels ISO file */
    static ISO_MULTIPLE_CHANNELS: number;
/** Single channel ISO file */
    static ISO_SINGLE_CHANNEL: number;
/** LSPP curve file format */
    static LSPP_CURVE_FILE: number;
/** LSPP XY pairs file format */
    static LSPP_XY_PAIRS: number;
}


/** Object returned by Execute */
interface ExecuteReturn {
    /** The exit code from the command */
    status: number;
    /** The standard error output from the command */
    stderr: string;
    /** The standard output from the command */
    stdout: string;
}


/** Object function argument in Execute */
interface ExecuteArgument_data {
    /** The arguments to pass to the command */
    arguments?: string[];
    /** The command you want to run */
    command: string;
}


/** Object returned by SftpList */
interface SftpListReturn {
    /** Access time for the file (seconds since epoch) */
    atime: number;
    /** The group ID */
    gid: number;
    /** Bitwise information for the file/directory. See the permissions, file types and file bits constants */
    info: number;
    /** Modification time for the file (seconds since epoch) */
    mtime: number;
    /** The name of the file/directory */
    name: string;
    /** The size of the file */
    size: number;
    /** The user ID */
    uid: number;
}

declare class Ssh {
/**
 * Authenticate the connection using password.
 * @param password The password for the username on the remote machine
 */
    AuthenticateWithPassword(password: string): void;

/**
 * Authenticate the connection using your public key. Your public key from the file .oasys_ssh/id_rsa.pub must be in the file .oasys_ssh/authorized_keys on the remote machine.
 * @param passphrase The passphrase for authentication on the remote machine if required
 */
    AuthenticateWithPublicKey(passphrase?: string): void;

/**
 * Execute a command in the ssh session and get the standard output and error streams.
 * @param data Execute data
 */
    Execute(data: ExecuteArgument_data): ExecuteReturn;

/**
 * Gets a file from the ssh connection using scp.
 * @param remote The path of the remote file to get
 * @param local The path of the local file to write
 */
    Get(remote: string, local: string): void;

/**
 * Puts a file on the remote ssh connection using scp.
 * @param remote The path of the remote file to put
 * @param local The path of the local file to read
 */
    Put(remote: string, local: string): void;

/**
 * Gets a file from the ssh connection using sftp.
 * @param remote The path of the remote file to get
 * @param local The path of the local file to write
 */
    SftpGet(remote: string, local: string): void;

/**
 * Gets a listing from the ssh connection using sftp.
 * @param remote The remote path to get the listing from
 */
    SftpList(remote: string): SftpListReturn[];

/**
 * Creates a directory in the remote ssh connection using sftp.
 * @param remote The remote directory to create
 * @param mode The mode/permissions for the directory. See the permissions constants for details. Note that the user's file-creation mask (umask) value will also be taken into account when creating the directory.
 * @returns true if successful, false if not
 */
    SftpMkdir(remote: string, mode: number): boolean;

/**
 * Puts a file on the remote ssh connection using sftp.
 * @param remote The path of the remote file to put
 * @param local The path of the local file to read
 */
    SftpPut(remote: string, local: string): void;

/**
 * Deletes a directory in the remote ssh connection using sftp. If this fails it is probably because the directory is not empty.
 * @param remote The remote directory to delete
 * @returns true if successful, false if not
 */
    SftpRmdir(remote: string): boolean;

/**
 * Create a new Ssh object for secure communication to a remote computer.
 * @param hostname The hostname of the machine that you want to connect to
 * @param username The username on the machine that you want to connect to
 * @returns Ssh object
 */
    constructor(hostname: string, username: string);

/** Directory */
    static DIRECTORY: number;
/** Regular file */
    static FILE: number;
/** Group has execute permission */
    static GROUP_EXECUTE: number;
/** Group has read permission */
    static GROUP_READ: number;
/** Group has write permission */
    static GROUP_WRITE: number;
/** Others have execute permission */
    static OTHER_EXECUTE: number;
/** Others have read permission */
    static OTHER_READ: number;
/** Others have write permission */
    static OTHER_WRITE: number;
/** Owner has execute permission */
    static OWNER_EXECUTE: number;
/** Owner has read permission */
    static OWNER_READ: number;
/** Owner has write permission */
    static OWNER_WRITE: number;
/** Set group bit */
    static SETGROUP_BIT: number;
/** Set uid bit */
    static SETUID_BIT: number;
/** Socket */
    static SOCKET: number;
/** sticky bit */
    static STICKY_BIT: number;
/** Symbolic link */
    static SYMBOLIC_LINK: number;
}

declare class Symbol {
/** Circle symbol */
    static CIRCLE: number;
/** Cross symbol */
    static CROSS: number;
/** Diamond symbol */
    static DIAMOND: number;
/** Dot symbol */
    static DOT: number;
/** Hourglass symbol */
    static HOURGLASS: number;
/** No symbol */
    static NONE: number;
/** Square symbol */
    static SQUARE: number;
/** Star symbol */
    static STAR: number;
/** Triangle symbol */
    static TRIANGLE: number;
}

declare class UnitSystem {
/** U1 unit system (m, kg, s) */
    static U1: number;
/** U2 unit system (mm, t, s) */
    static U2: number;
/** U3 unit system (mm, kg, ms) */
    static U3: number;
/** U4 unit system (mm, g, ms) */
    static U4: number;
/** U5 unit system (ft, slug, s) */
    static U5: number;
/** U6 unit system (m, t, s) */
    static U6: number;
}

declare class Units {
/**
 * Returns the Display units
 * @returns String indicating the display unit system
 */
    static GetDisplayUnits(): string;

/**
 * Sets the display units to the units provided by the user
 * @param unit_system The unit system you want to set the display units to
 * @returns TRUE if the Display units are set successfully else FALSE
 */
    static SetDisplayUnits(unit_system: string): boolean;

/**
 * Setup a user defined UNIT
 * @param mass Power for mass dimensions.
 * @param time Power for time dimensions.
 * @param length Power for length dimensions.
 * @param angle Power for angle dimensions.
 * @param temperature Power for temperature dimensions.
 * @param current Power for current dimensions.
 * @returns integer
 */
    static USER(mass: number, time: number, length: number, angle: number, temperature: number, current?: number): number;

/** Acceleration units */
    static ACCELERATION: number;
/** Area units */
    static AREA: number;
/** Charge units */
    static CHARGE: number;
/** Conductivity units */
    static CONDUCTIVITY: number;
/** Current units */
    static CURRENT: number;
/** Density units */
    static DENSITY: number;
/** Displacement units */
    static DISPLACEMENT: number;
/** Electric Field Vector units */
    static ELECTRIC_FIELD_VECTOR: number;
/** Energy units */
    static ENERGY: number;
/** Energy Density units */
    static ENERGY_DENSITY: number;
/** Flow Rate units */
    static FLOW_RATE: number;
/** Thermal Flux units */
    static FLUX: number;
/** Force units */
    static FORCE: number;
/** Force per unit width units */
    static FORCE_WIDTH: number;
/** Frequency units */
    static FREQUENCY: number;
/** Heat Transfer coefficient units */
    static HEAT_TRANSFER_COEFF: number;
/** Inductance units */
    static INDUCTANCE: number;
/** Inertia units */
    static INERTIA: number;
/** Length units */
    static LENGTH: number;
/** Magnetic Flux Vector units */
    static MAGNETIC_FLUX_VECTOR: number;
/** MAss units */
    static MASS: number;
/** Mass Flow rate units */
    static MASS_FLOW: number;
/** Moment units */
    static MOMENT: number;
/** Momentum units */
    static MOMENTUM: number;
/** Moment per unit width units */
    static MOMENT_WIDTH: number;
/** No units */
    static NONE: number;
/** Power units */
    static POWER: number;
/** Pressure units */
    static PRESSURE: number;
/** Q Criterion units */
    static Q_CRITERION: number;
/** Resistance units */
    static RESISTANCE: number;
/** Rotation units */
    static ROTATION: number;
/** Rotational Acceleration units */
    static ROTATIONAL_ACCELERATION: number;
/** Rotational Velocity units */
    static ROTATIONAL_VELOCITY: number;
/** Strain units */
    static STRAIN: number;
/** Stress units */
    static STRESS: number;
/** Temperature units */
    static TEMPERATURE: number;
/** Thermal Diffusivity units */
    static THERMAL_DIFFUSIVITY: number;
/** Time units */
    static TIME: number;
/** Unknown units */
    static UNKNOWN: number;
/** Vector Potential units */
    static VECTOR_POTENTIAL: number;
/** Velocity units */
    static VELOCITY: number;
/** Viscosity units */
    static VISCOSITY: number;
/** Voltage units */
    static VOLTAGE: number;
/** Volume units */
    static VOLUME: number;
/** Vorticity units */
    static VORTICITY: number;
/** Work units */
    static WORK: number;
}

declare class Utils {
/**
 * Decodes an ASCII85 encoded string. See Utils.Ascii85Encode() for details on the method.
 * @param encoded An ASCII85 encoded string
 * @returns ArrayBuffer object
 */
    static Ascii85Decode(encoded: string): ArrayBuffer;

/**
 * Encodes an ASCII85 encoded string. This enables binary data to be represented by ASCII characters using five ASCII characters to represent four bytes of binary data (making the encoded size 1/4 larger than the original). By doing this binary data can be stored in JavaScript strings. Note that the method used by THIS to encode and decode strings differs from the standard ASCII85 encoding as that uses the ASCII characters ", ' and \ which cannot be used in JavaScript strings as they have special meanings. The method in THIS uses 0-84 are !-u (ASCII codes 33-117) (i.e. 33 is added to it) with the following exceptions v is used instead of " (ASCII code 118 instead of 34) w is used instead of ' (ASCII code 119 instead of 39) x is used instead of \ (ASCII code 120 instead of 92) If all five digits are 0 they are represented by a single character z instead of !!!!!
 * @param data ArrayBuffer containing the data
 * @param length Length of data in array buffer to encode. If omitted the whole array buffer will be encoded
 * @returns string
 */
    static Ascii85Encode(data: ArrayBuffer, length?: number): string;

/**
 * Returns the build number
 * @returns integer
 */
    static Build(): number;

/**
 * Manually call any promise handlers/callbacks in the job queue
 */
    static CallPromiseHandlers(): void;

/**
 * Checks a license for a feature back in
 * @param feature feature to check license back in for
 */
    static CheckinLicense(feature: string): void;

/**
 * Checks out a license for a feature
 * @param feature feature to check license for
 * @returns true if license available, false if not
 */
    static CheckoutLicense(feature: string): boolean;

/**
 * Forces garbage collection to be done. This should not normally need to be called but in exceptional circumstances it can be called to ensure that garbage collection is done to return memory.
 */
    static GarbageCollect(): void;

/**
 * Returns the path to the default HTML browser
 * @returns string of the path
 */
    static HTMLBrowser(): string;

/**
 * A high resolution timer that can be used to time how long things take. The first time this is called the timer will start and return 0. Subsequent calls will return the time in nanoseconds since the first call. Note that the timer will almost certainly not have 1 nanosecond precision but, depending on the platform, should should have a resolution of at least 1 microsecond. The resolution can be found by using Utils.TimerResolution()
 * @returns number
 */
    static HiResTimer(): number;

/**
 * Returns the path to the executable of the default pdf reader
 * @returns string of the path
 */
    static PdfReader(): string;

/**
 * Create a SHA-256 hash for a file
 * @param filename File to calculate the hash for
 * @returns string
 */
    static SHA256(filename: string): string;

/**
 * Create a SHA-512 hash for a file
 * @param filename File to calculate the hash for
 * @returns string
 */
    static SHA512(filename: string): string;

/**
 * Terminates the program. Note that this terminates the entire program, not the script. To terminate the script use Exit() instead
 */
    static Terminate(): void;

/**
 * Returns the resolution (precision) of the Utils.HiResTimer() timer in nanoseconds
 * @returns number
 */
    static TimerResolution(): number;

/**
 * Create an UUID (Universally Unique Identifier)
 * @returns string
 */
    static UUID(): string;

/**
 * Returns the version number
 * @returns real
 */
    static Version(): number;

}

declare class Widget {
/**
 * Adds a WidgetItem to a ComboBox ListBox or Radiobutton Widget. Also see Widget.RemoveAllWidgetItems and Widget.RemoveWidgetItem.
 * @param item WidgetItem to add
 * @param position Position on Widget to add the WidgetItem. Any existing WidgetItems will be shifted down as required. If omitted the WidgetItem will be added to the end of the existing ones. Note that positions start at 0.
 */
    AddWidgetItem(item: WidgetItem, position?: number): void;

/**
 * Adds a WidgetItem to a Tree Widget. Also see Widget.RemoveAllWidgetItems and Widget.RemoveWidgetItem.
 * @param item WidgetItem to add
 * @param relationship What relationship (relative to relitem) to use when adding item to the Widget. Can be: Widget.BEFORE, Widget.AFTER or Widget.CHILD.
 * @param relitem Existing WidgetItem to add item relative to. If relationship is Widget.CHILD then relitem can be null and then the WidgetItem will be added to the root node of the tree.
 */
    AddWidgetItem(item: WidgetItem, relationship: number, relitem: WidgetItem): void;

/**
 * Draws a circle on the widget. Only possible for Widget.LABEL and Widget.BUTTON widgets. The coordinates are local to the Widget, not the Window. See properties xResolution and yResolution for more details. Note that the widget graphics will only be updated when the widget is redrawn. This is to allow the user to do multiple drawing commands on a widget. To force the widget to be redrawn call Show().
 * @param colour Colour of circle. See foreground for colours.
 * @param fill If circle should be filled or not.
 * @param xc x coordinate of centre of circle.
 * @param yc y coordinate of centre of circle.
 * @param radius radius of circle.
 */
    Circle(colour: number, fill: boolean, xc: number, yc: number, radius: number): void;

/**
 * Clears any graphics on the widget. Only possible for Widget.LABEL and Widget.BUTTON widgets. Note that the widget graphics will only be updated when the widget is redrawn. This is to allow the user to do multiple drawing commands on a widget. To force the widget to be redrawn call Show().
 */
    Clear(): void;

/**
 * Clears selection of any WidgetItems on the widget. Only possible for Widget.COMBOBOX, Widget.LISTBOX, Widget.RADIOBUTTON and Widget.TREE widgets.
 */
    ClearSelection(): void;

/**
 * Draws a cross symbol on the widget. Only possible for Widget.LABEL and Widget.BUTTON widgets.
 * @param colour Colour of cross symbol. See foreground for colours. If omitted, current foreground colour is used.
 */
    Cross(colour?: number): void;

/**
 * Check to see if the Ctrl key is pressed
 * @returns true/false
 */
    static CtrlPressed(): boolean;

/**
 * Deletes the widget from T/HIS (removing it from the window it is defined in) and returns any memory/resources used for the widget. This function should not normally need to be called. However, sometimes a script may want to recreate widgets in a window many times and unless the old widgets are deleted T/HIS will reach the maximum number of widgets for a window (Options.max_widgets). To avoid this problem this method can be used to force T/HIS to delete and return the resources for a widget. Do not use the Widget object after calling this method.
 */
    Delete(): void;

/**
 * Draws a directory icon on the widget. Only possible for Widget.BUTTON widgets.
 * @param line_colour Colour of lines of folder (only used in the old UI - in the new UI it will be ignored, a standard icon is always used). See foreground for colours.
 * @param fill_colour Colour of fill of folder (only used in the old UI - in the new UI it will be ignored, a standard icon is always used). See foreground for colours.
 */
    DirectoryIcon(line_colour: number, fill_colour: number): void;

/**
 * Dumps a string representation of an image for a widget to a file in a form that can be used by Widget.ReadImageString(). Only possible for Widget.LABEL and Widget.BUTTON widgets.
 * @param filename Filename to dump string representation to
 * @param format Can be Widget.RGB8 or Widget.RGB24. Before version 15 T/HIS only used 8 bits to store RGB (red, green and blue) colour information for widget images. In version 15 widget images have been changed to use 24 bits to store RGB information (8 bits for red, 8 bits for green and 8 bits for blue). Both formats are supported. If omitted the new Widget.RGB24 format will be used. See Widget.ReadImageString() for more details.
 */
    DumpImageString(filename: string, format?: number): void;

/**
 * Hides the widget on the screen
 */
    Hide(): void;

/**
 * Returns the WidgetItem object used at index in this Widget. See also Widget.TotalItems() and Widget.WidgetItems(). Note that for tree Widgets the items will not be returned in the order that they are displayed in, they will be returned in the order they were added to the tree.
 * @param index index to return WidgetItem for. Note that indices start at 0.
 * @returns WidgetItem object.
 */
    ItemAt(index: number): WidgetItem;

/**
 * Draws a line on the widget. Only possible for Widget.LABEL and Widget.BUTTON widgets. The coordinates are local to the Widget, not the Window. See properties xResolution and yResolution for more details. Note that the widget graphics will only be updated when the widget is redrawn. This is to allow the user to do multiple drawing commands on a widget. To force the widget to be redrawn call Show().
 * @param colour Colour of line. See foreground for colours.
 * @param x1 x coordinate of start of line.
 * @param y1 y coordinate of start of line.
 * @param x2 x coordinate of end of line.
 * @param y2 y coordinate of end of line.
 */
    Line(colour: number, x1: number, y1: number, x2: number, y2: number): void;

/**
 * Moves an existing WidgetItem in a tree Widget. Also see Widget.RemoveAllWidgetItems and Widget.RemoveWidgetItem.
 * @param item WidgetItem to move
 * @param relationship What relationship (relative to relitem) to use when moving item to the Widget. Can be: Widget.BEFORE, Widget.AFTER or Widget.AFTER.
 * @param relitem Existing WidgetItem to move item relative to. If relationship is Widget.CHILD then relitem can be null and then the WidgetItem will be moved to the root node of the tree.
 */
    MoveWidgetItem(item: WidgetItem, relationship: number, relitem: WidgetItem | null): void;

/**
 * Returns the number of pixels per unit coordinate. This will vary depending on the monitor T/HIS is running on.
 * @returns pixels/unit (float)
 */
    static PixelsPerUnit(): number;

/**
 * Draws a polygon on the widget. Only possible for Widget.LABEL and Widget.BUTTON widgets. The coordinates are local to the Widget, not the Window. See properties xResolution and yResolution for more details. Note that the widget graphics will only be updated when the widget is redrawn. This is to allow the user to do multiple drawing commands on a widget. To force the widget to be redrawn call Show(). The number of points (x, y pairs) is limited to 500. Any extra points will be ignored.
 * @param colour Colour of polygon. See foreground for colours.
 * @param fill If polygon should be filled or not.
 * @param points Array of point coordinates
 */
    Polygon(colour: number, fill: boolean, points: number[]): void;

/**
 * Reads an image from a file to show on the widget. Only possible for Widget.LABEL and Widget.BUTTON widgets. The image will be shown on the widget underneath any text. Note that due to the way that colours are used for menus in T/HIS only a small number of colours are available for Widget images. Black and white images will display without any issues but colour images will be displayed with a reduced set of colours.
 * @param filename Image file (BMP, GIF, JPEG or PNG) to read. To remove an image use null.
 * @param justify Widget justification. Can be a bitwise or of Widget.LEFT, Widget.RIGHT or Widget.CENTRE and Widget.TOP, Widget.MIDDLE or Widget.BOTTOM. Additionally Widget.SCALE can be used to scale the image (either reducing or enlarging it) so that it fills the widget. If omitted the default is Widget.CENTRE|Widget.MIDDLE without scaling.
 * @param transparent Transparent colour. Must be a colour returned by Colour.RGB() in T/HIS. If given then this colour will be replaced by a transparent colour. i.e. the widget background colour will be shown. If omitted or null no transparency will be used.
 * @param tolerance Tolerance for transparent colour (0-255). Any pixels in the image that have a red, green and blue colour value within tolerance of the transparent colour will be transparent. For example if the transparent colour was given as Colour.RGB(255, 0, 0) and tolerance is 0 only pixels which have red value 255 and green value 0 and blue value 0 will be made transparent. If tolerance is 4, pixels which have red values between 251 and 255 and green values between 0 and 4 and blue values between 0 and 4 will be made transparent. If omitted a value of 8 will be used.
 */
    ReadImageFile(filename: string, justify?: number, transparent?: number, tolerance?: number): void;

/**
 * Reads an image from a JavaScript string previously created by Widget.DumpImageString() to show on the widget. Only possible for Widget.LABEL and Widget.BUTTON widgets. The image will be shown on the widget underneath any text. Note, prior to version 15 of T/HIS only a small number of colours were available for Widget images. In version 14 and earlier the RGB (red, green and blue) information for each pixel in the image was packed into a single byte (8 bits) with 3 bits for red, 3 for green and 2 for blue. Widget.DumpImageString() always returned the string beginning with "RRRGGGBB_RLE" which is this 8 bit format with run length encoding. This is format Widget.RGB8. In version 15 support for Widget images was enhanced to give 24bit support for colours. The RGB information for each pixel has 8 bits for red, 8 bits for green and 8 bits for blue. This is format Widget.RGB24. From version 15 Widget.DumpImageString() can either return the the old 8 bit format Widget.RGB8 (string beginning with "RRRGGGBB_RLE") or return the the new 24bit format Widget.RGB24 (string beginning with "RGB24_Z"). ReadImageString supports both formats.
 * @param string String containing the image data previously created by Widget.DumpImageString(). To remove an image use null.
 * @param justify Widget justification. Can be a bitwise or of Widget.LEFT, Widget.RIGHT or Widget.CENTRE and Widget.TOP, Widget.MIDDLE or Widget.BOTTOM. Additionally Widget.SCALE can be used to scale the image (either reducing or enlarging it) so that it fills the widget. If omitted the default is Widget.CENTRE|Widget.MIDDLE without scaling.
 * @param transparent Transparent colour. Must be a colour returned by Colour.RGB() in T/HIS. If given then this colour will be replaced by a transparent colour. i.e. the widget background colour will be shown. If omitted or null no transparency will be used.
 * @param tolerance Tolerance for transparent colour (0-255). Only used for the new 24bit format Widget.RGB24 (strings beginning with "RGB24_Z"). Ignored for the old 8 bit format Widget.RGB8 (strings beginning with "RRRGGGBB_RLE"). Any pixels in the image that have a red, green and blue colour value within tolerance of the transparent colour will be transparent. For example if the transparent colour was given as Colour.RGB(255, 0, 0) and tolerance is 0 only pixels which have red value 255 and green value 0 and blue value 0 will be made transparent. If tolerance is 4, pixels which have red values between 251 and 255 and green values between 0 and 4 and blue values between 0 and 4 will be made transparent. If omitted a value of 8 will be used.
 */
    ReadImageString(string: string, justify?: number, transparent?: number, tolerance?: number): void;

/**
 * Draws a rectangle on the widget. Only possible for Widget.LABEL and Widget.BUTTON widgets. The coordinates are local to the Widget, not the Window. See properties xResolution and yResolution for more details. Note that the widget graphics will only be updated when the widget is redrawn. This is to allow the user to do multiple drawing commands on a widget. To force the widget to be redrawn call Show().
 * @param colour Colour of rectangle. See foreground for colours.
 * @param fill If rectangle should be filled or not.
 * @param x1 x coordinate of first corner of rectangle.
 * @param y1 y coordinate of first corner of rectangle.
 * @param x2 x coordinate of second (opposite) corner of rectangle.
 * @param y2 y coordinate of second (opposite) corner of rectangle.
 */
    Rectangle(colour: number, fill: boolean, x1: number, y1: number, x2: number, y2: number): void;

/**
 * Removes any WidgetItems from the Widget. Also see Widget.AddWidgetItem and Widget.RemoveWidgetItem.
 */
    RemoveAllWidgetItems(): void;

/**
 * Removes a WidgetItem from the Widget. Also see Widget.AddWidgetItem and Widget.RemoveAllWidgetItems.
 * @param item WidgetItem to remove
 */
    RemoveWidgetItem(item: WidgetItem): void;

/**
 * Scrolls a tree or listbox widget
 * @param scroll How to scroll the tree/listbox widget. Can be: Widget.SCROLL_TOP, Widget.SCROLL_BOTTOM, Widget.SCROLL_UP, Widget.SCROLL_DOWN, Widget.SCROLL_PAGE_UP or Widget.SCROLL_PAGE_DOWN in which case the tree/listbox widget will be scrolled by that value or a WidgetItem, in which case the tree/listbox will be scrolled to make the WidgetItem visible, (expanding any branches as necessary to do so for the tree widget).
 */
    Scroll(scroll: number | WidgetItem): void;

/**
 * Check to see if the Shift key is pressed
 * @returns true/false
 */
    static ShiftPressed(): boolean;

/**
 * Shows the widget on the screen
 */
    Show(): void;

/**
 * Windows have two different regions for Widgets. A 'normal' region which can be scrolled if required (if the window is made smaller scrollbars will be shown which can be used to scroll the contents) and a 'static' region at the top of the Window which is fixed and does not scroll. For an example of a static region in a Window see any of the keyword editing panels. The 'Dismiss', 'Create', 'Reset' etc buttons are in the static region. By default Widgets are put into the normal region of the Window. This method puts the Widget to the static region of the Window.
 */
    Static(): void;

/**
 * Returns the length of a string in Widget units. This can be used to find what size a Widget must be to be able to display the string.
 * @param text Text to find the width of
 * @param monospace If true then width will be calculated using a monospace font. If false (default) then the normal proportional width font will be used
 * @param fontSize Calculation can be based on a defined font size, at the moment support is added only for font sizes of 6, 7, 8, 10, 12, 14, 18 and 24.
 * @returns integer
 */
    static StringLength(text: string, monospace?: boolean, fontSize?: number): number;

/**
 * Draws a tick symbol on the widget. Only possible for Widget.LABEL and Widget.BUTTON widgets.
 * @param colour Colour of tick symbol. See foreground for colours. If omitted, current foreground colour is used.
 */
    Tick(colour?: number): void;

/**
 * Returns the number of the WidgetItem objects used in this Widget (or 0 if none used). See also Widget.ItemAt() and Widget.WidgetItems().
 * @returns integer
 */
    TotalItems(): number;

/**
 * Returns an array of the WidgetItem objects used in this Widget (or null if none used). See also Widget.ItemAt() and Widget.TotalItems().
 * @returns Array of WidgetItem objects
 */
    WidgetItems(): WidgetItem[];

/**
 * Create a new Widget object.
 * @param window Window or PopupWindow that widget will be created in
 * @param type Widget type. Can be Widget.BUTTON, Widget.CHECKBOX, Widget.COMBOBOX, Widget.LABEL, Widget.LISTBOX, Widget.RADIOBUTTON, Widget.SLIDER, Widget.TEXTBOX or Widget.TREE
 * @param left left coordinate of widget
 * @param right right coordinate of widget
 * @param top top coordinate of widget
 * @param bottom bottom coordinate of widget
 * @param text Text to show on widget (optional for LABEL, BUTTON, TEXTBOX and TREE, not required for CHECKBOX, COMBOBOX, LISTBOX, RADIOBUTTON and SLIDER). For a TREE widget the text will be used as a macroTag.
 * @returns Widget object
 */
    constructor(window: Window | PopupWindow, type: number, left: number, right: number, top: number, bottom: number, text?: string);

/** If widget is active (true) or disabled (false) */
    active: boolean;
/** Whether arrows will be shown for a slider (default is true). Slider Widgets only. */
    arrows: boolean;
/** Widget background colour. Can be: Widget.BLACK, Widget.WHITE, Widget.RED, Widget.GREEN, Widget.BLUE, Widget.CYAN, Widget.MAGENTA, Widget.YELLOW, Widget.DARKRED, Widget.DARKGREEN, Widget.DARKBLUE, Widget.GREY, Widget.DARKGREY, Widget.LIGHTGREY, Widget.ORANGE, Widget.DEFAULT, Widget.COLOUR_NEUTRAL, Widget.COLOUR_CONTRAST, Widget.COLOUR_CONTRAST_2, Widget.COLOUR_WARNING, Widget.COLOUR_SAFE, Widget.COLOUR_TITLE, Widget.COLOUR_INVERSE, Widget.DARKGREY_NEUTRAL, Widget.LIGHTGREY_NEUTRAL Widget.COLOUR_LATENT, Note, background colours in the Window.THEME_DARK, Window.THEME_LIGHT, and Window.THEME_CLASSIC themes will be determined by the category of the widget not the background colour. To override this behaviour and use this background colour first set the widget category to Widget.NO_CATEGORY. */
    background: number;
/** Widget bottom coordinate */
    bottom: number;
/** The button category which determines the button's appearance when using the new user interface, see Window.Theme() */
    category: number;
/** The current WidgetItem for a tree Widget. The current WidgetItem in a tree is shown with a dashed border. */
    currentItem: WidgetItem;
/** Widget font size in points. Currently only supports the following sizes: 6, 7, 8, 10, 12, 14, 18, 24. Can be used only with Widget.LABEL and Widget.BUTTON. Both LATIN1 and UTF-8 encoding is supported on Windows but Linux only supports LATIN1 encoding at the moment. */
    fontSize: number;
/** Widget foreground colour. Can be: Widget.BLACK, Widget.WHITE, Widget.RED, Widget.GREEN, Widget.BLUE, Widget.CYAN, Widget.MAGENTA, Widget.YELLOW, Widget.DARKRED, Widget.DARKGREEN, Widget.DARKBLUE, Widget.GREY, Widget.DARKGREY, Widget.LIGHTGREY, Widget.ORANGE, Widget.DEFAULT, Widget.COLOUR_NEUTRAL, Widget.COLOUR_CONTRAST, Widget.COLOUR_CONTRAST_2, Widget.COLOUR_WARNING, Widget.COLOUR_SAFE, Widget.COLOUR_TITLE, Widget.COLOUR_LABEL, Widget.COLOUR_INVERSE, Widget.DARKGREY_NEUTRAL, Widget.LIGHTGREY_NEUTRAL Widget.COLOUR_LATENT, Note, foreground colours in the Window.THEME_DARK, Window.THEME_LIGHT, and Window.THEME_CLASSIC themes will be determined by the category of the widget not the foreground colour. To override this behaviour and use this foreground colour first set the widget category to Widget.NO_CATEGORY. */
    foreground: number;
/** Widget hover text */
    hover: string;
/** Height of widget image (pixels) */
    readonly imageHeight: number;
/** Width of widget image (pixels) */
    readonly imageWidth: number;
/** Widget justification. Can be: Widget.LEFT, Widget.RIGHT or Widget.CENTRE (default). */
    justify: number;
/** Widget left coordinate */
    left: number;
/** Width of lines when drawing graphics (initially 1; values 1-100 allowed). */
    lineWidth: number;
/** Tag to use for this widget when recording a macro. If empty then the text property value will be used. */
    macroTag: string;
/** The maximum value allowed for a slider (default is 100). Slider Widgets only. */
    maximum: number;
/** The minimum value allowed for a slider (default is 0). Slider Widgets only. */
    minimum: number;
/** true if the widget uses a monospace font instead of a proportional width font (default). Label and button Widgets only. */
    monospace: boolean;
/** Function to call when the text in a TEXTBOX widget, the selection in a COMBOBOX widget or the value of a SLIDER is changed. The Widget object is accessible in the function using the 'this' keyword (see the example below for more details of how to define the function and how to use the 'this' keyword). To unset the function set the property to null. Note that this function is called when the user actually types something into the textbox, selects an item in the combobox or moves the slider, NOT when the Widget.text or Widget.value property changes. */
    onChange: () => void;
/** Function to call when a BUTTON, CHECKBOX, COMBOBOX, LABEL, RADIOBUTTON or TREE widget is clicked. The Widget object is accessible in the function using the 'this' keyword (see the example below for more details of how to define the function and how to use the 'this' keyword). To unset the function set the property to null. Note that this function is called when the user actually clicks on the button, NOT when the Widget.pushed property changes. For the COMBOBOX widget the function is called before the list of items is mapped. */
    onClick: () => void;
/** Function to call when a BUTTON, LABEL, TEXTBOX or TREE widget is right clicked to map a popup. The Widget object is accessible in the function using the 'this' keyword. The PopupWindow can then be found by using the popupWindow property of the Widget. The function is called before the popup is mapped so you can change the widgets in the popup as required. */
    onPopup: () => void;
/** Function to call for a widget when timerDelay ms have elapsed after setting this. Additionally if timerRepeat is set this function will be called repetitively, every timerDelay ms. The Widget object is accessible in the function using the 'this' keyword. To unset the function set the property to null. Note that as soon as this property is set the timer starts! */
    onTimer: () => void;
/** The orientation of a slider. Can be: Widget.VERTICAL or Widget.HORIZONTAL (default). Slider Widgets only. */
    orientation: number;
/** How PopupWindow will be mapped relative to this widget. Can be Widget.LEFT, Widget.RIGHT, Widget.TOP or Widget.BOTTOM (default). For tree widgets this will be ignored as the popup is always shown on the WidgetItem that is right clicked. */
    popupDirection: number;
/** TRUE (default) if a symbol will be shown for a PopupWindow. */
    popupSymbol: boolean;
/** PopupWindow for this Widget. Only available for Button, Label and Textbox Widgets. To remove a PopupWindow from a Widget set to null. */
    popupWindow: PopupWindow;
/** If widget is pushed (true) or not (false). This only affects Widget.BUTTON with the Widget.toggle property set, and Widget.CHECKBOX widgets. */
    pushed: boolean;
/** Widget right coordinate */
    right: number;
/** Selection method for ListBox and tree Widgets. Can be: Widget.SELECT_NONE, Widget.SELECT_SINGLE or Widget.SELECT_MULTIPLE or Widget.SELECT_ENHANCED (default). */
    select: number;
/** WidgetItem that is currently selected for a ComboBox or Radiobutton, Widget. If null no WidgetItem is selected. For a ListBox Widget this property contains the last WidgetItem that was (de)selected. To get a list of all of the selected WidgetItems use WidgetItems() to return all of the WidgetItems and inspect the WidgetItem selected property. */
    selectedItem: WidgetItem;
/** true if the widget is visible. To alter the visibility of a widget use the Show() and Hide() methods. */
    readonly shown: boolean;
/** The step value of a slider (default is 1). Slider Widgets only. */
    step: number;
/** Widget text. For a ComboBox Widget this will be the text for the currently selected WidgetItem */
    text: string;
/** true if the widget text is hidden and replaced by asterisks. This may be used to create textboxes to type passwords in. TextBox Widgets only. */
    textHidden: boolean;
/** Delay in ms before the function set for onTimer will be called. The initial value is 1000 (ms). Also see timerRepeat. */
    timerDelay: number;
/** If the function set for onTimer will be called once (false) or repeatedly (true). The initial value is false. Also see timerDelay. */
    timerRepeat: boolean;
/** If widget can be toggled (true) or not (false). This only affects Widget.BUTTON widgets. */
    toggle: boolean;
/** Widget top coordinate */
    top: number;
/** Type of the widget. The widget type could be Widget.BUTTON, Widget.CHECKBOX, Widget.COMBOBOX, Widget.LABEL, Widget.LISTBOX, Widget.RADIOBUTTON, Widget.SLIDER, Widget.TEXTBOX or Widget.TREE */
    readonly type: number;
/** The current value of a slider (initially will be the minimum value). Slider Widgets only. */
    value: number;
/** The Window that this widget is defined in */
    readonly window: Window;
/** X resolution of button when drawing lines, circles, polygons and rectangles (initially 100). X coordinates on the Widget can be from 0 (on the left of the widget) to xResolution (on the right of the widget). Available for Widget.LABEL and Widget.BUTTON Widgets. */
    xResolution: number;
/** Y resolution of button when drawing lines, circles, polygons and rectangles (initially 100). Y coordinates on the Widget can be from 0 (on the top of the widget) to yResolution (on the bottom of the widget). Available for Widget.LABEL and Widget.BUTTON Widgets. */
    yResolution: number;
/** Add a WidgetItem after the existing WidgetItem for a tree widget. */
    static AFTER: number;
/** Add a WidgetItem before the existing WidgetItem for a tree widget. */
    static BEFORE: number;
/** Colour black */
    static BLACK: number;
/** Colour blue */
    static BLUE: number;
/** Bottom justification */
    static BOTTOM: number;
/** Button widget */
    static BUTTON: number;
/** Apply buttons */
    static CATEGORY_APPLY: number;
/** A button box panel that contains other widgets */
    static CATEGORY_BUTTON_BOX: number;
/** Buttons which cancel the current operation */
    static CATEGORY_CANCEL: number;
/** Header for data entry cells, e.g. PRIMER create panels */
    static CATEGORY_DATA_ENTRY_HEADER: number;
/** Buttons to close or dismiss panels */
    static CATEGORY_DISMISS: number;
/** Entity types in T/HIS */
    static CATEGORY_ENTITY: number;
/** A generic button that isn't a special category */
    static CATEGORY_GENERIC: number;
/** An alternative to the generic category that has a complementary colour */
    static CATEGORY_GENERIC_2: number;
/** Help buttons */
    static CATEGORY_HELP: number;
/** A PRIMER keyword button */
    static CATEGORY_KEYWORD: number;
/** A text label */
    static CATEGORY_LABEL: number;
/** Text label with a border */
    static CATEGORY_LABEL_BOX: number;
/** Text label with a popup that blends into the background */
    static CATEGORY_LABEL_POPUP: number;
/** A menu box */
    static CATEGORY_MENU_BOX: number;
/** For displaying a temporary warning message */
    static CATEGORY_MESSAGE: number;
/** Operate buttons in T/HIS */
    static CATEGORY_OPERATE: number;
/** A popup box that can contain buttons and plain text */
    static CATEGORY_POPUP_BOX: number;
/** Buttons (usually green) to indicate a safe action */
    static CATEGORY_SAFE_ACTION: number;
/** Select all */
    static CATEGORY_SEL_ALL: number;
/** Tab */
    static CATEGORY_TAB: number;
/** Table (column) header */
    static CATEGORY_TABLE_HEADER: number;
/** Table row */
    static CATEGORY_TABLE_ROW: number;
/** A text box */
    static CATEGORY_TEXT_BOX: number;
/** A tick box */
    static CATEGORY_TICKBOX: number;
/** Title text */
    static CATEGORY_TITLE: number;
/** Buttons that can be toggled, e.g. On/Off */
    static CATEGORY_TOGGLE: number;
/** Buttons within the tools area */
    static CATEGORY_TOOL: number;
/** Buttons which undo the last operation */
    static CATEGORY_UNDO: number;
/** Unselect/deslect all */
    static CATEGORY_UNSEL_ALL: number;
/** Update buttons which update the screen but leave the panel open */
    static CATEGORY_UPDATE: number;
/** Buttons (usually red) to indicate a dangerous action */
    static CATEGORY_WARNING_ACTION: number;
/** Centre (horizontal) justification */
    static CENTRE: number;
/** Checkbox widget */
    static CHECKBOX: number;
/** Add a WidgetItem as a child of the existing WidgetItem for a tree widget. */
    static CHILD: number;
/** A contrasting colour in the 3 user interface themes (Green, Purple, and Blue in the Dark, Light, and Classic themes respectively). Blue in the legacy theme. */
    static COLOUR_CONTRAST: number;
/** Another contrasting colour in the 3 user interface themes (Yellow, Red, and Red in the Dark, Light, and Classic themes respectively). Red in the legacy theme. */
    static COLOUR_CONTRAST_2: number;
/** Inverse colour in the 3 user interface themes (Black or white depending on theme). Black in the legacy theme. */
    static COLOUR_INVERSE: number;
/** Label text colour in the 3 user interface themes (Black or white depending on theme). Black in the legacy theme. */
    static COLOUR_LABEL: number;
/** Latent colour in the 3 user interface themes (Different shade of Cyan in every theme). Light Cyan in the legacy theme. */
    static COLOUR_LATENT: number;
/** Neutral colour in the 3 user interface themes (Different shade of grey in every theme). Light grey in the legacy theme. */
    static COLOUR_NEUTRAL: number;
/** Safe colour in the 3 user interface themes (Different shade of green in every theme). Dark green in the legacy theme. */
    static COLOUR_SAFE: number;
/** Title colour in the 3 user interface themes (Different shade of grey in every theme). Dark blue in the legacy theme. */
    static COLOUR_TITLE: number;
/** Warning colour in the 3 user interface themes (Different shade of red in every theme). Dark red in the legacy theme. */
    static COLOUR_WARNING: number;
/** Combobox widget */
    static COMBOBOX: number;
/** Colour cyan */
    static CYAN: number;
/** Colour dark blue */
    static DARKBLUE: number;
/** Colour dark green */
    static DARKGREEN: number;
/** Colour dark grey */
    static DARKGREY: number;
/** Only valid in the function 'Line'. Used to keep the 3D effect in the legacy theme and not in the other themes. Neutral colour in the 3 user interface themes (Different shade of grey in every theme). Dark grey in the legacy theme */
    static DARKGREY_NEUTRAL: number;
/** Colour dark red */
    static DARKRED: number;
/** Default colour for widgets */
    static DEFAULT: number;
/** Colour green */
    static GREEN: number;
/** Colour grey */
    static GREY: number;
/** Horizontal orientation (for sliders) */
    static HORIZONTAL: number;
/** Label widget */
    static LABEL: number;
/** Left justification */
    static LEFT: number;
/** Colour light grey */
    static LIGHTGREY: number;
/** Only valid in the function 'Line'. Used to keep the 3D effect in the legacy theme and not in the other themes. Neutral colour in the 3 user interface themes (Different shade of grey in every theme). Light grey in the legacy theme */
    static LIGHTGREY_NEUTRAL: number;
/** Listbox widget */
    static LISTBOX: number;
/** Colour magenta */
    static MAGENTA: number;
/** Middle (vertical) justification */
    static MIDDLE: number;
/** No styling is applied. Widget colour controlled by foreground/background properties and is the same in all themes */
    static NO_CATEGORY: number;
/** Colour orange */
    static ORANGE: number;
/** Radiobutton widget */
    static RADIOBUTTON: number;
/** Colour red */
    static RED: number;
/** 24 bits for RGB data in widget images */
    static RGB24: number;
/** 8 bits for RGB data in widget images */
    static RGB8: number;
/** Right justification */
    static RIGHT: number;
/** Image will be scaled to fit widget */
    static SCALE: number;
/** Scroll tree or listbox widget to bottom. */
    static SCROLL_BOTTOM: number;
/** Scroll tree or listbox widget down one. */
    static SCROLL_DOWN: number;
/** Scroll tree or listbox widget down one page. */
    static SCROLL_PAGE_DOWN: number;
/** Scroll tree or listbox widget up one page. */
    static SCROLL_PAGE_UP: number;
/** Scroll tree or listbox widget to top. */
    static SCROLL_TOP: number;
/** Scroll tree or listbox widget up one. */
    static SCROLL_UP: number;
/** Multiple WidgetItems in a ListBox or tree Widget can be selected. When the user selects a WidgetItem the selection is cleared and the new WidgetItem selected. However, if the user presses the Ctrl key when clicking on a WidgetItem, the clicked WidgetItem gets toggled and all other WidgetItems are left untouched. If the user presses the Shift key while clicking on a WidgetItem, all WidgetItems between the last selected WidgetItem and the clicked WidgetItem are selected or unselected, depending on the state of the clicked WidgetItem. */
    static SELECT_ENHANCED: number;
/** Multiple WidgetItems in a ListBox Widget can be selected. When the user selects a WidgetItem, the selection status of that WidgetItem is toggled and the other WidgetItems are left alone. Not valid for tree widgets. Widget.SELECT_ENHANCED will be used. */
    static SELECT_MULTIPLE: number;
/** No WidgetItem in a ListBox or tree Widget can be selected */
    static SELECT_NONE: number;
/** A single WidgetItem in a ListBox or tree Widget can be selected. When the user selects a WidgetItem, any already-selected WidgetItem becomes unselected, and the user cannot unselect the selected WidgetItem by clicking on it. */
    static SELECT_SINGLE: number;
/** Slider widget */
    static SLIDER: number;
/** Text input widget */
    static TEXTBOX: number;
/** Top justification */
    static TOP: number;
/** Tree widget */
    static TREE: number;
/** Vertical orientation (for sliders) */
    static VERTICAL: number;
/** Colour white */
    static WHITE: number;
/** Colour yellow */
    static YELLOW: number;
}

declare class WidgetItem {
/**
 * Returns the first child WidgetItem or null if the WidgetItem has no children. Only possible for WidgetItems used in Widget.TREE widgets.
 * @returns WidgetItem object
 */
    FirstChild(): WidgetItem;

/**
 * Returns the next sibling WidgetItem or null if the WidgetItem has no further siblings. Only possible for WidgetItems used in Widget.TREE widgets.
 * @returns WidgetItem object
 */
    NextSibling(): WidgetItem;

/**
 * Returns the parent WidgetItem or null if the WidgetItem has no parent. Only possible for WidgetItems used in Widget.TREE widgets.
 * @returns WidgetItem object
 */
    Parent(): WidgetItem;

/**
 * Returns the next sibling WidgetItem or null if the WidgetItem has no further siblings. Only possible for WidgetItems used in Widget.TREE widgets.
 * @returns WidgetItem object
 */
    PreviousSibling(): WidgetItem;

/**
 * Create a new WidgetItem object for a combobox, listbox or radio button widget.
 * @param widget Combobox, listbox or radio button Widget that the widget item will be created in. This can be null in which case the WidgetItem will be created but not assigned to a Widget. It can be assigned later by using Widget.AddWidgetItem().
 * @param text Text to show on widget item
 * @param selectable If the widget item can be selected. If omitted the widget item will be selectable. Not used for RADIOBUTTON and TREE widgets.
 * @returns WidgetItem object
 */
    constructor(widget: Widget, text: string, selectable?: boolean);

/**
 * Create a new WidgetItem object for a tree widget. If the widget argument is given and the relationship and relitem arguments are omitted then the widget item will be added as a root node in the tree. If the relationship and relitem arguments are also used then the item can be added at a specific location in the tree. Alternatively, the widget argument can be null, and the relationship and relitem arguments omitted, in which case the WidgetItem will be created but not assigned to a Widget. It can be assigned to the tree later using Widget.AddWidgetItem()
 * @param widget Tree Widget that the widget item will be created in or null (if the relationship and relitem arguments are omitted)
 * @param text Text to show on widget item
 * @param relationship What relationship (relative to relitem) to use when adding item to the Widget. Can be: Widget.BEFORE, Widget.AFTER or Widget.CHILD.
 * @param relitem Existing WidgetItem to add item relative to
 * @returns WidgetItem object
 */
    constructor(widget: Widget, text: string, relationship?: number, relitem?: WidgetItem);

/** Widget background colour. Not used for RADIOBUTTON widgets. Can be: Widget.BLACK, Widget.WHITE, Widget.RED, Widget.GREEN, Widget.BLUE, Widget.CYAN, Widget.MAGENTA, Widget.YELLOW, Widget.DARKRED, Widget.DARKGREEN, Widget.DARKBLUE, Widget.GREY, Widget.DARKGREY, Widget.LIGHTGREY or Widget.DEFAULT */
    background: number;
/** If the widget item is expanded (true) or not (false) in a tree. Only available for widgetitems used in TREE widgets. */
    expanded: boolean;
/** Widget foreground colour. Not used for RADIOBUTTON widgets. Can be: Widget.BLACK, Widget.WHITE, Widget.RED, Widget.GREEN, Widget.BLUE, Widget.CYAN, Widget.MAGENTA, Widget.YELLOW, Widget.DARKRED, Widget.DARKGREEN, Widget.DARKBLUE, Widget.GREY, Widget.DARKGREY, Widget.LIGHTGREY or Widget.DEFAULT */
    foreground: number;
/** WidgetItem's hover text. Not used for RADIOBUTTON widgets. */
    hover: string;
/** The index of this widgetitem in the parent widget (undefined if widgetitem is not assigned to a widget). */
    readonly index: number;
/** true if the widgetitem uses a monospace font instead of a proportional width font (default). Not used for RADIOBUTTON and TREE widgets. */
    monospace: boolean;
/** Function to call when a widget item in a COMBOBOX, LISTBOX or TREE widget is clicked. The Widgetitem object is accessible in the function using the 'this' keyword. */
    onClick: () => void;
/** Function to call when the mouse moves over a widget item in a COMBOBOX, LISTBOX or TREE widget. The Widgetitem object is accessible in the function using the 'this' keyword. */
    onMouseOver: () => void;
/** If the widget item can be selected (true) or not (false). Not used for RADIOBUTTON and TREE widgets. */
    selectable: boolean;
/** If the widget item is selected (true) or not (false). */
    selected: boolean;
/** Widget text. If the WidgetItem is used in a tree widget then the tree will not automatically redraw (this is in case you want to change lots of tree nodes at once). In this case, use the Window Redraw method to redraw the window. */
    text: string;
/** If the widget item is visible (true) or not (false) in a tree. A widgetitem will not be visible if it is a child of a widgetitem that is not expanded. Only available for widgetitems used in TREE widgets. */
    visible: boolean;
/** The widget that this item is defined for (null if not set) */
    readonly widget: Widget;
}

declare class Window {
/**
 * Returns the vertical position of the bottom border (in range 0-1). This can be used to help position windows on the screen.
 * @returns float in range 0-1
 */
    static BottomBorder(): number;

/**
 * Builds a GUI from a JSON string created by the GUI builder.
 * @param guistring The string to create the GUI from
 * @returns object containing the GUI
 */
    static BuildGUIFromString(guistring: string): object;

/**
 * Deletes the window from T/HIS and returns any memory/resources used for the window. This function should not normally need to be called. However, in exceptional circumstances if a script recreates windows many times T/HIS may run out of USER objects on Microsoft Windows because of the way T/HIS creates and shows windows. To avoid this problem this method can be used to force T/HIS to return the resources for a window. Do not use the Window object after calling this method.
 */
    Delete(): void;

/**
 * Ends an event loop started by Window.StartLoop()
 */
    static EndLoop(): void;

/**
 * Show an error message in a window.
 * @param title Title for window.
 * @param error Error message to show in window. The maximum number of lines that can be shown is controlled by the Options.max_window_lines option.
 * @param buttons The buttons to use. Can be bitwise OR of Window.OK, Window.CANCEL, Window.YES or Window.NO. If this is omitted an OK button will be used. By default the window will be modal. If Window.NONMODAL is also given the window will be non-modal instead.
 * @returns Button pressed
 */
    static Error(title: string, error: string, buttons?: number): number;

/**
 * Map the directory selector box native to your machine, allowing you to choose a directory. On Unix this will be a Motif selector. Windows will use the standard windows directory selector.
 * @param initial Initial directory to start from.
 * @returns directory (string), (or null if cancel pressed).
 */
    static GetDirectory(initial?: string): string;

/**
 * Map a file selector box allowing you to choose a file. See also Window.GetFiles() and Window.GetFilename().
 * @param extension Extension to filter by.
 * @param save If true the file selector is to be used for saving a file. If false (default) the file selector is for opening a file. Due to native operating system file selector differences, on linux new filenames can only be given when saving a file. On windows it is possible to give new filenames when opening or saving a file.
 * @param initial Initial directory to start from.
 * @returns filename (string), (or null if cancel pressed).
 */
    static GetFile(extension?: string, save?: boolean, initial?: string): string;

/**
 * Map a window allowing you to input a filename (or select it using a file selector). OK and Cancel buttons are shown. See also Window.GetFile().
 * @param title Title for window.
 * @param message Message to show in window.
 * @param extension Extension to filter by.
 * @param initial Initial value.
 * @param save If true the file selector is to be used for saving a file. If false (default) the file selector is for opening a file. Due to native operating system file selector differences, on linux new filenames can only be given when saving a file. On windows it is possible to give new filenames when opening or saving a file.
 * @returns filename (string), (or null if cancel pressed).
 */
    static GetFilename(title: string, message: string, extension?: string, initial?: string, save?: boolean): string;

/**
 * Map a file selector box allowing you to choose multiple files. See also Window.GetFile() and Window.GetFilename().
 * @param extension Extension to filter by.
 * @returns Array of filenames (strings), or null if cancel pressed.
 */
    static GetFiles(extension?: string): string[];

/**
 * Map a window allowing you to input an integer. OK and Cancel buttons are shown.
 * @param title Title for window.
 * @param message Message to show in window.
 * @param initial Initial value.
 * @returns value input (integer), or null if cancel pressed.
 */
    static GetInteger(title: string, message: string, initial?: number): number;

/**
 * Map a window allowing you to input a number. OK and Cancel buttons are shown.
 * @param title Title for window.
 * @param message Message to show in window.
 * @param initial Initial value.
 * @returns value input (float), or null if cancel pressed.
 */
    static GetNumber(title: string, message: string, initial?: number): number;

/**
 * Map a window allowing you to input a password. OK and Cancel buttons are shown. This is identical to Window.GetString except the string is hidden and no initial value can be given.
 * @param title Title for window.
 * @param message Message to show in window.
 * @returns value input (string), or null if cancel pressed.
 */
    static GetPassword(title: string, message: string): string;

/**
 * Map a window allowing you to input a string. OK and Cancel buttons are shown.
 * @param title Title for window.
 * @param message Message to show in window.
 * @param initial Initial value.
 * @returns value input (string), or null if cancel pressed.
 */
    static GetString(title: string, message: string, initial?: string): string;

/**
 * Hides (unmaps) the window. Also see the Window onHide property.
 */
    Hide(): void;

/**
 * Show information in a window.
 * @param title Title for window.
 * @param info Information to show in window. The maximum number of lines that can be shown is controlled by the Options.max_window_lines option.
 * @param buttons The buttons to use. Can be bitwise OR of Window.OK, Window.CANCEL, Window.YES or Window.NO. If this is omitted an OK button will be used. By default the window will be modal. If Window.NONMODAL is also given the window will be non-modal instead.
 * @returns Button pressed
 */
    static Information(title: string, info: string, buttons?: number): number;

/**
 * Returns the resolution of the master programme window in pixels
 * @returns Array of numbers containing x and y resolution in pixels
 */
    static MasterResolution(): number[];

/**
 * Show a message in a window.
 * @param title Title for window.
 * @param message Message to show in window. The maximum number of lines that can be shown is controlled by the Options.max_window_lines option.
 * @param buttons The buttons to use. Can be bitwise OR of Window.OK, Window.CANCEL, Window.YES or Window.NO. If this is omitted an OK button will be used By default the window will be modal. If Window.NONMODAL is also given the window will be non-modal instead.
 * @returns Button pressed
 */
    static Message(title: string, message: string, buttons?: number): number;

/**
 * Returns the vertical position of the middle border (in range 0-1). The middle border is the border between the tools/keywords window and the docked windows. This can be used to help position windows on the screen.
 * @returns float in range 0-1
 */
    static MiddleBorder(): number;

/**
 * Show a question in a window.
 * @param title Title for window.
 * @param question Question to show in window. The maximum number of lines that can be shown is controlled by the Options.max_window_lines option.
 * @param buttons The buttons to use. Can be bitwise OR of Window.OK, Window.CANCEL, Window.YES or Window.NO. If this is omitted Yes and No button will be used. By default the window will be modal. If Window.NONMODAL is also given the window will be non-modal instead.
 * @returns Button pressed
 */
    static Question(title: string, question: string, buttons?: number): number;

/**
 * Recomputes the positions of widgets in the window. If you have static widgets and 'normal' widgets in a window and you show and/or hide widgets the window needs to be recomputed to refresh the graphics, scroll bars etc. Calling this method will recompute and redraw the window.
 */
    Recompute(): void;

/**
 * Redraws the window. Sometimes if you show, hide or draw graphics on widgets the window needs to be redrawn to refresh the graphics. Calling this method will redraw the window refreshing the graphics.
 */
    Redraw(): void;

/**
 * Returns the horizontal position of the right border (in range 0-1). This can be used to help position windows on the screen.
 * @returns float in range 0-1
 */
    static RightBorder(): number;

/**
 * Shows (maps) the window and waits for user input.
 * @param modal If this window is modal (true) then the user is blocked from doing anything else in T/HIS until this window is dismissed). If non-modal (false) then the user can still use other functions in T/HIS. If omitted the window will be modal. Note that making a window modal will stop interaction in all other windows and may prevent operations such as picking from working in any macros that are run from scripts. Before version 21 T/HIS would create a blocking event loop when the Window Show method was called (the call to the Window Show method would not return until the window was hidden again). In T/HIS version 21 the logic has been changed so that Window Show maps the window and returns straight away. The window is managed from the main event loop in T/HIS. In most cases this will make no differences to scripts but there may be rare cases where you specifically want the blocking behaviour. In this case use Window.StartLoop().
 */
    Show(modal?: boolean): void;

/**
 * Starts a blocking event loop in T/HIS. Before version 21 T/HIS would create a blocking event loop when the Window Show method was called (the call to the Window Show method would not return until the window was hidden again). In T/HIS version 21 the logic has been changed so that Window Show maps the window and returns straight away. The window is managed from the main event loop in T/HIS. In most cases this will make no differences to scripts but there may be rare cases where you specifically want the blocking behaviour. An example of this is using a keyout hook script, or if you want to give aprompt/question similarly to Window.Message() where you do not want to return to the main event loop. You want to block until the user has specified the action. Window.StartLoop() can be used to start a local blocking, event loop. To terminate the event loop and resume execution of the script use Window.EndLoop() Note that only a single loop can be active in T/HIS at any one time. i.e. they cannot be nested. Window.StartLoop() should be used as sparingly as possible and only used for specific short events (e.g. something like the equivalent of Window.Message() where you really do need to block) as if it is used in one script it will prevent it from being used in another script.
 */
    static StartLoop(): void;

/**
 * Set or get a user interface theme.
 * @param theme If it is provided it is used to set the current theme. Can be either Window.USE_OLD_UI_JS, Window.THEME_CURRENT, Window.THEME_DARK, Window.THEME_LIGHT, Window.THEME_CLASSIC.
 * @returns Integer. When getting the theme one of: Window.USE_OLD_UI_JS, Window.THEME_DARK, Window.THEME_LIGHT, Window.THEME_CLASSIC
 */
    static Theme(theme?: number): number;

/**
 * Returns the vertical position of the top border (in range 0-1). This can be used to help position windows on the screen. This is no longer used in T/HIS and will always be 1 but is left for backwards compatibility.
 * @returns float in range 0-1
 */
    static TopBorder(): number;

/**
 * Force GUI to be updated. This function is not normally needed but if you are doing a computationally expensive operation and want to update the GUI it may be necessary as the GUI update requests are cached until there is spare time to update them. Calling this function forces any outstanding requests to be flushed.
 */
    static UpdateGUI(): void;

/**
 * Show a warning message in a window.
 * @param title Title for window.
 * @param warning Warning message to show in window. The maximum number of lines that can be shown is controlled by the Options.max_window_lines option.
 * @param buttons The buttons to use. Can be bitwise OR of Window.OK, Window.CANCEL, Window.YES or Window.NO. If this is omitted an OK button will be used. By default the window will be modal. If Window.NONMODAL is also given the window will be non-modal instead.
 * @returns Button pressed
 */
    static Warning(title: string, warning: string, buttons?: number): number;

/**
 * Create a new Window object.
 * @param title Window title to show in title bar
 * @param left left coordinate of window in range 0.0 (left) to 1.0 (right)
 * @param right right coordinate of window in range 0.0 (left) to 1.0 (right)
 * @param bottom bottom coordinate of window in range 0.0 (bottom) to 1.0 (top)
 * @param top top coordinate of window in range 0.0 (bottom) to 1.0 (top)
 * @returns Window object
 */
    constructor(title: string, left: number, right: number, bottom: number, top: number);

/** If true (default) then the window then the window is active and widgets in the window can be used. If false then the window is inactive and the widgets cannot be used. */
    active: boolean;
/** Window background colour. Can be: Widget.BLACK, Widget.WHITE, Widget.RED, Widget.GREEN, Widget.BLUE, Widget.CYAN, Widget.MAGENTA, Widget.YELLOW, Widget.DARKRED, Widget.DARKGREEN, Widget.DARKBLUE, Widget.GREY, Widget.DARKGREY, Widget.LIGHTGREY or Widget.DEFAULT */
    background: number;
/** bottom coordinate of window in range 0.0 (bottom) to 1.0 (top) */
    bottom: number;
/** height of window */
    height: number;
/** If true then the window will be kept "on top" of other windows. If false (default) then the window stacking order can be changed. */
    keepOnTop: boolean;
/** left coordinate of window in range 0.0 (left) to 1.0 (right) */
    left: number;
/** The maximum number of widgets that can be made in this window. This can be changed before the window is created by using Options.max_widgets. Also see totalWidgets */
    readonly maxWidgets: number;
/** Function to call after a Window is shown. The Window object is accessible in the function using the 'this' keyword. This may be useful to ensure that certain actions are done after the window is shown. It can also be used to show another window so this enables multiple windows to be shown. To unset the function set the property to null. */
    onAfterShow: () => void;
/** Function to call before a Window is shown. The Window object is accessible in the function using the 'this' keyword. This may be useful to ensure that buttons are shown/hidden etc before the window is shown. Note that it cannot be used to show another window. Use onAfterShow for that. To unset the function set the property to null. */
    onBeforeShow: () => void;
/** Function to call when a Window is closed by pressing the X on the top right of the window. This may be useful to ensure that certain actions are done when the window is closed. The Window object is accessible in the function using the 'this' keyword. If this function returns false then closing the window will be cancelled. Returning any other value (or not returning anything) will be ignored and the window will close. To unset the function set the property to null. */
    onClose: () => void;
/** Function to call when a Window is hidden by calling Hide(). This may be useful to ensure that certain actions are done after the window is hidden. The Window object is accessible in the function using the 'this' keyword. To unset the function set the property to null. */
    onHide: () => void;
/** Window resizing. By default when a Window is shown it is allowed to resize on all sides (left, right, top and bottom) to try to make enough room to show the Widgets. The behaviour can be changed by using this property. It can be any combination (bitwise OR) of Window.LEFT, Window.RIGHT, Window.TOP or Window.BOTTOM or 0. In addition Window.REDUCE can also be added to allow the window to reduce in size when resizing. Note that when Window.Show is called this property is set to 0 (i.e. not to resize on any side). */
    resize: number;
/** right coordinate of window in range 0.0 (left) to 1.0 (right) */
    right: number;
/** If true (default) then a close (X) button will automatically be added on the top right of the window. If false then no close button will be shown. */
    showClose: boolean;
/** true if window is currently shown, false if not */
    readonly shown: boolean;
/** Window title */
    title: string;
/** top coordinate of window in range 0.0 (bottom) to 1.0 (top) */
    top: number;
/** The total number of widgets that have been made in this window. This can be changed before the window is created by using Options.max_widgets. Also see maxWidgets */
    readonly totalWidgets: number;
/** width of window */
    width: number;
/** Bottom resizing/positioning of window */
    static BOTTOM: number;
/** Show CANCEL button */
    static CANCEL: number;
/** Centre (horizontal) positioning of window */
    static CENTRE: number;
/** Left resizing/positioning of window */
    static LEFT: number;
/** Middle (vertical) positioning of window */
    static MIDDLE: number;
/** Show NO button */
    static NO: number;
/** Allow Window.Error, Window.Question, Window.Warning etc windows to be non modal */
    static NONMODAL: number;
/** Show OK button */
    static OK: number;
/** Window is allowed to reduce in size when resizing */
    static REDUCE: number;
/** Right resizing/positioning of window */
    static RIGHT: number;
/** Use the Classic theme (Note: Not only the script will use this theme, the whole interface of the program will switch to classic) */
    static THEME_CLASSIC: number;
/** Use the current theme */
    static THEME_CURRENT: number;
/** Use the Dark theme (Note: Not only the script will use this theme, the whole interface of the program will switch to dark) */
    static THEME_DARK: number;
/** Use the Light theme (Note: Not only the script will use this theme, the whole interface of the program will switch to light) */
    static THEME_LIGHT: number;
/** Top resizing/positioning of window */
    static TOP: number;
/** Use the original, pre v17, theme (default). (Note:The interface of the program will NOT switch to old) */
    static USE_OLD_UI_JS: number;
/** Show YES button */
    static YES: number;
}


/** Object returned by GetWorkflowDataFromPath */
interface GetWorkflowDataFromPathReturn {
    /** User data as an object */
    data: object;
    /** Model unit system associated with the user data */
    model_unit_system: number;
    /** Filename where workflow data was read from */
    workflow_data_filename: string;
    /** Workflow definition filename */
    workflow_definition: string;
    /** Workflow name */
    workflow_name: string;
}


/** Object function argument in WriteToFile */
interface WriteToFileArgument_extra {
    /** The model unit system. Can be Workflow.UNIT_SYSTEM_NONE or Workflow.UNIT_SYSTEM_U1 or Workflow.UNIT_SYSTEM_U2 or Workflow.UNIT_SYSTEM_U3 or Workflow.UNIT_SYSTEM_U4 or Workflow.UNIT_SYSTEM_U5 or Workflow.UNIT_SYSTEM_U6 */
    model_unit_system?: number;
}

declare class Workflow {
/**
 * Returns user data in the specified folder. This will first search for user data in *.json files in the specified folder and upwards in parent folders if there is no user data in the specified folder. The number of folders it will search is controlled by the preference oasys*workflow_max_upward_folder_search_depth. Additionally, if the preference oasys*workflow_user_directory_name is defined it will search in the folder with that name too in the specified folder and parent folders. Secondly, it will search for user data in keyword files in the specified folder.
 * @param folder The folder to search for user data.
 * @param workflow_name The workflow name to return the user data for. If not specified it will return user data for all the workflows found.
 */
    static GetWorkflowDataFromPath(folder: string, workflow_name?: string): GetWorkflowDataFromPathReturn[];

/**
 * Returns the id of a model selected by the user by index (starting at 0).
 * @param model_index The index of the model to return the ID for. If the workflow is run from the workflow menu and the name argument is not defined, it is the index in the list of models selected by the user. If the workflow is run from the workflow menu and the name argument is defined, it is the index of the model that has user data for the named workflow, out of the list of models selected by the user. If the workflow is run from REPORTER, it is the index in the list of all the models loaded in the session that have user data for the named workflow.
 * @param workflow_name The workflow name to return the model id for. If it is not specified it uses the name of the workflow selected by the user from the workflow menu.
 * @returns integer
 */
    static ModelIdFromIndex(model_index: number, workflow_name?: string): number;

/**
 * Returns the unit system of a model selected by the user by index (starting at 0). Will be Workflow.UNIT_SYSTEM_NONE or Workflow.UNIT_SYSTEM_U1 or Workflow.UNIT_SYSTEM_U2 or Workflow.UNIT_SYSTEM_U3 or Workflow.UNIT_SYSTEM_U4 or Workflow.UNIT_SYSTEM_U5 or Workflow.UNIT_SYSTEM_U6
 * @param model_index The index of the model to return the unit system for. If the workflow is run from the workflow menu and the name argument is not defined, it is the index in the list of models selected by the user. If the workflow is run from the workflow menu and the name argument is defined, it is the index of the model that has user data for the named workflow, out of the list of models selected by the user. If the workflow is run from REPORTER, it is the index in the list of all the models loaded in the session that have user data for the named workflow.
 * @param workflow_name The workflow name to return the unit system for.
 * @returns integer
 */
    static ModelUnitSystemFromIndex(model_index: number, workflow_name?: string): number;

/**
 * Returns the build number of the program that was used to write out the user data of a model for the selected workflow by index (starting at 0).
 * @param model_index The index of the model to return the build number for. If the workflow is run from the workflow menu and the name argument is not defined, it is the index in the list of models selected by the user. If the workflow is run from the workflow menu and the name argument is defined, it is the index of the model that has user data for the named workflow, out of the list of models selected by the user. If the workflow is run from REPORTER, it is the index in the list of all the models loaded in the session that have user data for the named workflow.
 * @param workflow_name The workflow name to return the build number for.
 * @returns number
 */
    static ModelUserDataBuildFromIndex(model_index: number, workflow_name?: string): number;

/**
 * Returns the user data associated with a model that has data for the selected workflow by index (starting at 0).
 * @param model_index The index of the model to return the user data for. If the workflow is run from the workflow menu and the name argument is not defined, it is the index in the list of models selected by the user. If the workflow is run from the workflow menu and the name argument is defined, it is the index of the model that has user data for the named workflow, out of the list of models selected by the user. If the workflow is run from REPORTER, it is the index in the list of all the models loaded in the session that have user data for the named workflow.
 * @param workflow_name The workflow name to return the user data for. If it is not specified it uses the name of the workflow selected by the user from the workflow menu.
 * @returns object
 */
    static ModelUserDataFromIndex(model_index: number, workflow_name?: string): object;

/**
 * Returns the name of the program that was used to write out the user data of a model for the selected workflow by index (starting at 0).
 * @param model_index The index of the model to return the program name for. If the workflow is run from the workflow menu and the name argument is not defined, it is the index in the list of models selected by the user. If the workflow is run from the workflow menu and the name argument is defined, it is the index of the model that has user data for the named workflow, out of the list of models selected by the user. If the workflow is run from REPORTER, it is the index in the list of all the models loaded in the session that have user data for the named workflow.
 * @param workflow_name The workflow name to return the program name for.
 * @returns string
 */
    static ModelUserDataProgramFromIndex(model_index: number, workflow_name?: string): string;

/**
 * Returns the version of the program that was used to write out the user data of a model for the selected workflow by index (starting at 0).
 * @param model_index The index of the model to return the program version for. If the workflow is run from the workflow menu and the name argument is not defined, it is the index in the list of models selected by the user. If the workflow is run from the workflow menu and the name argument is defined, it is the index of the model that has user data for the named workflow, out of the list of models selected by the user. If the workflow is run from REPORTER, it is the index in the list of all the models loaded in the session that have user data for the named workflow.
 * @param workflow_name The workflow name to return the program version for.
 * @returns number
 */
    static ModelUserDataVersionFromIndex(model_index: number, workflow_name?: string): number;

/**
 * Returns the number of models selected by the user.
 * @param workflow_name The workflow name to return the number of models for. If it's not defined the number of models that were selected by the user on the workflow menu is returned. If it's defined and the workflow was run from the workflow menu, the number of models, out of the models selected by the user, that have data for the named workflow is returned. If it's defined and the workflow is run from REPORTER, the number of models, out of all the models loaded in the session, that have data for the named workflow is returned.
 * @returns integer
 */
    static NumberOfSelectedModels(workflow_name?: string): number;

/**
 * Scan for fresh workflow data
 */
    static Refresh(): void;

/**
 * Returns the workflow definition filename
 * @param workflow_name The workflow name to return the workflow defintion filename for. This is required when a POST item is generated from REPORTER. If it is not specified the first workflow user data associated with the model is returned (this is the 'normal' case where a user launches a workflow from the workflow menu).
 * @returns string
 */
    static WorkflowDefinitionFilename(workflow_name?: string): string;

/**
 * Writes a workflow to a JSON file. If the file already exists the workflow is added to the file (or updated if it is already in the file).
 * @param user_data Object containing user data required for the workflow.
 * @param output_filename Filename to write to.
 * @param workflow_definition_filename Filename of the workflow definition file.
 * @param extra Extra workflow information
 */
    static WriteToFile(user_data: object, output_filename: string, workflow_definition_filename: string, extra?: WriteToFileArgument_extra): void;

/** No unit system */
    static UNIT_SYSTEM_NONE: number;
/** U1 unit system (m, kg, s) */
    static UNIT_SYSTEM_U1: number;
/** U2 unit system (mm, t, s) */
    static UNIT_SYSTEM_U2: number;
/** U3 unit system (mm, kg, ms) */
    static UNIT_SYSTEM_U3: number;
/** U4 unit system (mm, g, ms) */
    static UNIT_SYSTEM_U4: number;
/** U5 unit system (ft, slug, s) */
    static UNIT_SYSTEM_U5: number;
/** U6 unit system (m, t, s) */
    static UNIT_SYSTEM_U6: number;
}

declare class XMLParser {
/**
 * starts parsing an XML file
 * @param filename XML file to parse
 */
    Parse(filename: string): void;

/**
 * Create a new XMLParser object for reading XML files.
 * @returns XMLParser object
 */
    constructor();

/** Function to call when character data is found. The function will be called with 1 argument which is a string containing the character data */
    characterDataHandler: () => void;
/** Function to call when a comment is found. The function will be called with 1 argument which is a string containing the text inside the comment */
    commentHandler: () => void;
/** Function to call at the end of a CDATA section. The function does not have any arguments. */
    endCDATAHandler: () => void;
/** Function to call when an element end tag is found. The function will be called with 1 argument which is a string containing the name of the element */
    endElementHandler: () => void;
/** Function to call at the start of a CDATA section. The function does not have any arguments. */
    startCDATAHandler: () => void;
/** Function to call when an element start tag is found. The function will be called with 2 arguments. Argument 1 is a string containing the name of the element. Argument 2 is an object containing the element attributes */
    startElementHandler: () => void;
}


/** Object returned by Execute */
interface ExecuteReturn {
    /** The exit code from the program/script */
    status: number;
    /** The standard error output from the program/script */
    stderr: string;
    /** The standard output from the program/script */
    stdout: string;
}


/** Object function argument in Execute */
interface ExecuteArgument_data {
    /** The arguments to pass to program */
    arguments?: string[];
    /** The program you want to run. Note that on Linux this will consider PATH when resolving executable filenames without an absolute path. If you want to run something from the current directory and you do not have '.' in your PATH then you will need to write './something' as the program. */
    program: string;
}

/**
 * Allocate a flag for use in the script. See also ReturnFlag() and Once allocated the flag is automatically cleared for all entity types and all the curves currently in T/HIS.
 * @returns Flag (integer)
 */
declare function AllocateFlag(): number;

/**
 * Clears a flag on all curves and entity types.
 * @param flag The flag to return.
 */
declare function ClearFlag(flag: number): void;

/**
 * Execute one or more lines of command line dialogue input.
 * @param command Command to execute (as if it had been typed into the dialogue box)
 *        This argument can be repeated if required.
 */
declare function DialogueInput(...command: string[]): void;

/**
 * Execute one or more lines of command line dialogue input.
 * @param command Array where each element specifies a Command to execute (as if it had been typed into the dialogue box)
 */
declare function DialogueInput(command: string[]): void;

/**
 * Execute one or more lines of command line dialogue input with no echo of commands to dialogue box.
 * @param command Command to execute (as if it had been typed into the dialogue box)
 *        This argument can be repeated if required.
 */
declare function DialogueInputNoEcho(...command: string[]): void;

/**
 * Execute one or more lines of command line dialogue input with no echo of commands to dialogue box.
 * @param command Array where each element specifies a Command to execute (as if it had been typed into the dialogue box)
 */
declare function DialogueInputNoEcho(command: string[]): void;

/**
 * Disable Graph Window updates.
 */
declare function DisableGraphWindowUpdates(): void;

/**
 * Disable menu system updates.
 */
declare function DisableMenuUpdates(): void;

/**
 * Enable Graph Window updates.
 */
declare function EnableGraphWindowUpdates(): void;

/**
 * Enable menu system updates.
 */
declare function EnableMenuUpdates(): void;

/**
 * Print an error message to the dialogue box adding a carriage return.
 * @param string The string/item that you want to print
 */
declare function ErrorMessage(string: any): void;

/**
 * Execute a program or script outside T/HIS and get the standard output and error streams.
 * @param data Execute data
 */
declare function Execute(data: ExecuteArgument_data): ExecuteReturn;

/**
 * Exit script
 * @param write_hook_interrupt If Exit() is called from a write_hook.js script, the first argument will be processed as in the following: If the argument is provided and set to "true", it is used to interrupt the write out of the model, so that the script exits without anything being written out. An argument value of "false" exits the script and allows the model to be written out as normal. An example of this function's use in a Write Hook script can be found at $OA_INSTALL/primer_library/scripts/hooks/example_write_hook.js.
 */
declare function Exit(write_hook_interrupt?: boolean): void;

/**
 * Get the current working directory
 * @returns String containing current working directory
 */
declare function GetCurrentDirectory(): string;

/**
 * Get the value of a FAST-TCF variable
 * @param name The FAST-TCF variable name (case independent)
 * @returns String containing variable value or null if variable does not exist
 */
declare function GetFtcfVar(name: string): string;

/**
 * Get the directory in which executables are installed. This is the OA_INSTALL environment variable, or if that is not set the directory in which the current executable is installed. Returns NULL if not found
 * @returns string
 */
declare function GetInstallDirectory(): string;

/**
 * Get the Preference value with the given string in the any of admin ("OA_ADMIN") or install ("OA_INSTALL") or home ("OA_HOME") directory oa_pref
 * @param program The program name string : Valid values are 'All', 'D3PLOT', 'PRIMER', 'REPORTER', 'SHELL','T/HIS'
 * @param name The preference name string
 * @returns : String containing preference value or null if preference string is not present in any oa_pref. Also if none of the above environment variables are not present, then API simply returns null. While returning preference value, locked preference value in admin and then install oa_pref takes precedence over home oa_pref. If preference is not locked in any of these oa_pref, preference in home directory oa_pref is returned.
 */
declare function GetPreferenceValue(program: string, name: string): string;

/**
 * Get the directory passed to T/HIS by the -start_in command line argument
 * @returns String containing start_in directory or NULL if not set
 */
declare function GetStartInDirectory(): string;

/**
 * Get the value of an environment variable
 * @param name The environment variable name
 * @returns String containing variable value or null if variable does not exist
 */
declare function Getenv(name: string): string;

/**
 * Print a message to the dialogue box adding a carriage return.
 * @param string The string/item that you want to print. If '\r' is added to the end of the string then instead of automatically adding a carriage return in the dialogue box, the next message will overwrite the current one. This may be useful for giving feedback to the dialogue box when doing an operation.
 */
declare function Message(string: any): void;

/**
 * Pause execution of the script for time milliseconds. See also Sleep()
 * @param time Number of milliseconds to pause for
 */
declare function MilliSleep(time: number): void;

/**
 * Formats a number to a string with the specified width.
 * @param number The number you want to format.
 * @param width The width of the string you want to format it to (must be less than 80).
 * @param pref_int By default only integer values inside the single precision 32 bit signed integer limit of approximately +/-2e9 are formatted as integers, all other numeric values are formatted as floats. With this argument set to TRUE then integer values up to the mantissa precision of a 64 bit float, approximately +/-9e15, will also be formatted as integers.
 * @returns String containing the number
 */
declare function NumberToString(number: number, width: number, pref_int?: boolean): string;

/**
 * Open the Modion manuals at a requested page
 * @param program The program manual to open. Can be "primer", "d3plot" or "this"
 * @param page The page to open in the manual, e.g. "running-this.html"
 * @returns true if successful, false if not
 */
declare function OpenManual(program: string, page: string): boolean;

/**
 * Updates all the T/HIS graphs.
 */
declare function Plot(): void;

/**
 * Print a string to stdout. Note that a carriage return is not added.
 * @param string The string/item that you want to print
 */
declare function Print(string: any): void;

/**
 * Print a string to stdout adding a carriage return.
 * @param string The string/item that you want to print
 */
declare function Println(string: any): void;

/**
 * Return a flag used in the script. See also AllocateFlag() and
 * @param flag The flag to return.
 */
declare function ReturnFlag(flag: number): void;

/**
 * Sets the current working directory.
 * @param directory_path Path to the directory you would like to change into.
 * @returns true if successful, false if not
 */
declare function SetCurrentDirectory(directory_path: string): boolean;

/**
 * Set the value of a FAST-TCF variable. If the variable already exists then it's value is updated
 * @param name The FAST-TCF variable name (case independent)
 * @returns String containing variable value or null if variable does not exist
 */
declare function SetFtcfVar(name: string): string;

/**
 * Pause execution of the script for time seconds. See also MilliSleep()
 * @param time Number of seconds to pause for
 */
declare function Sleep(time: number): void;

/**
 * Do a system command outside T/HIS. To run an external command and get the output then please use Execute() instead.
 * @param string The system command that you want to do
 * @returns integer (probably zero if command successful but is implementation-dependant)
 */
declare function System(string: any): number;

/**
 * Test whether script is running on a Unix/Linux operating system. See also Windows()
 * @returns true if Unix/Linux, false if not
 */
declare function Unix(): boolean;

/**
 * Updates the scroll bar in the Curve Manager. Useful if your script has created lots of new curves and you want to update the menu (otherwise, the scroll bar range will only be updated when the script exits).
 */
declare function UpdateCurveMenu(): void;

/**
 * Print a warning message to the dialogue box adding a carriage return.
 * @param string The string/item that you want to print
 */
declare function WarningMessage(string: any): void;

/**
 * Test whether script is running on a Windows operating system. See also Unix()
 * @returns true if Windows, false if not
 */
declare function Windows(): boolean;

declare class Component {
/** Time step */
    static GSTP: number;
/** Kinetic energy */
    static GKE: number;
/** Internal energy */
    static GIE: number;
/** Stonewall energy */
    static GSWE: number;
/** Spring and damper energy */
    static GSPE: number;
/** Hourglass energy */
    static GHG: number;
/** System damping energy */
    static GSDE: number;
/** Joint internal energy */
    static GJE: number;
/** Sliding interface energy */
    static GSIE: number;
/** External work */
    static GEW: number;
/** Rigid Body stopper energy */
    static GRBE: number;
/** Total energy */
    static GTE: number;
/** Total/initial energy */
    static GTER: number;
/** Average X velocity */
    static GVX: number;
/** Average Y velocity */
    static GVY: number;
/** Average Z velocity */
    static GVZ: number;
/** Time per zone cycle */
    static GTZC: number;
/** Total mass */
    static GMASS: number;
/** Added mass */
    static GMADD: number;
/** %age Mass increase */
    static GPM: number;
/** Eroded Kinetic energy */
    static GEKE: number;
/** Eroded Internal energy */
    static GEIE: number;
/** Eroded Hourglass energy */
    static GEHG: number;
/** Energy Ratio w/o Eroded */
    static GER: number;
/** Current Distortional KE */
    static DRCE: number;
/** Maximum Distortional KE */
    static DRMX: number;
/** Convergence Factor */
    static DRCO: number;
/** Total Kinetic energy */
    static DRKE: number;
/** Lumped Kinetic energy */
    static LKE: number;
/** Mat Plastic energy */
    static GMPE: number;
/** Mat Elastic energy */
    static GMEE: number;
/** Mat Damage energy */
    static GMDE: number;
/** Dissipated IE */
    static GDIE: number;
/** Dissipated KE */
    static GDKE: number;
/** Drilling energy */
    static GDE: number;
/** X momentum */
    static GMX: number;
/** Y momentum */
    static GMY: number;
/** Z momentum */
    static GMZ: number;
/** Added mass */
    static GAM: number;
/** Temperature */
    static TEMP: number;
/** X Displacement */
    static DX: number;
/** Y Displacement */
    static DY: number;
/** Z Displacement */
    static DZ: number;
/** Displacement Magnitude */
    static DM: number;
/** X Velocity */
    static VX: number;
/** Y Velocity */
    static VY: number;
/** Z Velocity */
    static VZ: number;
/** Velocity Magnitude */
    static VM: number;
/** X Acceleration */
    static AX: number;
/** Y Acceleration */
    static AY: number;
/** Z Acceleration */
    static AZ: number;
/** Acceleration Magnitude */
    static AM: number;
/** X co-ordinate */
    static CX: number;
/** Y co-ordinate */
    static CY: number;
/** Z co-ordinate */
    static CZ: number;
/** Current Vector */
    static CV: number;
/** Basic X co-ordinate */
    static BX: number;
/** Basic Y co-ordinate */
    static BY: number;
/** Basic Z co-ordinate */
    static BZ: number;
/** Basic Vector */
    static BV: number;
/** X rotation */
    static RDX: number;
/** Y rotation */
    static RDY: number;
/** Z rotation */
    static RDZ: number;
/** Rotation Magnitude */
    static RDM: number;
/** X rotational velocity */
    static RVX: number;
/** Y rotational velocity */
    static RVY: number;
/** Z rotational velocity */
    static RVZ: number;
/** Rotation Vel Magnitude */
    static RVM: number;
/** X rotational acceleration */
    static RAX: number;
/** Y rotational acceleration */
    static RAY: number;
/** Z rotational acceleration */
    static RAZ: number;
/** Rotation Accel Magnitude */
    static RAM: number;
/** X Thermal Flux */
    static TFX: number;
/** Y Thermal Flux */
    static TFY: number;
/** Z Thermal Flux */
    static TFZ: number;
/** Thermal Flux Magnitude */
    static TFM: number;
/** Top Temperature */
    static TTOP: number;
/** Bottom Temperature */
    static TBOT: number;
/** Stress in XX */
    static SXX: number;
/** Stress in YY */
    static SYY: number;
/** Stress in ZZ */
    static SZZ: number;
/** Stress in XY */
    static SXY: number;
/** Stress in YZ */
    static SYZ: number;
/** Stress in ZX */
    static SZX: number;
/** MAX principal stress */
    static SMAX: number;
/** MIN principal stress */
    static SMIN: number;
/** MAX shear stress */
    static SMS: number;
/** von Mises stress */
    static SVON: number;
/** Average stress (Pressure) */
    static SAV: number;
/** Triaxiality Factor */
    static STR: number;
/** Effective plastic strain */
    static EPL: number;
/** Strain in XX */
    static EXX: number;
/** Strain in YY */
    static EYY: number;
/** Strain in ZZ */
    static EZZ: number;
/** Strain in XY */
    static EXY: number;
/** Strain in YZ */
    static EYZ: number;
/** Strain in ZX */
    static EZX: number;
/** MAX principal strain */
    static EMAX: number;
/** MIN principal strain */
    static EMIN: number;
/** MAX shear strain */
    static EMS: number;
/** von Mises strain */
    static EVON: number;
/** Average strain */
    static EAV: number;
/** Plastic Strain Magnitude */
    static PEMAG: number;
/** Extra data */
    static SOX: number;
/** Axial force */
    static BFX: number;
/** Shear force in Y */
    static BFY: number;
/** Shear force in Z */
    static BFZ: number;
/** Torsional moment */
    static BMXX: number;
/** Moment in Y */
    static BMYY: number;
/** Moment in Z */
    static BMZZ: number;
/** Axial strain */
    static BSAX: number;
/** Bending energy: end 1 */
    static BPE1: number;
/** Bending energy: end 2 */
    static BPE2: number;
/** Y rotation: end 1 */
    static BRY1: number;
/** Y rotation: end 2 */
    static BRY2: number;
/** Z rotation: end 1 */
    static BRZ1: number;
/** Z rotation: end 2 */
    static BRZ2: number;
/** Torsional rotation */
    static BRXX: number;
/** Y Bending moment: end 1 */
    static BMY1: number;
/** Y Bending moment: end 2 */
    static BMY2: number;
/** Z Bending moment: end 1 */
    static BMZ1: number;
/** Z Bending moment: end 2 */
    static BMZ2: number;
/** Axial collapse energy */
    static BACE: number;
/** Internal energy */
    static BIE: number;
/** Axial stress */
    static BSXX: number;
/** XY Shear stress */
    static BSXY: number;
/** ZX Shear stress */
    static BSZX: number;
/** Effective plastic strain */
    static BEP: number;
/** Axial strain */
    static BEAX: number;
/** Relative Axial displacement */
    static BDX: number;
/** Relative S - Displacement */
    static BDY: number;
/** Relative T - Displacement */
    static BDZ: number;
/** Rotation in S */
    static BRY: number;
/** Rotation in T */
    static BRZ: number;
/** Relative Axial force */
    static BDNA: number;
/** Resultant S - Force */
    static BDNS: number;
/** Resultant T - Force */
    static BDNT: number;
/** Axial moment */
    static BDMA: number;
/** Moment in S */
    static BDMS: number;
/** Moment in T */
    static BDMT: number;
/** Axial Direction X */
    static BDDX: number;
/** Axial Direction Y */
    static BDDY: number;
/** Axial Direction Z */
    static BDDZ: number;
/** S - Direction X */
    static BDSX: number;
/** S - Direction Y */
    static BDSY: number;
/** S - Direction Z */
    static BDSZ: number;
/** T - Direction X */
    static BDTX: number;
/** T - Direction Y */
    static BDTY: number;
/** T - Direction Z */
    static BDTZ: number;
/** Extra data */
    static BEX: number;
/** Effective plastic strain */
    static EPS: number;
/** Moment in X */
    static RMX: number;
/** Moment in Y */
    static RMY: number;
/** Moment in XY */
    static RMXY: number;
/** Shear force in X */
    static RQX: number;
/** Shear force in Y */
    static RQY: number;
/** Normal force in X */
    static RFX: number;
/** Normal force in Y */
    static RFY: number;
/** Normal force in XY */
    static RFXY: number;
/** Thickness */
    static THK: number;
/** Internal energy density */
    static EDEN: number;
/** Extra data */
    static SHX: number;
/** Normal force */
    static FN: number;
/** Global X force */
    static FX: number;
/** Global Y force */
    static FY: number;
/** Global Z force */
    static FZ: number;
/** Energy */
    static EN: number;
/** Resultant Force */
    static SP_F: number;
/** Elongation */
    static SP_E: number;
/** Res Force v Elongation */
    static SP_FE: number;
/** Global X force */
    static SP_FX: number;
/** Global Y force */
    static SP_FY: number;
/** Global Z force */
    static SP_FZ: number;
/** Energy */
    static SP_EN: number;
/** Resultant Moment */
    static SP_M: number;
/** Rotation */
    static SP_R: number;
/** Res Moment v Rotation */
    static SP_MR: number;
/** Moment in X */
    static SP_MX: number;
/** Moment in Y */
    static SP_MY: number;
/** Moment in Z */
    static SP_MZ: number;
/** Force */
    static SB_F: number;
/** Strain */
    static SB_S: number;
/** Force v Strain */
    static SB_FS: number;
/** Current Length */
    static SB_L: number;
/** Force */
    static RT_F: number;
/** Pullout */
    static RT_P: number;
/** Force v Pullout */
    static RT_FP: number;
/** Pull through */
    static SR_P: number;
/** Warp Angle */
    static SR_W: number;
/** Skew Angle */
    static SR_S: number;
/** Friction Coeff */
    static SR_F: number;
/** Normal Force */
    static SR_N: number;
/** Side 1 Belt Force */
    static SR_B1: number;
/** Side 2 Belt Force */
    static SR_B2: number;
/** 'Fired' (= 1) */
    static PR_FI: number;
/** A Surface X force */
    static CFXA: number;
/** A Surface X force (alternative name for Component.CFXA) */
    static CFXS: number;
/** A Surface Y force */
    static CFYA: number;
/** A Surface Y force (alternative name for Component.CFYA) */
    static CFYS: number;
/** A Surface Z force */
    static CFZA: number;
/** A Surface Z force (alternative name for Component.CFZA) */
    static CFZS: number;
/** A Surface Force Mag */
    static CFMA: number;
/** A Surface Force Mag (alternative name for Component.CFMA) */
    static CFMS: number;
/** B Surface X force */
    static CFXB: number;
/** B Surface X force (alternative name for Component.CFXB) */
    static CFX: number;
/** B Surface Y force */
    static CFYB: number;
/** B Surface Y force (alternative name for Component.CFYB) */
    static CFY: number;
/** B Surface Z force */
    static CFZB: number;
/** B Surface Z force (alternative name for Component.CFZB) */
    static CFZ: number;
/** B Surface Force Mag */
    static CFMB: number;
/** B Surface Force Mag (alternative name for Component.CFMB) */
    static CFM: number;
/** A Surface X moment */
    static CMXA: number;
/** A Surface X moment (alternative name for Component.CMXA) */
    static CMXS: number;
/** A Surface Y moment */
    static CMYA: number;
/** A Surface Y moment (alternative name for Component.CMYA) */
    static CMYS: number;
/** A Surface Z moment */
    static CMZA: number;
/** A Surface Z moment (alternative name for Component.CMZA) */
    static CMZS: number;
/** B Surface X moment */
    static CMXB: number;
/** B Surface X moment (alternative name for Component.CMXB) */
    static CMX: number;
/** B Surface Y moment */
    static CMYB: number;
/** B Surface Y moment (alternative name for Component.CMYB) */
    static CMY: number;
/** B Surface Z moment */
    static CMZB: number;
/** B Surface Z moment (alternative name for Component.CMZB) */
    static CMZ: number;
/** A Surface Mass */
    static CMA: number;
/** A Surface Mass (alternative name for Component.CMA) */
    static CMS: number;
/** B Surface Mass */
    static CMB: number;
/** B Surface Mass (alternative name for Component.CMB) */
    static CMM: number;
/** A Surface side energy */
    static CENA: number;
/** A Surface side energy (alternative name for Component.CENA) */
    static CENS: number;
/** B Surface side energy */
    static CENB: number;
/** B Surface side energy (alternative name for Component.CENB) */
    static CENM: number;
/** Frictional energy */
    static CFRI: number;
/** Total energy */
    static CTEN: number;
/** Z force */
    static RFZ: number;
/** Force Magnitude */
    static RFM: number;
/** Local X force */
    static LFX: number;
/** Local Y force */
    static LFY: number;
/** Local Z force */
    static LFZ: number;
/** X force */
    static GRFX: number;
/** Y force */
    static GRFY: number;
/** Z force */
    static GRFZ: number;
/** Force Magnitude */
    static GRFM: number;
/** Energy */
    static GEN: number;
/** Pressure */
    static PR: number;
/** Exact Pressure */
    static EPR: number;
/** Volume */
    static VOL: number;
/** Density */
    static DE: number;
/** Exact Density */
    static EDE: number;
/** Internal energy */
    static IE: number;
/** Exact Internal energy */
    static EIE: number;
/** Mass flow rate in */
    static IN: number;
/** Mass flow rate out */
    static OU: number;
/** Mass in */
    static MIN: number;
/** Mass out */
    static MOU: number;
/** Total mass */
    static MASS: number;
/** Surface area */
    static SA: number;
/** Reaction force */
    static FR: number;
/** Translational KE */
    static TKE: number;
/** Inflator Energy */
    static IFE: number;
/** Damping Energy */
    static DMP: number;
/** Ave Particle Pressure */
    static PP: number;
/** Mass flow rate via fabric */
    static MAF: number;
/** Mass flow rate via vent */
    static MAV: number;
/** Mass out via fabric */
    static MOF: number;
/** Mass out via vent */
    static MOV: number;
/** Work Atmospheric */
    static A_WO: number;
/** Work Useful */
    static U_WO: number;
/** Num Particles */
    static NP: number;
/** Total area */
    static AR: number;
/** +ve Pressure */
    static PRP: number;
/** -ve Pressure */
    static PRN: number;
/** Heat Convection Energy */
    static HCE: number;
/** Enhanced Vent Flag */
    static EV: number;
/** Leakage Energy */
    static LE: number;
/** Gas Flow rate */
    static GAS: number;
/** Por Volume */
    static PVO: number;
/** Part Temperature */
    static PTE: number;
/** Unblocked Area */
    static UN: number;
/** Blocked Area */
    static BA: number;
/** Leakage */
    static LK: number;
/** Static Pressure */
    static SPR: number;
/** Total Pressure */
    static TPR: number;
/** Static Temperature */
    static STEMP: number;
/** Total Temperature */
    static TTEMP: number;
/** Volume Flow Rate */
    static VFR: number;
/** Mass Flow Rate */
    static MFR: number;
/** Heat Transfer */
    static HT: number;
/** Heat Transfer Rate */
    static HTR: number;
/** Heat Convection Rate */
    static HCR: number;
/** Leakage Energy Rate */
    static LER: number;
/** Translational Energy */
    static TRE: number;
/** X co-ordinate */
    static X: number;
/** Y co-ordinate */
    static Y: number;
/** Z co-ordinate */
    static Z: number;
/** Force Magnitude */
    static FM: number;
/** Moment in X */
    static MX: number;
/** Moment in Y */
    static MY: number;
/** Moment in Z */
    static MZ: number;
/** Moment Magnitude */
    static MM: number;
/** Phi angle */
    static PHA: number;
/** d(Phi)/dt */
    static PHDT: number;
/** Phi stiffness moment */
    static PHS: number;
/** Phi damping moment */
    static PHD: number;
/** Phi total moment */
    static PHT: number;
/** Theta angle */
    static THA: number;
/** d(Theta)/dt */
    static THDT: number;
/** Theta stiffness moment */
    static THS: number;
/** Theta damping moment */
    static THD: number;
/** Theta total moment */
    static THT: number;
/** Psi angle */
    static PSA: number;
/** d(Psi)/dt */
    static PSDT: number;
/** Psi stiffness moment */
    static PSS: number;
/** Psi damping moment */
    static PSD: number;
/** Psi total moment */
    static PST: number;
/** Alpha angle */
    static AA: number;
/** d(Alpha)/dt */
    static ADT: number;
/** Alpha stiffness moment */
    static ALS: number;
/** Alpha damping moment */
    static ALD: number;
/** Alpha total moment */
    static ALT: number;
/** d(Beta)/dt */
    static BDT: number;
/** Beta stiffness moment */
    static BES: number;
/** Beta damping moment */
    static BED: number;
/** Beta total moment */
    static BET: number;
/** Gamma angle */
    static GA: number;
/** d(Gamma)/dt */
    static GDT: number;
/** Gamma scale factor */
    static GSF: number;
/** d(X)/dt */
    static DXDT: number;
/** d(Y)/dt */
    static DYDT: number;
/** d(Z)/dt */
    static DZDT: number;
/** X stiffness force */
    static SFX: number;
/** Y stiffness force */
    static SFY: number;
/** Z stiffness force */
    static SFZ: number;
/** X damping force */
    static DFX: number;
/** Y damping force */
    static DFY: number;
/** Z damping force */
    static DFZ: number;
/** P displacement */
    static DP: number;
/** d(P)/dt */
    static DPDT: number;
/** R displacement */
    static DR: number;
/** d(R)/dt */
    static DRDT: number;
/** P stiffness force */
    static SFP: number;
/** R stiffness force */
    static SFR: number;
/** P damping force */
    static DFP: number;
/** R damping force */
    static DFR: number;
/** P total force */
    static TFP: number;
/** R total force */
    static TFR: number;
/** X force */
    static XSEC_FX: number;
/** Y force */
    static XSEC_FY: number;
/** Z force */
    static XSEC_FZ: number;
/** Force Magnitude */
    static XSEC_FM: number;
/** Moment in X */
    static XSEC_MX: number;
/** Moment in Y */
    static XSEC_MY: number;
/** Moment in Z */
    static XSEC_MZ: number;
/** Moment Magnitude */
    static XSEC_MM: number;
/** X centroid coord */
    static XSEC_CX: number;
/** Y centroid coord */
    static XSEC_CY: number;
/** Z centroid coord */
    static XSEC_CZ: number;
/** Area of section */
    static XSEC_A: number;
/** Kinetic Energy Ratio */
    static GKR: number;
/** Internal Energy Ratio */
    static GIR: number;
/** Center of mass */
    static GCM: number;
/** X Center of mass */
    static GXCM: number;
/** Y Center of mass */
    static GYCM: number;
/** Z Center of mass */
    static GZCM: number;
/** Inertia Tensor Row11 */
    static GI11: number;
/** Inertia Tensor Row12 */
    static GI12: number;
/** Inertia Tensor Row13 */
    static GI13: number;
/** Inertia Tensor Row21 */
    static GI21: number;
/** Inertia Tensor Row22 */
    static GI22: number;
/** Inertia Tensor Row23 */
    static GI23: number;
/** Inertia Tensor Row31 */
    static GI31: number;
/** Inertia Tensor Row32 */
    static GI32: number;
/** Inertia Tensor Row33 */
    static GI33: number;
/** Principal inertia i11 */
    static GI1: number;
/** Principal inertia i22 */
    static GI2: number;
/** Principal inertia i33 */
    static GI3: number;
/** Principal Directions Row11 */
    static GP11: number;
/** Principal Directions Row12 */
    static GP12: number;
/** Principal Directions Row13 */
    static GP13: number;
/** Principal Directions Row21 */
    static GP21: number;
/** Principal Directions Row22 */
    static GP22: number;
/** Principal Directions Row23 */
    static GP23: number;
/** Principal Directions Row31 */
    static GP31: number;
/** Principal Directions Row32 */
    static GP32: number;
/** Principal Directions Row33 */
    static GP33: number;
/** Direction Cosine 11 */
    static D11: number;
/** Direction Cosine 12 */
    static D12: number;
/** Direction Cosine 13 */
    static D13: number;
/** Direction Cosine 21 */
    static D21: number;
/** Direction Cosine 22 */
    static D22: number;
/** Direction Cosine 23 */
    static D23: number;
/** Direction Cosine 31 */
    static D31: number;
/** Direction Cosine 32 */
    static D32: number;
/** Direction Cosine 33 */
    static D33: number;
/** Local X Displacement */
    static LDX: number;
/** Local Y Displacement */
    static LDY: number;
/** Local Z Displacement */
    static LDZ: number;
/** Local X Velocity */
    static LVX: number;
/** Local Y Velocity */
    static LVY: number;
/** Local Z Velocity */
    static LVZ: number;
/** Local X Acceleration */
    static LAX: number;
/** Local Y Acceleration */
    static LAY: number;
/** Local Z Acceleration */
    static LAZ: number;
/** Local X rotation */
    static LRDX: number;
/** Local Y rotation */
    static LRDY: number;
/** Local Z rotation */
    static LRDZ: number;
/** Local X rotational vel */
    static LRVX: number;
/** Local Y rotational vel */
    static LRVY: number;
/** Local Z rotational vel */
    static LRVZ: number;
/** Local X rotational accel */
    static LRAX: number;
/** Local Y rotational accel */
    static LRAY: number;
/** Local Z rotational accel */
    static LRAZ: number;
/** Axial force */
    static SW_F: number;
/** Shear force */
    static SW_S: number;
/** Failure */
    static SW_FAIL: number;
/** Maximum Failure */
    static SW_MF: number;
/** Length */
    static SW_LE: number;
/** Failure Time */
    static SW_TIME: number;
/** Torsion */
    static SW_TO: number;
/** Moment Magnitude */
    static SW_MM: number;
/** DC Failure Function */
    static SW_FF: number;
/** Normal Failure */
    static SW_NF: number;
/** Shear Failure */
    static SW_SF: number;
/** Bending Failure */
    static SW_BF: number;
/** Spotweld Area */
    static SW_AREA: number;
/** X Force */
    static SPC_FX: number;
/** Y Force */
    static SPC_FY: number;
/** Z Force */
    static SPC_FZ: number;
/** Force Magnitude */
    static SPC_FM: number;
/** Moment in X */
    static SPC_MX: number;
/** Moment in Y */
    static SPC_MY: number;
/** Moment in Z */
    static SPC_MZ: number;
/** Moment Magnitude */
    static SPC_MM: number;
/** X Total Set Force */
    static SPC_XTF: number;
/** Y Total Set Force */
    static SPC_YTF: number;
/** Z Total Set Force */
    static SPC_ZTF: number;
/** Resultant Set Force */
    static SPC_RF: number;
/** X Total Model Force */
    static SPC_XMF: number;
/** Y Total Model Force */
    static SPC_YMF: number;
/** Z Total Model Force */
    static SPC_ZMF: number;
/** Resultant Model Force */
    static SPC_RMF: number;
/** Mass (Porous+Vent) */
    static MP: number;
/** Mass (Leakage) */
    static ML: number;
/** Leakage Force Magnitude */
    static LFM: number;
/** Temperature Change */
    static TC: number;
/** Cpld Solid ID */
    static SO: number;
/** Effective Stress */
    static EFS: number;
/** Smoothing Length */
    static SM: number;
/** Strain in XX */
    static ERXX: number;
/** Strain in YY */
    static ERYY: number;
/** Strain in ZZ */
    static ERZZ: number;
/** Strain in XY */
    static ERXY: number;
/** Strain in YZ */
    static ERYZ: number;
/** Strain in ZX */
    static ERZX: number;
/** Relative Volume */
    static RV: number;
/** Active */
    static AC: number;
/** Force */
    static PL_FT: number;
/** Slip */
    static PL_SL: number;
/** Slip Rate */
    static PL_SR: number;
/** Wrap Angle */
    static PL_AN: number;
/** X Pressure Drag */
    static FPX: number;
/** Y Pressure Drag */
    static FPY: number;
/** Z Pressure Drag */
    static FPZ: number;
/** Pressure Drag Magnitude */
    static FPM: number;
/** X Viscous Drag */
    static FVX: number;
/** Y Viscous Drag */
    static FVY: number;
/** Z Viscous Drag */
    static FVZ: number;
/** Viscous Drag Magnitude */
    static FVM: number;
/** MX Pressure Drag */
    static MPX: number;
/** MY Pressure Drag */
    static MPY: number;
/** MZ Pressure Drag */
    static MPZ: number;
/** Pressure Drag Magnitude */
    static MPM: number;
/** MX Viscous Drag */
    static MVX: number;
/** MY Viscous Drag */
    static MVY: number;
/** MZ Viscous Drag */
    static MVZ: number;
/** Viscous Drag Magnitude */
    static MVM: number;
/** X AVelocity */
    static AVX: number;
/** Y AVelocity */
    static AVY: number;
/** Z AVelocity */
    static AVZ: number;
/** AVelocity Magnitude */
    static AVM: number;
/** Average Pressure */
    static PA: number;
/** X Vorticity */
    static VTX: number;
/** Y Vorticity */
    static VTY: number;
/** Z Vorticity */
    static VTZ: number;
/** Vorticity Magnitude */
    static VTM: number;
/** Q Criterion */
    static QC: number;
/** Viscosity */
    static VC: number;
/** Viscous Turbulence */
    static VT: number;
/** Level Set Function */
    static LS: number;
/** Alpha */
    static A: number;
/** Temp Area Average */
    static TAA: number;
/** Temp Sum Average */
    static TSA: number;
/** Average Heat Flux */
    static TEH: number;
/** Heat Transfer Coeff */
    static HTC: number;
/** Volume */
    static VO: number;
/** X Current */
    static ECX: number;
/** Y Current */
    static ECY: number;
/** Z Current */
    static ECZ: number;
/** Current Magnitude */
    static ECM: number;
/** X BField */
    static BFDX: number;
/** Y BField */
    static BFDY: number;
/** Z BField */
    static BFDZ: number;
/** BField Magnitude */
    static BFDM: number;
/** X AField */
    static AFX: number;
/** Y AField */
    static AFY: number;
/** Z AField */
    static AFZ: number;
/** AField Magnitude */
    static AFM: number;
/** Sigma */
    static S: number;
/** Relative Permeability */
    static MUR: number;
/** Joule Heating Rate */
    static JHR: number;
/** X Lorentz Force */
    static LOFX: number;
/** Y Lorentz Force */
    static LOFY: number;
/** Z Lorentz Force */
    static LOFZ: number;
/** Lorentz Force Magnitude */
    static LOFM: number;
/** X EField */
    static EFX: number;
/** Y EField */
    static EFY: number;
/** Z EField */
    static EFZ: number;
/** EField Magnitude */
    static EFM: number;
/** Scalar Potential */
    static SP: number;
/** Voltage */
    static ECV: number;
/** Charge */
    static ECC: number;
/** Current */
    static ECCT: number;
/** Circuit Resistance */
    static ECRD: number;
/** Equivalent Resistance */
    static ECRJ: number;
/** Inductance */
    static ECI: number;
/** Mutual Inductance 1 */
    static ECM1: number;
/** Mutual Inductance 2 */
    static ECM2: number;
/** Mutual Inductance 3 */
    static ECM3: number;
/** Voltage */
    static ECDV: number;
/** Charge */
    static ECDC: number;
/** Current */
    static ECDT: number;
/** Total Energy */
    static ECDE: number;
/** X Lorentz Force */
    static PLFX: number;
/** Y Lorentz Force */
    static PLFY: number;
/** Z Lorentz Force */
    static PLFZ: number;
/** M Lorentz Force */
    static PLFM: number;
/** Joule Heating Energy */
    static PJHE: number;
/** Magnetic Energy */
    static PMAG: number;
/** Kinetic Energy */
    static PKIN: number;
/** Plastic Energy */
    static PPLA: number;
/** Voltage */
    static EIV: number;
/** Current */
    static EICT: number;
/** Contact Current */
    static ECRC: number;
/** Contact Resistance */
    static ECRR: number;
/** Contact Area */
    static ECRA: number;
/** Voltage */
    static EBV: number;
/** Current */
    static EBC: number;
/** Area */
    static EBA: number;
/** Current */
    static ECT: number;
/** Contact Resistance */
    static ERD: number;
/** Power */
    static POW: number;
/** Energy */
    static ENE: number;
/** TotVoltage */
    static TVO: number;
/** OCV */
    static OCV: number;
/** DampVoltage */
    static DVO: number;
/** Current */
    static RCT: number;
/** SOC */
    static SOC: number;
/** SOCFunc */
    static SOF: number;
/** SOCShift */
    static SOS: number;
/** SOCSum */
    static SOM: number;
/** R0 */
    static RR0: number;
/** R10 */
    static R10: number;
/** C10 */
    static C10: number;
/** Temp */
    static TEM: number;
/** Ckt Number */
    static CNM: number;
/** Volume Current */
    static ERVC: number;
/** Surface Current */
    static ERSC: number;
/** Magnetic Field */
    static ERVM: number;
/** Run timestep */
    static RUN: number;
/** Condition timestep */
    static CFL: number;
/** Ratio */
    static RBC: number;
/** VC2 */
    static VC2: number;
/** VC3 */
    static VC3: number;
/** R20 */
    static R20: number;
/** R30 */
    static R30: number;
/** C20 */
    static C20: number;
/** C30 */
    static C30: number;
/** Ohm Heat Power */
    static OHP: number;
/** Reversible Heat Power */
    static RHP: number;
/** Equivalent Capacity Power */
    static ECP: number;
/** Ohm heat energy */
    static OHE: number;
/** Reversible heat energy */
    static RHE: number;
/** Equivalent Capacity energy */
    static ECE: number;
/** Equivalent storage energy */
    static ESE: number;
/** Ext ckt Joule Heating */
    static ECJH: number;
/** Ext ckt Magnetic Energy */
    static ECME: number;
/** Ext ckt Capacitor Energy */
    static ECCE: number;
/** Mesh conductor Joule Heating */
    static MJH: number;
/** Mesh conductor Mag Energy */
    static MME: number;
/** Air Magnetic Energy */
    static AME: number;
/** Total EM Energy */
    static TEE: number;
/** Total Plastic Energy */
    static TPE: number;
/** Maximum short resistance */
    static MSR: number;
/** Number of short circuits */
    static NSC: number;
/** Total number of circuits */
    static TNC: number;
/** Total short resistance */
    static TSR: number;
/** Maximum resistance */
    static MXR: number;
/** Short circuits */
    static SHC: number;
/** Total circuits */
    static TOC: number;
/** Total resistance */
    static TOR: number;
/** Area short */
    static ARS: number;
/** Air Internal Energy */
    static AIE: number;
/** Detn Product IE */
    static DPIE: number;
/** Outside Domain IE */
    static OIE: number;
/** Air Translational E */
    static ATE: number;
/** Detn Product Trans E */
    static DPTE: number;
/** Outside Domain Trans E */
    static OTE: number;
/** Air Pressure */
    static APR: number;
/** Detn Product Pressure */
    static DPPR: number;
/** Resultant Pressure */
    static RPR: number;
/** Detn Product X Force */
    static DPFX: number;
/** Detn Product Y Force */
    static DPFY: number;
/** Detn Product Z Force */
    static DPFZ: number;
/** Velocity */
    static VEL: number;
/** Local X Moment */
    static LMX: number;
/** Local Y Moment */
    static LMY: number;
/** Local Z Moment */
    static LMZ: number;
/**              CURVOUT */
    static COUT: number;
/** X force */
    static DCFX: number;
/** Y force */
    static DCFY: number;
/** Z force */
    static DCFZ: number;
/** Force Mag */
    static DCFM: number;
/** X moment */
    static DCMX: number;
/** Y moment */
    static DCMY: number;
/** Z moment */
    static DCMZ: number;
/** Moment Mag */
    static DCMM: number;
/** Mass */
    static DCM: number;
/**  button_label */
    static  js_label: number;
}
