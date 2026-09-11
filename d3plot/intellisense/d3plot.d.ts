
/** Object function argument in ForceMoment */
interface ForceMomentArgument_options {
    /** Integration point number to get the data at (ip &gt;= 1) */
    ip: number;
}


/** Object function argument in GetData */
interface GetDataArgument_options {
    /** The extra data component number if component Component.SOX for solids, Component.BMX for beams or Component.SHX for shells and thick shells */
    extra: number;
    /** Integration point number to get the data at (ip &gt;= 1 or one of the constants Constant.TOP, Constant.MIDDLE or Constant.BOTTOM). If the integration point is not defined it will use the integration point defined on the current GUI "data" panel, which defaults to the middle surface for shells, thick shells, and solids, and Mag All for beams, but may vary if changed by an interactive user. If consistent output from a script is required, independent of any prior interactive activity, an explicit integration point or surface should be defined */
    ip: number;
    /** On plane integration point number for shells and thick shells (op &gt;= 1 [default]) */
    op: number;
    /** The frame of reference to return values in. Either Constant.GLOBAL (default), Constant.LOCAL, Constant.CYLINDRICAL, Constant.USER_DEFINED or Constant.MATERIAL. This is only necessary for directional components (eg X stress) and then only when something other than the default Constant.GLOBAL coordinate system is to be used */
    referenceFrame: number;
    /** The user-defined component number if component Component.UNOS, Component.UNOV, Component.USSS, Component.USST, Component.UBMS or Component.UBMV */
    user: number;
}


/** Object function argument in GetMultipleData */
interface GetMultipleDataArgument_options {
    /** The extra data component number if component Component.SOX for solids, Component.BMX for beams or Component.SHX for shells and thick shells */
    extra: number;
    /** Integration point number to get the data at (ip &gt;= 1 or one of the constants Constant.TOP, Constant.MIDDLE or Constant.BOTTOM) */
    ip: number;
    /** On plane integration point number for shells and thick shells (op &gt;= 1 [default]) */
    op: number;
    /** The frame of reference to return values in. Either Constant.GLOBAL (default), Constant.LOCAL, Constant.CYLINDRICAL, Constant.USER_DEFINED or Constant.MATERIAL. This is only necessary for directional components (eg X stress) and then only when something other than the default Constant.GLOBAL coordinate system is to be used */
    referenceFrame: number;
    /** The user-defined component number if component Component.UNOS, Component.UNOV, Component.USSS, Component.USST, Component.UBMS or Component.UBMV */
    user: number;
}

declare class Beam {
/**
 * Blanks the beam in a graphics window
 * @param window GraphicsWindow) to blank the beam in
 */
    Blank(window: GraphicsWindow): void;

/**
 * Blanks all of the beams in the model
 * @param window GraphicsWindow) to blank the beams in
 * @param model Model that all the beams will be blanked in
 */
    static BlankAll(window: GraphicsWindow, model: Model): void;

/**
 * Blanks all of the beams in the model flagged with a defined flag
 * @param window GraphicsWindow) to blank the beams in
 * @param model Model that the flagged beams will be blanked in
 * @param flag Flag (see AllocateFlag) set on the beams to blank
 */
    static BlankFlagged(window: GraphicsWindow, model: Model, flag: number): void;

/**
 * Checks if the beam is blanked in a graphics window or not
 * @param window GraphicsWindow) in which to check if the beam is blanked
 * @returns true if blanked, false if not
 */
    Blanked(window: GraphicsWindow): boolean;

/**
 * Clears a flag on a beam
 * @param flag Flag (see AllocateFlag) to clear on the beam
 */
    ClearFlag(flag: number): void;

/**
 * Checks if the beam has been deleted or not
 * @returns true if deleted, false if not
 */
    Deleted(): boolean;

/**
 * Returns the first beam in the model (or null if there are no beams in the model)
 * @param model Model to get first beam in
 * @returns Beam object
 */
    static First(model: Model): Beam;

/**
 * Flags all of the beams in the model with a defined flag
 * @param model Model that all the beams will be flagged in
 * @param flag Flag (see AllocateFlag) to set on the beams
 */
    static FlagAll(model: Model, flag: number): void;

/**
 * Checks if the beam is flagged or not
 * @param flag Flag (see AllocateFlag) to test on the beam
 * @returns true if flagged, false if not
 */
    Flagged(flag: number): boolean;

/**
 * Returns the forces and moments for the beam
 * @param options Object containing options for getting data. Can be any of:
 * @returns Array containing the forces and moments [Fx, Fy, Fz, Mxx, Myy, Mzz] (or null if the value cannot be calculated)
 */
    ForceMoment(options?: ForceMomentArgument_options): array;

/**
 * Returns an array of Beam objects or properties for all of the beams in the model. If the optional property argument is not given then an array of Beam objects is returned. If the property argument is given, that property value for each beam is returned in the array instead of a Beam object
 * @param model Model that all the beams are in
 * @param property Name for property to get for all beams in the model
 * @returns Array of Beam objects or properties
 */
    static GetAll(model: Model, property?: string): Beam[];

/**
 * Returns the value for a data component. Also see GetMultipleData
 * @param component Component constant to get data for
 * @param options Object containing options for getting data. Can be any of:
 * @returns Number if a scalar component, array if a vector or tensor component (or null if the value cannot be calculated because it's not available in the model). If requesting an invalid component it will throw an error (e.g. Component.AREA of a node).
 */
    GetData(component: number, options?: GetDataArgument_options): number | array;

/**
 * Gets all of the beams in the model flagged with a defined flag. If the optional property argument is not given then an array of Beam objects is returned. If the property argument is given, that property value for each beam is returned in the array instead of a Beam object
 * @param model Model that the flagged beams are in
 * @param flag Flag (see AllocateFlag) set on the beams to get
 * @param property Name for property to get for all flagged beams in the model
 * @returns Array of Beam objects or properties
 */
    static GetFlagged(model: Model, flag: number, property?: string): Beam[];

/**
 * Returns the Beam object for beam in model with label (or null if it does not exist)
 * @param model Model to get beam in
 * @param label The Ansys LS-DYNA label for the beam in the model
 * @returns Beam object
 */
    static GetFromID(model: Model, label: number): Beam;

/**
 * Returns the Beam object for beam in model with index (or null if it does not exist)
 * @param model Model to get beam in
 * @param index The D3PLOT internal index in the model for beam, starting at 0.
 * @returns Beam object
 */
    static GetFromIndex(model: Model, index: number): Beam;

/**
 * Returns the value for a data component for multiple beams. For each beam a local property called data will be created containing a number if a scalar component, or an array if a vector or tensor component (or null if the value cannot be calculated). The data is also returned as an object. Also see GetData
 * @param component Component constant to get data for
 * @param items Array of Beam objects to get the data for. All of the beams must be in the same model.
 * @param options Object containing options for getting data. Can be any of:
 * @returns Object containing the data. A property is created in the object for each beam with the label. The value of the property is a number if a scalar component or an array if a vector or tensor component (or null if the value cannot be calculated)
 */
    static GetMultipleData(component: number, items: array[], options?: GetMultipleDataArgument_options): object;

/**
 * Returns the last beam in the model (or null if there are no beams in the model)
 * @param model Model to get last beam in
 * @returns Beam object
 */
    static Last(model: Model): Beam;

/**
 * Returns the local axes of the element in model space, expressed as direction cosines in a 2D array. Beam elements must have 3 nodes to be able to return local axes.
 * @returns array of arrays
 */
    LocalAxes(): array[];

/**
 * Returns the next beam in the model (or null if there is not one)
 * @returns Beam object
 */
    Next(): Beam;

/**
 * Allows the user to pick a beam from the screen
 * @returns Beam object or null if cancelled
 */
    static Pick(): Beam;

/**
 * Returns the previous beam in the model (or null if there is not one)
 * @returns Beam object
 */
    Previous(): Beam;

/**
 * Selects beams using an object menu
 * @param flag Flag (see AllocateFlag) to use when selecting beams
 * @returns The number of beams selected or null if menu cancelled
 */
    static Select(flag: number): number;

/**
 * Sets a flag on a beam
 * @param flag Flag (see AllocateFlag) to set on the beam
 */
    SetFlag(flag: number): void;

/**
 * Returns the topology for the beam in the model
 * @returns array of Node objects
 */
    Topology(): Node[];

/**
 * Returns the total number of beams in the model
 * @param model Model to get total in
 * @returns The number of beams
 */
    static Total(model: Model): number;

/**
 * Returns the total number of beams that have been deleted in a model in the state given by its state property
 * @param model Model to get total in
 * @returns The number of beams that have been deleted
 */
    static TotalDeleted(model: Model): number;

/**
 * Unblanks the beam in a graphics window
 * @param window GraphicsWindow) to unblank the beam in
 */
    Unblank(window: GraphicsWindow): void;

/**
 * Unblanks all of the beams in the model
 * @param window GraphicsWindow) to unblank the beams in
 * @param model Model that all the beams will be unblanked in
 */
    static UnblankAll(window: GraphicsWindow, model: Model): void;

/**
 * Unblanks all of the beams in the model flagged with a defined flag
 * @param window GraphicsWindow) to unblank the beams in
 * @param model Model that the flagged beams will be unblanked in
 * @param flag Flag (see AllocateFlag) set on the beams to unblank
 */
    static UnblankFlagged(window: GraphicsWindow, model: Model, flag: number): void;

/**
 * Unsets a defined flag on all of the beams in the model
 * @param model Model that the defined flag for all beams will be unset in
 * @param flag Flag (see AllocateFlag) to unset on the beams
 */
    static UnflagAll(model: Model, flag: number): void;

/** The colour of the beam */
    colour: Colour;
/** Component data for a beam passed as an argument to GetMultipleData. Note that data will only exist for the instance of the beam passed to GetMultipleData. i.e. it is a local property stored on the specific instance. It is not stored in the D3PLOT database */
    readonly data: number;
/** The display mode of the beam. Can be Constant.WIREFRAME, Constant.HIDDEN, Constant.SHADED or Constant.CURRENT. */
    displayMode: number;
/** The include file number in the model that the beam is in */
    readonly include: number;
/** The internal index for the beam in D3PLOT (starting at 0) */
    readonly index: number;
/** The number of integration points that the beam has */
    readonly integrationPoints: number;
/** The Ansys LS-DYNA label for the beam */
    readonly label: number;
/** The Material the beam has. This is only available if there is a ztf file for the model. If not null will be returned. If this is a PART_COMPOSITE then null will be returned. If the model comes from writing a PTF/d3plot file from PRIMER and the material was latent there, null will be returned. Part.GetCompositeData should be used to get material data in this case */
    readonly material: Material;
/** The Model that the beam is in */
    readonly model: Model;
/** The overlay colour of the beam */
    overlayColour: Colour;
/** The overlay mode of the beam. Can be Constant.NO_OVERLAY, Constant.FREE_EDGE, Constant.ALL_EDGES or Constant.CURRENT. */
    overlayMode: number;
/** The Part the beam is in */
    readonly part: Part;
/** The transparency of the beam between 0 (opaque) and 100 (clear) */
    transparency: number;
/** The type for the beam (will be Type.BEAM) */
    readonly type: number;
}

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

/** Colour black */
    static BLACK: number;
/** Colour blue */
    static BLUE: number;
/** Overlay colour defined in display options for objects */
    static CURRENT: number;
/** Colour cyan */
    static CYAN: number;
/** Colour dark orange */
    static DARK_ORANGE: number;
/** Default colour for objects */
    static DEFAULT: number;
/** Overlay colour same as entity colour for objects */
    static ENTITY: number;
/** Colour green */
    static GREEN: number;
/** Colour green/cyan */
    static GREEN_CYAN: number;
/** Colour grey */
    static GREY: number;
/** Colour light blue */
    static LIGHT_BLUE: number;
/** Colour magenta */
    static MAGENTA: number;
/** Colour medium blue */
    static MEDIUM_BLUE: number;
/** Colour orange */
    static ORANGE: number;
/** Colour red */
    static RED: number;
/** Colour red/magenta */
    static RED_MAGENTA: number;
/** Colour white */
    static WHITE: number;
/** Colour yellow */
    static YELLOW: number;
/** Colour yellow/green */
    static YELLOW_GREEN: number;
}


/** Object function argument in GetData */
interface GetDataArgument_options {
    /** The integration point to get the data for for shells and thick shells */
    ip: number;
    /** The on plan integration point to get the data for for fully integrated shells and thick shells. If omitted the first on plan integration point will be used */
    op: number;
}


/** Object function argument in PutData */
interface PutDataArgument_options {
    /** The integration point to set the data for for shells and thick shells */
    ip: number;
    /** The on plan integration point to set the data for for fully integrated shells and thick shells */
    op: number;
}


/** Object function argument in Component constructor */
interface Component_constructor_Argument_options {
    /** If .ubd files for components will be disposed of (deleted) when a model is closed or D3PLOT exits or not. The default is not to delete files. */
    dispose: boolean;
    /** Action to take if a component with this name already exists. Either Component.RENAME or Component.REPLACE (default) */
    exists: number;
    /** Location to store the .ubd files. See location for details. The default, if location is null, is for .ubd files to be written in the same directory as the Ansys LS-DYNA output files. This default can be changed with the d3plot*ubd_file_location preference. */
    location: string;
}

declare class Component {
/**
 * Deletes the next user defined binary data component.Do not use the component object after calling this method
 * @returns Component object
 */
    Delete(): Component;

/**
 * Returns the first user defined binary component in D3PLOT (or null if there are no components)
 * @returns Component object
 */
    static First(): Component;

/**
 * Returns the user defined binary data component for an item
 * @param item The Node, Beam, Shell, Solid or Tshell the data should be retrieved for
 * @param options Object containing extra information. Can contain any of:
 * @returns The component data
 */
    GetData(item: Node | Beam | Shell | Solid | Tshell, options?: GetDataArgument_options): number | array;

/**
 * Returns the user defined binary component in D3PLOT by ID (or null if the component does not exist)
 * @param number number of the component you want the Component object for
 * @returns Component object
 */
    static GetFromID(number: number): Component;

/**
 * Returns the user defined binary component in D3PLOT by name (or null if the component does not exist)
 * @param name name of the component you want the Component object for
 * @returns Component object
 */
    static GetFromName(name: string): Component;

/**
 * Returns the last user defined binary component in D3PLOT (or null if there are no components)
 * @returns Component object
 */
    static Last(): Component;

/**
 * Returns the next user defined binary data component (or null if there is not one)
 * @returns Component object
 */
    Next(): Component;

/**
 * Returns the previous user defined binary data component (or null if there is not one)
 * @returns Component object
 */
    Previous(): Component;

/**
 * Sets the user defined binary data component for an item
 * @param item The Node, Beam, Shell, Solid or Tshell the data should be set for
 * @param data The data to set. If the component data property is Component.SCALAR this will be a single value. If the component data property is Component.VECTOR this is an array with length 3. If the component data property is Component.TESNOR this is an array with length 6
 * @param options Object containing extra information. Can contain any of:
 */
    PutData(item: Node | Beam | Shell | Solid | Tshell, data: number | array[], options?: PutDataArgument_options): void;

/**
 * Returns the total number of user defined binary components in D3PLOT.
 * @returns Total number of user binary components
 */
    static Total(): number;

/**
 * Creates a new user defined binary data component in D3PLOT
 * @param name Name for the component
 * @param component The type of component stored in the user defined binary component. Either Component.NODE, Component.BEAM, Component.SOLID_SHELL_TSHELL or Component.OTHER
 * @param data The type of data stored in the user defined binary component. Either Component.SCALAR, Component.TENSOR or Component.VECTOR
 * @param options Object containing extra information. Can contain any of:
 * @returns Model object
 */
    constructor(name: string, component: number, data: number, options?: Component_constructor_Argument_options);

/** The type of component stored in the user defined binary component. Either Component.NODE, Component.BEAM, Component.SOLID_SHELL_TSHELL or Component.OTHER */
    readonly componentType: number;
/** The type of data stored in the user defined binary component. Either Component.SCALAR, Component.TENSOR or Component.VECTOR */
    readonly dataType: number;
/** If .ubd files for components will be disposed of (deleted) when a model is closed or D3PLOT exits or not. The default is not to delete files. */
    readonly dispose: boolean;
/** Where the user defined binary component will be written to disk. This can be an absolute or relative pathname. If a relative path is used, this is relative to the Ansys LS-DYNA results files. This is done by giving a pathname beginning with "JOBDIR". For example "JOBDIR/.." refers to the parent directory where the results files are. The default, if location is null, is for .ubd files to be written in the same directory as the Ansys LS-DYNA output files. Alternatively, the data can just be kept in memory and not written to disk by using Component.IN_CORE. */
    readonly location: string;
/** The name for the user defined binary component */
    readonly name: string;
/** ALE denisty */
    static ADENS: number;
/** ALE dominant fraction */
    static ADOMF: number;
/** Acceleration magnitude */
    static AM: number;
/** ALE multi-material group id */
    static AMMG: number;
/** ALE multi-material group mass */
    static AMMS: number;
/** Area */
    static AREA: number;
/** Acceleration vector [AX, AY, AZ] */
    static AV: number;
/** X acceleration */
    static AX: number;
/** Y acceleration */
    static AY: number;
/** Z acceleration */
    static AZ: number;
/** Axial energy density */
    static BAED: number;
/** Axial energy */
    static BAEN: number;
/** Bending energy density */
    static BBED: number;
/** User-defined beam component */
    static BEAM: number;
/** Axial strain */
    static BEAX: number;
/** Energy loss */
    static BENL: number;
/** Energy loss density */
    static BENLD: number;
/** Energy loss percentage */
    static BENLP: number;
/** Effective plastic strain */
    static BEP: number;
/** Force and moment vector [BFX, BFY, BFZ, BMXX, BMYY, BMZZ] */
    static BFMV: number;
/** Force magnitude */
    static BFR: number;
/** X axial force */
    static BFX: number;
/** Y axial force */
    static BFY: number;
/** Z axial force */
    static BFZ: number;
/** Internal energy */
    static BIE: number;
/** Internal energy density */
    static BIED: number;
/** Kinetic energy */
    static BKEN: number;
/** Kinetic energy density */
    static BKEND: number;
/** Kinetic energy percentage */
    static BKENP: number;
/** Extra beam data */
    static BMX: number;
/** XX torsional moment */
    static BMXX: number;
/** Y moment at end 1 */
    static BMY1: number;
/** Y moment at end 2 */
    static BMY2: number;
/** YY bending moment */
    static BMYY: number;
/** Z moment at end 1 */
    static BMZ1: number;
/** Z moment at end 2 */
    static BMZ2: number;
/** ZZ bending moment */
    static BMZZ: number;
/** Plastic energy at end 1 */
    static BPE1: number;
/** Plastic energy at end 2 */
    static BPE2: number;
/** Moment magnitude */
    static BRM: number;
/** Torsional rotation */
    static BRXX: number;
/** Y rotation at end 1 */
    static BRY1: number;
/** Y rotation at end 2 */
    static BRY2: number;
/** Z rotation at end 1 */
    static BRZ1: number;
/** Z rotation at end 2 */
    static BRZ2: number;
/** Total axial strain */
    static BSAX: number;
/** Strain energy */
    static BSEN: number;
/** Strain energy density */
    static BSEND: number;
/** Strain energy percentage */
    static BSENP: number;
/** Axial stress */
    static BSXX: number;
/** XY shear stress */
    static BSXY: number;
/** ZX shear stress */
    static BSZX: number;
/** Basic (undeformed) vector [BX, BY, BZ] */
    static BV: number;
/** Basic (undeformed) X coordinate */
    static BX: number;
/** Basic (undeformed) Y coordinate */
    static BY: number;
/** Basic (undeformed) Z coordinate */
    static BZ: number;
/** Contact segment area */
    static CAREA: number;
/** Contact global X force */
    static CFGX: number;
/** Contact global Y force */
    static CFGY: number;
/** Contact global Z force */
    static CFGZ: number;
/** Contact local X force */
    static CFLX: number;
/** Contact local Y force */
    static CFLY: number;
/** Contact local Z force */
    static CFLZ: number;
/** Contact force magnitude */
    static CFM: number;
/** Contact normal stress */
    static CSN: number;
/** Contact tangential stress */
    static CST: number;
/** Contact local X stress */
    static CSX: number;
/** Contact local Y stress */
    static CSY: number;
/** Current vector [CX, CY, CZ] */
    static CV: number;
/** Current X coordinate */
    static CX: number;
/** Current Y coordinate */
    static CY: number;
/** Current Z coordinate */
    static CZ: number;
/** Material density */
    static DENS: number;
/** Displacement magnitude */
    static DM: number;
/** dTemp / dTime */
    static DTDT: number;
/** Displacement vector [DX, DY, DZ] */
    static DV: number;
/** X displacement */
    static DX: number;
/** Y displacement */
    static DY: number;
/** Z displacement */
    static DZ: number;
/** 2D (in-plane) max principal strain */
    static E2MAX: number;
/** 2D (in-plane) min principal strain */
    static E2MIN: number;
/** 2D (in-plane) max shear strain */
    static E2SHEAR: number;
/** Average strain */
    static EAV: number;
/** Internal energy density */
    static EDEN: number;
/** Mass */
    static EMASS: number;
/** Max prinicipal strain */
    static EMAX: number;
/** Middle prinicipal strain */
    static EMID: number;
/** Min prinicipal strain */
    static EMIN: number;
/** Max shear strain */
    static EMS: number;
/** Engineering Major strain */
    static ENGMAJ: number;
/** Engineering Minor strain */
    static ENGMIN: number;
/** Engineering Thickness strain */
    static ENGTHK: number;
/** Energy loss (Nastran OP2 results only) */
    static ENL: number;
/** Energy loss density (Nastran OP2 results only) */
    static ENLD: number;
/** Energy loss percentage (Nastran OP2 results only) */
    static ENLP: number;
/** Effective plastic strain */
    static EPL: number;
/** Strain rate */
    static ERATE: number;
/** 2D (in-plane) principal strain ratio */
    static ERATIO: number;
/** Strain tensor [EXX, EYY, EZZ, EXY, EYZ, EZX] */
    static ETEN: number;
/** von Mises strain */
    static EVON: number;
/** X strain */
    static EXX: number;
/** XY shear strain */
    static EXY: number;
/** Y strain */
    static EYY: number;
/** YZ shear strain */
    static EYZ: number;
/** ZX shear strain */
    static EZX: number;
/** Z strain */
    static EZZ: number;
/** Failure strain */
    static FSTRN: number;
/** Internal energy */
    static GIE: number;
/** Kinetic energy */
    static GKE: number;
/** Mass */
    static GMASS: number;
/** Momentum magnitude */
    static GMM: number;
/** X Momentum */
    static GMX: number;
/** Y Momentum */
    static GMY: number;
/** Z Momentum */
    static GMZ: number;
/** Total energy */
    static GTE: number;
/** Velocity magnitude */
    static GVM: number;
/** X Velocity */
    static GVX: number;
/** Y Velocity */
    static GVY: number;
/** Z Velocity */
    static GVZ: number;
/** Hourglass energy */
    static HGEN: number;
/** held in memory */
    static IN_CORE: number;
/** Kinetic energy (Nastran OP2 results only) */
    static KEN: number;
/** Kinetic energy density (Nastran OP2 results only) */
    static KEND: number;
/** Kinetic energy percentage (Nastran OP2 results only) */
    static KENP: number;
/** Lode angle */
    static LODE_A: number;
/** Lode parameter */
    static LODE_P: number;
/** Lode parameter alt */
    static LODE_PA: number;
/** Added mass */
    static MADD: number;
/** User-defined nodal component */
    static NODE: number;
/** User-defined other (LSDA) component */
    static OTHER: number;
/** Average plastic strain */
    static PEAV: number;
/** Plastic strain magnitude */
    static PEMAG: number;
/** Max principal plastic strain */
    static PEMAX: number;
/** Middle principal plastic strain */
    static PEMID: number;
/** Min principal plastic strain */
    static PEMIN: number;
/** Max plastic shear strain */
    static PEMS: number;
/** Plastic strain tensor [EXX, EYY, EZZ, EXY, EYZ, EZX] */
    static PETEN: number;
/** X Plastic strain */
    static PEXX: number;
/** XY Plastic shear strain */
    static PEXY: number;
/** Y Plastic strain */
    static PEYY: number;
/** XY Plastic shear strain */
    static PEYZ: number;
/** ZX Plastic shear strain */
    static PEZX: number;
/** Z Plastic strain */
    static PEZZ: number;
/** Poisson's ratio */
    static PRAT: number;
/** Rotation acceleration magnitude */
    static RAM: number;
/** Rotation acceleration vector [RAX, RAY, RAZ] */
    static RAV: number;
/** X rotation acceleration */
    static RAX: number;
/** Y rotation acceleration */
    static RAY: number;
/** Z rotation acceleration */
    static RAZ: number;
/** Rotation displacement magnitude */
    static RDM: number;
/** Rotation displacement vector [RDX, RDY, RDZ] */
    static RDV: number;
/** X rotation displacement */
    static RDX: number;
/** Y rotation displacement */
    static RDY: number;
/** Z rotation displacement */
    static RDZ: number;
/** Renames the name of the component by adding a suffix to make it unique so any existing component of this name (and data) will be left unchanged and the new one will not clash with it */
    static RENAME: number;
/** Replaces any existing component, replacing it with this definition. This means that any existing data for the user-defined component of this name is deleted and the component is re-initialised */
    static REPLACE: number;
/** X force resultant */
    static RFX: number;
/** XY force resultant */
    static RFXY: number;
/** Y force resultant */
    static RFY: number;
/** MX moment resultant */
    static RMX: number;
/** MXY moment resultant */
    static RMXY: number;
/** MY moment resultant */
    static RMY: number;
/** XZ shear force resultant */
    static RQX: number;
/** YZ shear force resultant */
    static RQY: number;
/** Retractor force */
    static RT_F: number;
/** Retractor pull-out */
    static RT_P: number;
/** Rotation velocity magnitude */
    static RVM: number;
/** Relative volume (solid) */
    static RVOL: number;
/** Rotation velocity vector [RVX, RVY, RVZ] */
    static RVV: number;
/** X rotation velocity */
    static RVX: number;
/** Y rotation velocity */
    static RVY: number;
/** Z rotation velocity */
    static RVZ: number;
/** 2D (in-plane) max principal stress */
    static S2MAX: number;
/** 2D (in-plane) min principal stress */
    static S2MIN: number;
/** 2D (in-plane) max shear stress */
    static S2SHEAR: number;
/** Average stress (pressure) */
    static SAV: number;
/** Seatbelt axial force */
    static SB_F: number;
/** Seatbelt length */
    static SB_L: number;
/** Scalar data (1 value) */
    static SCALAR: number;
/** Strain energy density */
    static SED: number;
/** Strain energy (Nastran OP2 results only) */
    static SEN: number;
/** Strain energy density (Nastran OP2 results only) */
    static SEND: number;
/** Strain energy percentage (Nastran OP2 results only) */
    static SENP: number;
/** Extra shell and thick shell data */
    static SHX: number;
/** Max principal stress */
    static SMAX: number;
/** Middle principal stress */
    static SMID: number;
/** Min principal stress */
    static SMIN: number;
/** Max shear stress */
    static SMS: number;
/** User-defined solid, shell and thick shell component */
    static SOLID_SHELL_TSHELL: number;
/** Extra solid data */
    static SOX: number;
/** SPC force (vector data at nodes) */
    static SPC_F: number;
/** SPC moment (vector data at nodes) */
    static SPC_M: number;
/** Spring elongation */
    static SP_E: number;
/** Spring axial force */
    static SP_F: number;
/** Spring torsional moment */
    static SP_M: number;
/** Spring rotation */
    static SP_R: number;
/** Slipring pull-through */
    static SR_P: number;
/** Stress tensor [SXX, SYY, SZZ, SXY, SYZ, SZX] */
    static STEN: number;
/** signed von Mises stress */
    static SVON: number;
/** Spotweld axial force */
    static SW_F: number;
/** Spotweld failure */
    static SW_FAIL: number;
/** Spotweld shear force */
    static SW_S: number;
/** Spotweld failure time */
    static SW_TIME: number;
/** Spotweld torsion moment */
    static SW_TRSN: number;
/** X stress */
    static SXX: number;
/** XY stress */
    static SXY: number;
/** Y stress */
    static SYY: number;
/** YZ stress */
    static SYZ: number;
/** ZX stress */
    static SZX: number;
/** Z stress */
    static SZZ: number;
/** Nodal (shell) bottom surface temperature */
    static TBOT: number;
/** Average thermal strain */
    static TEAV: number;
/** Max principal thermal strain */
    static TEMAX: number;
/** Middle principal thermal strain */
    static TEMID: number;
/** Min principal thermal strain */
    static TEMIN: number;
/** Nodal temperature */
    static TEMP: number;
/** Max thermal shear strain */
    static TEMS: number;
/** Tensor data (6 values) */
    static TENSOR: number;
/** Thermal strain tensor [EXX, EYY, EZZ, EXY, EYZ, EZX] */
    static TETEN: number;
/** X Thermal strain */
    static TEXX: number;
/** XY Thermal shear strain */
    static TEXY: number;
/** Y Thermal strain */
    static TEYY: number;
/** XY Thermal shear strain */
    static TEYZ: number;
/** ZX Thermal shear strain */
    static TEZX: number;
/** Z Thermal strain */
    static TEZZ: number;
/** Temperature magnitude */
    static TFM: number;
/** Temperature vector [TFX, TFY, TFZ] */
    static TFV: number;
/** X temperature flux */
    static TFX: number;
/** Y temperature flux */
    static TFY: number;
/** Z temperature flux */
    static TFZ: number;
/** Thickness */
    static THK: number;
/** Nodal (shell) middle surface temperature */
    static TMID: number;
/** Triaxiality */
    static TRI: number;
/** Timestep */
    static TSTP: number;
/** Nodal (shell) top surface temperature */
    static TTOP: number;
/** Beam scalar */
    static UBMS: number;
/** Beam vector */
    static UBMV: number;
/** Node scalar */
    static UNOS: number;
/** Node vector */
    static UNOV: number;
/** Solid and shell scalar */
    static USSS: number;
/** Solid and shell tensor */
    static USST: number;
/** Vector data (3 values) */
    static VECTOR: number;
/** Velocity magnitude */
    static VM: number;
/** Volume (solid) */
    static VOL: number;
/** Velocity vector [VX, VY, VZ] */
    static VV: number;
/** X velocity */
    static VX: number;
/** Y velocity */
    static VY: number;
/** Z velocity */
    static VZ: number;
/** Database X-sect area */
    static XSEC_A: number;
/** Database X-sect force (vector data) */
    static XSEC_F: number;
/** Database X-sect moment (vector data) */
    static XSEC_M: number;
/** Young's modulus */
    static YMOD: number;
/** Yield stress */
    static YSTRS: number;
/** Yield Utilisation Factor */
    static YUTF: number;
/** Yield Utilisation Percentage */
    static YUTP: number;
}


/** Object returned by GetElemsInPly */
interface GetElemsInPlyReturn {
    /** Internal element ids */
    list: number[];
    /** Number of elements in list */
    nn: number;
    /** Element type code */
    type: number;
}


/** Object returned by GetPlysInLayup */
interface GetPlysInLayupReturn {
    /** Array of internal ply indices */
    list: number[];
    /** Number of plys in list */
    nn: number;
}

/**
 * Returns an object containing the number of elements in ply &lt;ply_id&gt;, the element type code, and also an array &lt;list[ ]&gt; of their internal indices. If there are no elements in the ply then false is returned. Ply data is only available if a .ztf file containing composite information has been read.
 * @param ply_id The ply in which to return the list of elements. If +ve, the internal ply number starting at 1. If -ve, the external ply label. Internal numbers will be many times faster to process.
 * @param state_id State number to be used instead of the current state
 */
declare function GetElemsInPly(ply_id: number, state_id?: number): GetElemsInPlyReturn;

/**
 * Return the integration point of &lt;type/item&gt; in ply &lt;ply_id&gt;. If the &gt;type/item&lt; is not in the ply then false is returned. Ply data is only available if a .ztf file containing composite information has been read.
 * @param type_code A valid element type code (Currently only SHELL is valid)
 * @param item If +ve, the internal item number starting at 1. If -ve, the external label of the item. Internal numbers will be many times faster to process.
 * @param ply_id If +ve, the internal ply index. If -ve, the external ply label. Internal numbers will be many times faster to process.
 * @param state_id State number to be used instead of the current state
 * @returns integer
 */
declare function GetPlyIntPoint(type_code: number, item: number, ply_id: number, state_id?: number): number;

/**
 * Returns an object containing the number of plys in layup &lt;layup_id&gt; and an array &lt;list[ ]&gt; of their internal indices. If there are no plys in the layup then false is returned. Ply data is only available if a .ztf file containing composite information has been read.
 * @param layup_id The layup in which to return the list of plys. If +ve an internal layup index, if -ve an external layup label
 * @param state_id State number to be used instead of the current state
 */
declare function GetPlysInLayup(layup_id: number, state_id?: number): GetPlysInLayupReturn;

declare class Constant {
/** All of a category */
    static ALL: number;
/** Overlay for all edges */
    static ALL_EDGES: number;
/** Average across all integration points for beams */
    static AVERAGE: number;
/** Basic (eulerian) space */
    static BASIC: number;
/** Bottom shell surface */
    static BOTTOM: number;
/** Constant X definition method */
    static CONST_X: number;
/** Constant Y definition method */
    static CONST_Y: number;
/** Constant Z definition method */
    static CONST_Z: number;
/** Current display or overlay mode */
    static CURRENT: number;
/** Current value result */
    static CURRENT_VAL: number;
/** Number of non-parallel cut plane directions */
    static CUT_SECTION: number;
/** Cylindrical coordinate system */
    static CYLINDRICAL: number;
/** Deformed (lagrangian) space */
    static DEFORMED: number;
/** Delete */
    static DELETE: number;
/** Number of families */
    static FAMILY: number;
/** Overlay for free edges */
    static FREE_EDGE: number;
/** Global coordinate system */
    static GLOBAL: number;
/** Greater than (&gt;) */
    static GT: number;
/** Greater than or equals (&gt;=) */
    static GTEQ: number;
/** Hidden display mode */
    static HIDDEN: number;
/** Number of includes */
    static INCLUDE: number;
/** Intersection mode for multiple cut directions */
    static INTERSECTION: number;
/** Leave behind (eg don't delete) */
    static LEAVE: number;
/** Element local coordinate system */
    static LOCAL: number;
/** Ansys LS-DYNA definition method */
    static LS_DYNA: number;
/** Less than (&lt;) */
    static LT: number;
/** Less than or equals (&lt;=) */
    static LTEQ: number;
/** Magnitude result */
    static MAGNITUDE: number;
/** Value with maximal magintude across all integration points for beams, shells or tshells */
    static MAG_ALL: number;
/** Material axes coordinate system */
    static MATERIAL: number;
/** Maximum value */
    static MAX: number;
/** Maximum across all integration points for beams, shells or tshells */
    static MAX_ALL: number;
/** Middle shell surface */
    static MIDDLE: number;
/** Minimum value */
    static MIN: number;
/** Minimum across all integration points for beams, shells or tshells */
    static MIN_ALL: number;
/** Number of models */
    static MODEL: number;
/** 3 nodes definition method */
    static N3: number;
/** Number of "Extra" Solid variables */
    static NEIPH: number;
/** Number of "Extra" Shell variables */
    static NEIPS: number;
/** Number of "Extra" Thick Shell variables */
    static NEIPT: number;
/** Number of Beam integration points */
    static NIP_B: number;
/** Number of Solid integration points */
    static NIP_H: number;
/** Number of Shell integration points */
    static NIP_S: number;
/** Number of Thick Shell integration points */
    static NIP_T: number;
/** Positive or negative action Normal */
    static NORMAL: number;
/** No overlay */
    static NO_OVERLAY: number;
/** Number of on-plan integration points written */
    static N_ON_PLAN: number;
/** Number of user-defined beam scalar components */
    static N_UBMS: number;
/** Number of user-defined beam vector components */
    static N_UBMV: number;
/** Number of user-defined node scalar components */
    static N_UNOS: number;
/** Number of user-defined node vector components */
    static N_UNOV: number;
/** Number of user-defined solid/shell scalar components */
    static N_USSS: number;
/** Number of user-defined solid/shell tensor components */
    static N_USST: number;
/** Switch off */
    static OFF: number;
/** Positive or negative action Omit */
    static OMIT: number;
/** Switch on */
    static ON: number;
/** Origin and vectors definition method */
    static OR_AND_V: number;
/** Positive or negative action Outline (wire drawing) */
    static OUTLINE: number;
/** Shaded display mode */
    static SHADED: number;
/** Number of states */
    static STATE: number;
/** Top shell surface */
    static TOP: number;
/** Positive or negative action Transparent */
    static TRANSPARENT: number;
/** Union mode for multiple cut directions */
    static UNION: number;
/** Number of user-defined components */
    static USER: number;
/** User-defined coordinate system */
    static USER_DEFINED: number;
/** Wireframe display mode */
    static WIREFRAME: number;
/** Index in a vector/coordinate array containing the X component */
    static X: number;
/** Index in a tensor array containing the XX component */
    static XX: number;
/** Index in a tensor array containing the XY component */
    static XY: number;
/** Index in a vector/coordinate array containing the Y component */
    static Y: number;
/** Index in a tensor array containing the YY component */
    static YY: number;
/** Index in a tensor array containing the YZ component */
    static YZ: number;
/** Index in a vector/coordinate array containing the Z component */
    static Z: number;
/** Index in a tensor array containing the ZX component */
    static ZX: number;
/** Index in a tensor array containing the ZZ component */
    static ZZ: number;
}


/** Object function argument in GetData */
interface GetDataArgument_options {
    /** The extra data component number if component Component.SOX for solids, Component.BMX for beams or Component.SHX for shells and thick shells */
    extra: number;
    /** Integration point number to get the data at (ip &gt;= 1 or one of the constants Constant.TOP, Constant.MIDDLE or Constant.BOTTOM). If the integration point is not defined it will use the integration point defined on the current GUI "data" panel, which defaults to the middle surface for shells, thick shells, and solids, and Mag All for beams, but may vary if changed by an interactive user. If consistent output from a script is required, independent of any prior interactive activity, an explicit integration point or surface should be defined */
    ip: number;
    /** On plane integration point number for shells and thick shells (op &gt;= 1 [default]) */
    op: number;
    /** The frame of reference to return values in. Either Constant.GLOBAL (default), Constant.LOCAL, Constant.CYLINDRICAL, Constant.USER_DEFINED or Constant.MATERIAL. This is only necessary for directional components (eg X stress) and then only when something other than the default Constant.GLOBAL coordinate system is to be used */
    referenceFrame: number;
    /** The user-defined component number if component Component.UNOS, Component.UNOV, Component.USSS, Component.USST, Component.UBMS or Component.UBMV */
    user: number;
}


/** Object function argument in GetMultipleData */
interface GetMultipleDataArgument_options {
    /** The extra data component number if component Component.SOX for solids, Component.BMX for beams or Component.SHX for shells and thick shells */
    extra: number;
    /** Integration point number to get the data at (ip &gt;= 1 or one of the constants Constant.TOP, Constant.MIDDLE or Constant.BOTTOM) */
    ip: number;
    /** On plane integration point number for shells and thick shells (op &gt;= 1 [default]) */
    op: number;
    /** The frame of reference to return values in. Either Constant.GLOBAL (default), Constant.LOCAL, Constant.CYLINDRICAL, Constant.USER_DEFINED or Constant.MATERIAL. This is only necessary for directional components (eg X stress) and then only when something other than the default Constant.GLOBAL coordinate system is to be used */
    referenceFrame: number;
    /** The user-defined component number if component Component.UNOS, Component.UNOV, Component.USSS, Component.USST, Component.UBMS or Component.UBMV */
    user: number;
}

declare class Contact {
/**
 * Blanks the contact in a graphics window
 * @param window GraphicsWindow) to blank the contact in
 */
    Blank(window: GraphicsWindow): void;

/**
 * Blanks all of the contacts in the model
 * @param window GraphicsWindow) to blank the contacts in
 * @param model Model that all the contacts will be blanked in
 */
    static BlankAll(window: GraphicsWindow, model: Model): void;

/**
 * Blanks all of the contacts in the model flagged with a defined flag
 * @param window GraphicsWindow) to blank the contacts in
 * @param model Model that the flagged contacts will be blanked in
 * @param flag Flag (see AllocateFlag) set on the contacts to blank
 */
    static BlankFlagged(window: GraphicsWindow, model: Model, flag: number): void;

/**
 * Checks if the contact is blanked in a graphics window or not
 * @param window GraphicsWindow) in which to check if the contact is blanked
 * @returns true if blanked, false if not
 */
    Blanked(window: GraphicsWindow): boolean;

/**
 * Clears a flag on a contact
 * @param flag Flag (see AllocateFlag) to clear on the contact
 */
    ClearFlag(flag: number): void;

/**
 * Returns the first contact in the model (or null if there are no contacts in the model)
 * @param model Model to get first contact in
 * @returns Contact object
 */
    static First(model: Model): Contact;

/**
 * Flags all of the contacts in the model with a defined flag
 * @param model Model that all the contacts will be flagged in
 * @param flag Flag (see AllocateFlag) to set on the contacts
 */
    static FlagAll(model: Model, flag: number): void;

/**
 * Checks if the contact is flagged or not
 * @param flag Flag (see AllocateFlag) to test on the contact
 * @returns true if flagged, false if not
 */
    Flagged(flag: number): boolean;

/**
 * Returns an array of Contact objects or properties for all of the contacts in the model. If the optional property argument is not given then an array of Contact objects is returned. If the property argument is given, that property value for each contact is returned in the array instead of a Contact object
 * @param model Model that all the contacts are in
 * @param property Name for property to get for all contacts in the model
 * @returns Array of Contact objects or properties
 */
    static GetAll(model: Model, property?: string): Contact[];

/**
 * Returns the value for a data component. Also see GetMultipleData
 * @param component Component constant to get data for
 * @param options Object containing options for getting data. Can be any of:
 * @returns Number if a scalar component, array if a vector or tensor component (or null if the value cannot be calculated because it's not available in the model). If requesting an invalid component it will throw an error (e.g. Component.AREA of a node).
 */
    GetData(component: number, options?: GetDataArgument_options): number | array;

/**
 * Gets all of the contacts in the model flagged with a defined flag. If the optional property argument is not given then an array of Contact objects is returned. If the property argument is given, that property value for each contact is returned in the array instead of a Contact object
 * @param model Model that the flagged contacts are in
 * @param flag Flag (see AllocateFlag) set on the contacts to get
 * @param property Name for property to get for all flagged contacts in the model
 * @returns Array of Contact objects or properties
 */
    static GetFlagged(model: Model, flag: number, property?: string): Contact[];

/**
 * Returns the Contact object for contact in model with label (or null if it does not exist)
 * @param model Model to get contact in
 * @param label The Ansys LS-DYNA label for the contact in the model
 * @returns Contact object
 */
    static GetFromID(model: Model, label: number): Contact;

/**
 * Returns the Contact object for contact in model with index (or null if it does not exist)
 * @param model Model to get contact in
 * @param index The D3PLOT internal index in the model for contact, starting at 0.
 * @returns Contact object
 */
    static GetFromIndex(model: Model, index: number): Contact;

/**
 * Returns the value for a data component for multiple contacts. For each contact a local property called data will be created containing a number if a scalar component, or an array if a vector or tensor component (or null if the value cannot be calculated). The data is also returned as an object. Also see GetData
 * @param component Component constant to get data for
 * @param items Array of Contact objects to get the data for. All of the contacts must be in the same model.
 * @param options Object containing options for getting data. Can be any of:
 * @returns Object containing the data. A property is created in the object for each contact with the label. The value of the property is a number if a scalar component or an array if a vector or tensor component (or null if the value cannot be calculated)
 */
    static GetMultipleData(component: number, items: array[], options?: GetMultipleDataArgument_options): object;

/**
 * Gets a node for a contact
 * @param side The side of the contact to get the node for. Either Contact.SURFA or Contact.SURFB
 * @param index index of the node to get. 0 &lt;= index &lt; aNodes for side SURFA 0 &lt;= index &lt; bNodes for side SURFB
 * @returns Node object
 */
    GetNode(side: number, index: number): Node;

/**
 * Gets a segment for a contact
 * @param side The side of the contact to get the segment for. Either Contact.SURFA or Contact.SURFB
 * @param index index of the segment to get. 0 &lt;= index &lt; aSegments for side SURFA 0 &lt;= index &lt; bSegments for side SURFB
 * @returns Segment object
 */
    GetSegment(side: number, index: number): Segment;

/**
 * Returns the last contact in the model (or null if there are no contacts in the model)
 * @param model Model to get last contact in
 * @returns Contact object
 */
    static Last(model: Model): Contact;

/**
 * Returns the next contact in the model (or null if there is not one)
 * @returns Contact object
 */
    Next(): Contact;

/**
 * Allows the user to pick a contact from the screen
 * @returns Contact object or null if cancelled
 */
    static Pick(): Contact;

/**
 * Returns the previous contact in the model (or null if there is not one)
 * @returns Contact object
 */
    Previous(): Contact;

/**
 * Selects contacts using an object menu
 * @param flag Flag (see AllocateFlag) to use when selecting contacts
 * @returns The number of contacts selected or null if menu cancelled
 */
    static Select(flag: number): number;

/**
 * Sets a flag on a contact
 * @param flag Flag (see AllocateFlag) to set on the contact
 */
    SetFlag(flag: number): void;

/**
 * Returns the total number of contacts in the model
 * @param model Model to get total in
 * @returns The number of contacts
 */
    static Total(model: Model): number;

/**
 * Unblanks the contact in a graphics window
 * @param window GraphicsWindow) to unblank the contact in
 */
    Unblank(window: GraphicsWindow): void;

/**
 * Unblanks all of the contacts in the model
 * @param window GraphicsWindow) to unblank the contacts in
 * @param model Model that all the contacts will be unblanked in
 */
    static UnblankAll(window: GraphicsWindow, model: Model): void;

/**
 * Unblanks all of the contacts in the model flagged with a defined flag
 * @param window GraphicsWindow) to unblank the contacts in
 * @param model Model that the flagged contacts will be unblanked in
 * @param flag Flag (see AllocateFlag) set on the contacts to unblank
 */
    static UnblankFlagged(window: GraphicsWindow, model: Model, flag: number): void;

/**
 * Unsets a defined flag on all of the contacts in the model
 * @param model Model that the defined flag for all contacts will be unset in
 * @param flag Flag (see AllocateFlag) to unset on the contacts
 */
    static UnflagAll(model: Model, flag: number): void;

/** Total number of nodes on the SURFA side of the contact */
    readonly aNodes: number;
/** Total number of segments on the SURFA side of the contact */
    readonly aSegments: number;
/** Total number of nodes on the SURFB side of the contact */
    readonly bNodes: number;
/** Total number of segments on the SURFB side of the contact */
    readonly bSegments: number;
/** The colour of the contact */
    colour: Colour;
/** Component data for a contact passed as an argument to GetMultipleData. Note that data will only exist for the instance of the contact passed to GetMultipleData. i.e. it is a local property stored on the specific instance. It is not stored in the D3PLOT database */
    readonly data: number;
/** The display mode of the contact. Can be Constant.WIREFRAME, Constant.HIDDEN, Constant.SHADED or Constant.CURRENT. */
    displayMode: number;
/** The include file number in the model that the contact is in */
    readonly include: number;
/** The internal index for the contact in D3PLOT (starting at 0) */
    readonly index: number;
/** The Ansys LS-DYNA label for the contact */
    readonly label: number;
/** The Model that the contact is in */
    readonly model: Model;
/** The name of the contact type */
    readonly name: string;
/** The overlay colour of the contact */
    overlayColour: Colour;
/** The overlay mode of the contact. Can be Constant.NO_OVERLAY, Constant.FREE_EDGE, Constant.ALL_EDGES or Constant.CURRENT. */
    overlayMode: number;
/** The title of the contact */
    readonly title: string;
/** The transparency of the contact between 0 (opaque) and 100 (clear) */
    transparency: number;
/** The type for the contact (will be Type.CONTACT) */
    readonly type: number;
/** SURFA side of the contact */
    static SURFA: number;
/** SURFB side of the contact */
    static SURFB: number;
}


/** Object returned by GetSegmsInSurface */
interface GetSegmsInSurfaceReturn {
    /** End index of reference surface segments */
    ms_end: number;
    /** Start index of reference surface segments */
    ms_start: number;
    /** End index of tracked surface segments */
    ss_end: number;
    /** Start index of tracked surface segments */
    ss_start: number;
}

/**
 * Returns the start and end indices of the tracked and reference segments in a contact surface
 * @param surface_id The contact surface in which to return the list of segments. If +ve, the internal surface number starting at 1. If -ve, the external surface label. Internal numbers will be many times faster to process.
 */
declare function GetSegmsInSurface(surface_id: number): GetSegmsInSurfaceReturn;

/**
 * Spools through the nodes on a contact surface
 * @param surface_id The contact surface in which to spool. If +ve, the internal surface number starting at 1. If -ve, the external surface label. Internal numbers will be many times faster to process.
 * @param index Index of node to get in contact surface. To setup the spool, this has to be set to zero initially
 * @param side The side of the contact surface: Contact.SURFA or Contact.SURFB
 * @returns integer. If the &lt;index&gt; is zero then this will be the number of nodes on the surface. If it's greater than zero then the return value is the index'th node in the surface. If the call fails then false is returned.
 */
declare function SpoolNodesInSurface(surface_id: number, index: number, side: number): number;


/** Object function argument in GetCutCoords */
interface GetCutCoordsArgument_options {
    /** State number to be used. If omitted, the current state of the graphics window of the CutSection object will be used. */
    stateID?: number;
}


/** Object returned by GetForces */
interface GetForcesReturn {
    /** Cut section area */
    area: number;
    /** Cut section centroid, [Cx, Cy, Cz] */
    centroid: number[];
    /** 3 Forces, [Fx, Fy, Fz] */
    force: number[];
    /** 3 Moments, [Mxx, Myy, Mzz] */
    moment: number[];
}


/** Object function argument in GetForces */
interface GetForcesArgument_options {
    /** false to omit blanked elements (default), true to include them */
    includeBlanked?: boolean;
    /** Model that exists in the window of this cut section. If omitted the first model in the window will be used. */
    model?: Model;
    /** If defined, only forces in the specified part are computed. */
    part?: Part;
    /** State number to be used. If omitted the state of the window's current frame will be used. */
    stateID?: number;
}


/** Object function argument in Propagate */
interface PropagateArgument_options {
    /** Window where the cut section(s) should be propagated from. */
    source: GraphicsWindow;
    /** Window where the cut section(s) should be propagated to. If omitted, the cut section(s) will be propagated to all windows in the D3PLOT session. */
    target?: GraphicsWindow;
}


/** Object function argument in SetDefinition */
interface SetDefinitionArgument_options {
    /** Node(s) defining the cut section. This is required as array of length 3 when 'definition' is Constant.N3. It can also be specified as array of length 1 in the Constant.CONST_X, Constant.CONST_Y or Constant.CONST_Z case. */
    nodes: array[];
    /** Normal head coordinate for cut plane. This is required when 'definition' is Constant.LS_DYNA. */
    normalHead: number[];
    /** Origin coordinates for cut plane if 'definition' is Constant.CONST_X, Constant.CONST_Y, Constant.CONST_Z without 'nodes' or Constant.OR_AND_V or Constant.LS_DYNA. */
    origin: number[];
    /** X axis vector for cut plane. This is required when 'definition' is Constant.OR_AND_V. */
    xAxis: number[];
    /** X axis head coordinate for cut plane. This is required when 'definition' is Constant.LS_DYNA. */
    xAxisHead: number[];
    /** XY plane vector for cut plane. This is required when 'definition' is Constant.OR_AND_V. */
    xyPlane: number[];
}


/** Object function argument in CutSection constructor */
interface CutSection_constructor_Argument_options {
    /** Direction index where the new cut plane definition should be made, 1 for D1, 2 for D2 or 3 for D3. If omitted, the cut plane will be created as direction D1. */
    directionID?: number;
    /** Node(s) defining the cut section. This is required as array of length 3 when 'definition' is Constant.N3. It can also be specified as array of length 1 in the Constant.CONST_X, Constant.CONST_Y or Constant.CONST_Z case. */
    nodes: array[];
    /** Normal head coordinate for cut plane. This is required when 'definition' is Constant.LS_DYNA. */
    normalHead: number[];
    /** Origin coordinates for cut plane if 'definition' is Constant.CONST_X, Constant.CONST_Y, Constant.CONST_Z without 'nodes' or Constant.OR_AND_V or Constant.LS_DYNA. */
    origin: number[];
    /** The graphics window where the cut section should be created. If omitted, the cut section will be created in window 1. To define the cut section in all windows, CutSection.Propagate should be used after creating this one. */
    window?: GraphicsWindow;
    /** X axis vector for cut plane. This is required when 'definition' is Constant.OR_AND_V. */
    xAxis: number[];
    /** X axis head coordinate for cut plane. This is required when 'definition' is Constant.LS_DYNA. */
    xAxisHead: number[];
    /** XY plane vector for cut plane. This is required when 'definition' is Constant.OR_AND_V. */
    xyPlane: number[];
}

declare class CutSection {
/**
 * Adds another plane with given offset to custom spacing for multiple cuts. This is available only for the central plane. Note that this affects drawing only if multiCut and multiCustomCut are both true.
 * @param offset Offset for the new parallel cut plane
 * @returns CutSection object
 */
    AddOffsetPlane(offset: number): CutSection;

/**
 * Removes all offset planes except 0.0 from custom spacing for multiple cuts. This is available only for the central plane. Note that this affects drawing only if multiCut and multiCustomCut are both true.
 */
    ClearOffsetPlanes(): void;

/**
 * Returns the first cut section in the window or null if all cut directions D1, D2, D3 are turned off. If for the first active direction there are multiple parallel cuts, this function will return that with the most negative offset. In particular, in the default setup with just one direction D1 and no multiple cuts this function will return 'the' cut section of the graphics window. The main cutting switch has no effect on this function.
 * @param window Graphics window to return the CutSection object for.
 * @returns CutSection object
 */
    static First(window: GraphicsWindow): CutSection;

/**
 * Returns the index of the first inactive cut plane direction, i.e. 1 if D1 is not active, 2 if D1 is active but D2 is not, 3 if D1 and D2 are active but D3 is not. If all available directions D1, D2 and D3 are used, this will return 4 although not a valid direction ID.
 * @param window Graphics window to return the direction index for. If omitted, the index will be returned based on cut sections in the first graphics window.
 * @returns integer
 */
    static FirstFreeDirection(window?: GraphicsWindow): number;

/**
 * Returns an array of CutSection objects for all active directions in the window specified or all windows.
 * @param window Graphics window to return the CutSection objects for. If omitted, CutSection objects for all graphics windows will be returned.
 * @returns Array of CutSection objects
 */
    static GetAll(window: GraphicsWindow): CutSection[];

/**
 * Returns the coordinates where the cut-section cuts through element &lt;type/item&gt;.
 * @param item Beam, Shell, Solid or Tshell object
 * @param options 
 * @returns 2-dimensional array of reals or null if no intersection points. The length of the array returned is the number of intersection points, where each array entry is itself an array of 3 reals for the X, Y and Z coordinates.
 */
    GetCutCoords(item: object, options?: GetCutCoordsArgument_options): number[];

/**
 * Returns the forces, moments, centroid and area of the cut section in its window. The coordinate system of these results depends upon the cut section's space system as follows:  BASIC space: Forces are moments are always returned in the global axis system, about the geometrical centre of the cut elements at the given state. Therefore the effective origin is likely to change as the model deforms. (This is the method used by LS-DYNA)  DEFORMED space: Forces and moments are returned in the plane local axis system, about the current section origin. The origin and axes will remain fixed as the model deforms unless one of the "section follows node(s)" options has been used.  WARNING #1: Cut-sections in D3PLOT are a "per window" attribute, cutting all models in a window at the current "frame". If the optional &lt;stateID&gt; argument is not supplied the forces and moments returned will be at the state of the current "frame" of the window, and while this will normally be the same as the current "state" this is not necessarily the case, since the user may have interpolated results by time Likewise if the optional &lt;model&gt; argument is not supplied then the model used will be the first in the window (that at index 0 from function GraphicsWindow.GetModelInfo), which may not be the same as the "current model" of the JavaScript interface. Therefore to avoid ambiguity when extracting cut-section forces and moments it is recommended that:  The window being used should only contain a single model The window should be set up to display all states without interpolation, thus &lt;state id&gt; == &lt;frame id&gt;. (This is the default for windows.)  This "single model in a window" approach is strongly recommended in this context since visual feedback will then match computed values. WARNING #2: By default computed forces do NOT include blanked elements. Since cut section display is primarily intended to be used interactively the default behaviour is to omit blanked elements from the forceand moment calculation, since in this way the reported values match what is visible on the screen. This behaviour is not ideal for batch processing since the user can, by manipulating blanking, change the results which are computed. Therefore the optional argument &lt;includeBlanked&gt; may be used to override this behaviour and to force blanked elements to be considered. If omitted, or set to false, then the default behaviour of omitting blanked elements will continue. WARNING #3: Cutting a model exactly at mesh lines can result in ill-conditioned force and moment calculation. It is tempting to define cut planes at nodes since this is easy to do, however this can give rise to ill-conditioning in a rectilinear mesh since the cut may lie exactly on the border between two adjacent elements and therefore won't "know" which one's results to use. Since LS-DYNA elements are constant stress there can be a step change in data values at element borders, and moving the cut plane by a tiny amount can result in a correspondingly large change in cut force and moment values.  It is strongly recommended that cut section definitions used for force and moment extraction should be located away from mesh lines so that they cut elements near their centres, thus avoiding any ambiguity about which elements to use. WARNING #4: Any element types or parts excluded from the cut section are still included in the force and moment calculation.
 * @param options 
 */
    GetForces(options: GetForcesArgument_options): GetForcesReturn;

/**
 * Returns an array of CutSection objects for all cut planes in the same direction D1, D2 or D3. When there are multiple cuts in either uniform or custom spacing, the array will have one entry for each parallel plane in ascending order of offsets including the central plane itself at offset 0.0. Without multiple cuts the array will just have the plane itself as entry.
 * @returns Array of CutSection objects
 */
    GetPlanesForDirection(): CutSection[];

/**
 * Returns the last cut section in the window or null if all cut directions D1, D2, D3 are turned off. If for the last active direction there are multiple parallel cuts, this function will return that with the most positive offset. The main cutting switch has no effect on this function.
 * @param window Graphics window to return the CutSection object for.
 * @returns CutSection object
 */
    static Last(window: GraphicsWindow): CutSection;

/**
 * Returns the next cut section in the window or null if called for the last one in the graphics window.
 * @returns CutSection object
 */
    Next(): CutSection;

/**
 * Returns the previous cut section in the window or null if called for the first one in the graphics window.
 * @returns CutSection object
 */
    Previous(): CutSection;

/**
 * Propagates the definition of all cut sections to the target window specified.
 * @param options 
 */
    static Propagate(options: PropagateArgument_options): void;

/**
 * Changes the definition method for the cut plane. When there are multiple parallel cuts, this can only be called for the plane at the local cut origin.
 * @param definition The new definition method for the cut section. Can be Constant.CONST_X, Constant.CONST_Y, Constant.CONST_Z, Constant.LS_DYNA, Constant.N3 or Constant.OR_AND_V.
 * @param options 
 */
    SetDefinition(definition: number, options: SetDefinitionArgument_options): void;

/**
 * Creates a new cut section in D3PLOT. If there is already a cut section defined at the specified 'directionID' D1, D2 or D3, this will be replaced by the new one with all properties reset to their defaults except for those specified here.
 * @param definition The definition method for the cut section. Can be Constant.CONST_X, Constant.CONST_Y, Constant.CONST_Z, Constant.LS_DYNA, Constant.N3 or Constant.OR_AND_V.
 * @param options Options to create the cut section.
 * @returns CutSection object
 */
    constructor(definition: number, options: CutSection_constructor_Argument_options);

/** When multiple cuts are on with either uniform or custom spacing, for any offset plane this property will be the CutSection object for the central cut plane in that direction. Note that if cs is already the central plane or there are no multiple cuts at all, cs.centralPlane will point to the same plane as cs itself. */
    readonly centralPlane: CutSection;
/** The definition method for this cut section. Can be Constant.CONST_X, Constant.CONST_Y, Constant.CONST_Z, Constant.LS_DYNA, Constant.N3 or Constant.OR_AND_V. To change the definition method, see the function CutSection.SetDefinition. */
    readonly definition: number;
/** Direction index for this cut plane, 1 for D1, 2 for D2 and 3 for D3. When there are multiple cut planes in the same direction, either with uniform spacing or with custom spacing, they will all have the same direction index. */
    readonly directionID: number;
/** true for multiple cuts with custom spacing, false for multiple cuts with uniform spacing. Note that this has an effect only when multiCut is true. If this is changed, CutSection objects for parallel cuts should no longer be referenced except for the local cut origin. */
    multiCustomCut: boolean;
/** Whether or not multiple parallel cuts are on. If this is turned off, CutSection objects for parallel cuts should no longer be referenced except for the local cut origin. */
    multiCut: boolean;
/** Negative action for the cut plane. Can be Constant.OMIT, Constant.OUTLINE, Constant.NORMAL or Constant.TRANSPARENT. */
    negativeAction: number;
/** Number of parallel planes in negative direction for uniform spacing. If this is changed, CutSection objects for parallel cuts should no longer be referenced except for the local cut origin. */
    nneg: number;
/** Array of Node objects when cut section defined by 3 nodes or constant X/Y/Z with one node. For multiple parallel cuts this is only defined for the central plane at offset 0.0. To change the nodes, use the function CutSection.SetDefinition. */
    readonly nodes: array;
/** Number of parallel planes in positive direction for uniform spacing. If this is changed, CutSection objects for parallel cuts should no longer be referenced except for the local cut origin. */
    npos: number;
/** Offset of a parallel plane. This will be 0.0 when multiple cuts are off or when this is the central plane, otherwise positive or negative depending on the location of this plane. To change offsets, use the uniformSpacing property on the central plane for uniform spacing or CutSection.ClearOffsetPlanes and CutSection.AddOffsetPlane for custom spacing. */
    readonly offset: number;
/** Origin coordinates for this cut plane. For multiple parallel cuts this is only defined for the central plane at offset 0.0. To change the origin, use the function CutSection.SetDefinition. */
    readonly origin: number;
/** Positive action for the cut plane. Can be Constant.OMIT, Constant.OUTLINE, Constant.NORMAL or Constant.TRANSPARENT. */
    positiveAction: number;
/** Whether or not thick cut is on. */
    thickCut: boolean;
/** Thickness for thick cuts. Note that this affects drawing only when thickCut is set to true. */
    thickness: number;
/** Spacing value for parallel cuts with uniform spacing. */
    uniformSpacing: number;
/** whether or not this cut direction is active. For it to be visible, in addition to this visible property also the cutSwitch property on the underlying GraphicsWindow object needs to be on. */
    visible: boolean;
/** Window where this cut section is defined */
    readonly window: GraphicsWindow;
/** X axis vector when the cut plane is defined with Origin and Vectors. For multiple parallel cuts this is only defined for the central plane at offset 0.0. To change the X axis vector, use the function CutSection.SetDefinition. */
    readonly xAxis: number;
/** Local Y axis vector (normalised). For multiple parallel cuts this is only defined for the central plane at offset 0.0. */
    readonly yAxis: number;
/** Local Z axis vector (normalised). For multiple parallel cuts this is only defined for the central plane at offset 0.0. */
    readonly zAxis: number;
}


/** Object returned by GetCutCoords */
interface GetCutCoordsReturn {
    /** Number of places the cut-section cuts the item */
    n: number;
    /** X coordinates where item is cut */
    x: number[];
    /** Y coordinates where item is cut */
    y: number[];
    /** Z coordinates where item is cut */
    z: number[];
}


/** Object function argument in GetCutCoords */
interface GetCutCoordsArgument_options {
    /** Index starting at 1 of the plane direction for multiple non-parallel planes. This should be at most the number of non-parallel planes (at most 3 if the maximum number of planes is defined). If omitted, the data for the first plane direction will be used. */
    direction_id?: number;
    /** If +ve, the internal item number starting at 1. If -ve, the external label of the item. */
    item: number;
    /** A valid model id that exists in &lt;window_id&gt;. */
    model_id?: number;
    /** State number to be used instead of the current state */
    state_id?: number;
    /** A valid type code (SHELL etc.)) */
    type_code: number;
    /** A valid window id. */
    window_id?: number;
}


/** Object returned by GetCutCoords */
interface GetCutCoordsReturn {
    /** Number of places the cut-section cuts the item */
    n: number;
    /** X coordinates where item is cut */
    x: number[];
    /** Y coordinates where item is cut */
    y: number[];
    /** Z coordinates where item is cut */
    z: number[];
}


/** Object returned by GetCutForces */
interface GetCutForcesReturn {
    /** Cut section area */
    area: number;
    /** Cut section centroid, [Cx, Cy, Cz] */
    centroid: number[];
    /** 3 Forces, [Fx, Fy, Fz] */
    force: number[];
    /** 3 Moments, [Mxx, Myy, Mzz] */
    moment: number[];
}


/** Object function argument in GetCutForces */
interface GetCutForcesArgument_options {
    /** Index starting at 1 of the plane direction for multiple non-parallel planes. This should be at most the number of non-parallel planes (at most 3 if the maximum number of planes is defined). If omitted, the data for the first plane direction will be used. */
    direction_id?: number;
    /** 0 to omit blanked elements (default), 1 to include them */
    include_blanked?: number;
    /** Model id that exists in &lt;window_id&gt;. If omitted the first model in the window will be used. */
    model_id?: number;
    /** 0 all part ids considered (default), otherwise only forces in the specified part are computed. If +ve this is the internal part index, if -ve this is the external part label. */
    part_id?: number;
    /** State number to be used. If omitted the state of the window's current frame will be used. */
    state_id?: number;
    /** A valid window id. If omitted, cut section data for window 1 will be used. */
    window_id?: number;
}


/** Object returned by GetCutForces */
interface GetCutForcesReturn {
    /** Cut section area */
    area: number;
    /** Cut section centroid, [Cx, Cy, Cz] */
    centroid: number[];
    /** 3 Forces, [Fx, Fy, Fz] */
    force: number[];
    /** 3 Moments, [Mxx, Myy, Mzz] */
    moment: number[];
}


/** Object returned by GetCutSection */
interface GetCutSectionReturn {
    /** How positive and negative actions for multiple directions are combined. Can be UNION or INTERSECTION. Note that this only has an effect with at least 2 cut plane directions. */
    combination: number;
    /** One of OR_AND_V, CONST_X, CONST_Y, CONST_Z, N3, LS_DYNA or zero if no section has been defined yet */
    definition: number;
    /** ON if the section follows any defining node(s) as appropriate, OFF if it does not. This value is only meaningful for definition == CONST_X/Y/Z where a node in nodes[0] was supplied, and N3 */
    follow_n: number;
    /** whether or not custom spacing for multiple parallel cuts is on */
    multi_custom_cut: boolean;
    /** whether or not multiple parallel cuts are on */
    multi_cut: boolean;
    /** Negative action for the cut direction. Can be OMIT, OUTLINE, NORMAL or TRANSPARENT. */
    negative_action: number;
    /** number of negative parallel planes when multi_cut is true and multi_custom_cut is false, undefined otherwise */
    nneg: number;
    /** For definition = CONST_X/Y/Z: nodes[0] = index of node if supplied For definition = N3: nodes[0 to 2] = indices of three N3 nodes This array will always be present and have three entries, with unused entries being set to zero. */
    nodes: number[];
    /** number of positive parallel planes when multi_cut is true and multi_custom_cut is false, undefined otherwise */
    npos: number;
    /** Origin coordinates */
    origin: number[];
    /** Positive action for the cut direction. Can be OMIT, OUTLINE, NORMAL or TRANSPARENT. */
    positive_action: number;
    /** Either BASIC or DEFORMED */
    space: number;
    /** when multi_custom_cut is false and multi_cut is true: spacing value when multi_custom_cut is true and multi_cut is true: array of offsets from the local cut origin when multi_cut is false: 0.0 */
    spacing: number[];
    /** Either OFF or ON */
    status: number;
    /** whether or not thick cut is on */
    thick_cut: boolean;
    /** thickness for thick cuts when thick_cut is true, 0.0 otherwise */
    thickness: number;
    /** ON if the cut direction is active, OFF otherwise. */
    visible: number;
    /** Local X axis vector (normalised) */
    x_axis: number[];
    /** Local Y axis vector (normalised) */
    y_axis: number[];
    /** Local Z axis vector (normalised) */
    z_axis: number[];
}


/** Object function argument in GetCutSection */
interface GetCutSectionArgument_options {
    /** Index starting at 1 of the plane direction for multiple non-parallel planes. This should be at most the number of non-parallel planes (at most 3 if the maximum number of planes is defined). If omitted, the data for the first plane direction will be used. */
    direction_id?: number;
    /** A valid model id that exists in &lt;window_id&gt;. If omitted the state of the window's current frame will be used. This only matters if the section uses the method CONST_X, CONST_Y or CONST_Z defined by a node or N3 and it has been set to follow nodes with FOLLOW_N. In which case the section origin and/or vectors may change as the node(s) move. */
    model_id?: number;
    /** State number to be used. If omitted the state of the window's current frame will be used. This only matters if the section uses the method CONST_X, CONST_Y or CONST_Z defined by a node or N3 and it has been set to follow nodes with FOLLOW_N. In which case the section origin and/or vectors may change as the node(s) move. */
    state_id?: number;
    /** A valid window id. If omitted, cut section data for window 1 will be returned. */
    window_id?: number;
}


/** Object returned by GetCutSection */
interface GetCutSectionReturn {
    /** One of OR_AND_V, CONST_X, CONST_Y, CONST_Z, N3, LS_DYNA or zero if no section has been defined yet */
    definition: number;
    /** ON if the section follows any defining node(s) as appropriate, OFF if it does not. This value is only meaningful for definition == CONST_X/Y/Z where a node in nodes[0] was supplied, and N3 */
    follow_n: number;
    /** whether or not custom spacing for multiple parallel cuts is on */
    multi_custom_cut: boolean;
    /** whether or not multiple parallel cuts are on */
    multi_cut: boolean;
    /** number of negative parallel planes when multi_cut is true and multi_custom_cut is false, undefined otherwise */
    nneg: number;
    /** For definition = CONST_X/Y/Z: nodes[0] = index of node if supplied For definition = N3: nodes[0 to 2] = indices of three N3 nodes This array will always be present and have three entries, with unused entries being set to zero. */
    nodes: number[];
    /** number of positive parallel planes when multi_cut is true and multi_custom_cut is false, undefined otherwise */
    npos: number;
    /** Origin coordinates */
    origin: number[];
    /** Either BASIC or DEFORMED */
    space: number;
    /** when multi_custom_cut is false and multi_cut is true: spacing value when multi_custom_cut is true and multi_cut is true: array of offsets from the local cut origin when multi_cut is false: undefined */
    spacing: number[];
    /** The status of the cutting switch. Either OFF or ON */
    status: number;
    /** whether or not thick cut is on */
    thick_cut: boolean;
    /** thickness for thick cuts when thick_cut is true, undefined otherwise */
    thickness: number;
    /** Local X axis vector (normalised) */
    x_axis: number[];
    /** Local Y axis vector (normalised) */
    y_axis: number[];
    /** Local Z axis vector (normalised) */
    z_axis: number[];
}


/** Object function argument in RemoveCutDirection */
interface RemoveCutDirectionArgument_options {
    /** Index starting at 1 of the plane direction to be removed. This should be at most the number of non-parallel planes (at most 3 if the maximum number of planes is defined). If omitted, the last plane direction will be removed. */
    direction_id?: number;
    /** A valid window ID */
    window_id: number;
}


/** Object function argument in SetCutSection */
interface SetCutSectionArgument_options {
    /** Can be one of STATUS, SPACE, OR_AND_V, CONST_X, CONST_Y, CONST_Z, N3, LS_DYNA, FOLLOW_N. From D3PLOT 20.0 onwards this property can be omitted in the SPACE, OR_AND_V and FOLLOW_N cases, whereas in the other cases the &lt;definition&gt; property should be used with the same value. */
    attribute?: number;
    /** How positive and negative actions for multiple directions are combined. Can be UNION or INTERSECTION. Note that this only has an effect with at least 2 cut plane directions. */
    combination?: number;
    /** Definition method for the cut plane direction. Can be one of OR_AND_V, CONST_X, CONST_Y, CONST_Z, N3, LS_DYNA. This can be omitted when only properties independent from the plane position are changed, for example &lt;follow_n&gt; or &lt;status&gt;. */
    definition?: number;
    /** Index starting at 1 of the plane direction for multiple non-parallel planes. Can be 1, 2 or 3. It can be either an existing direction index to update or a free index to add a new plane direction. If &lt;direction&gt; is omitted, the data for the first plane direction will be set by this function. */
    direction_id?: number;
    /** OFF or ON (default OFF). Determines whether or not a DEFORMED space section will track the motion of the node(s) used to define it. This is only meaningful for sections defined by:  N3. The motion of all three nodes will update the origin and axes at each state. CONST_X, CONST_Y or CONST_Z where a node has been used to define the origin. The node motion will update the section origin at each state, but its axes will remain constant.   */
    follow_n?: number;
    /** Negative action for the cut direction. Can be OMIT, OUTLINE, NORMAL or TRANSPARENT. */
    negative_action?: number;
    /** number of negative parallel planes for uniform spacing (required when &lt;spacing&gt; is a single positive number for uniform spacing) */
    nneg?: number;
    /** Array of +ve indices or -ve labels of the nodes. For CONST_X, CONST_Y or CONST_Z this should have length 1 and contain the node whose X, Y or Z coordinate defines the plane position. For N3 it should have length 3 containing the three nodes where the plane passes through. (required for &lt;definition&gt; CONST_X, CONST_Y or CONST_Z when origin is not defined or for &lt;definition&gt; N3) */
    nodes?: number[];
    /** Normal head coordinate (required for &lt;definition&gt; LS_DYNA) */
    normal_head?: number[];
    /** number of positive parallel planes for uniform spacing (required when &lt;spacing&gt; is a single positive number for uniform spacing) */
    npos?: number;
    /** Coordinate array defining the origin of the plane. (for &lt;definition&gt; CONST_X, CONST_Y or CONST_Z when nodes is not defined or for &lt;definition&gt; OR_AND_V or LS_DYNA) */
    origin?: number[];
    /** Positive action for the cut direction. Can be OMIT, OUTLINE, NORMAL or TRANSPARENT. */
    positive_action?: number;
    /** BASIC or DEFORMED (default). Determines whether the section is Lagrangian (BASIC) or Eulerian (DEFORMED). In the BASIC case the section is tied to the undeformed geometry and will move and distort as the model deforms, in the DEFORMED case the section is fixed in model space and the structure passes through it. For compatibility with LS_DYNA the way forces are calculated also varies with section space - see the documentation on GetCutForces(). */
    space?: number;
    /** Spacing for multiple parallel cuts. If this is a single positive number, multiple parallel cuts with uniform spacing will be turned on, where &lt;npos&gt; and &lt;nneg&gt; will be required to define the number of planes in the positive and negative directions. If this is an array of real numbers, multiple parallel cuts with custom spacing will be turned on, where this array is the list of offsets from the local cut origin. If spacing is 0.0, multiple parallel cuts will be turned off. If spacing is undefined, then multiple parallel cuts will keep their existing spacing. */
    spacing?: number[];
    /** OFF or ON (default OFF). Determines whether or not the cutting switch is on in the current window. The cutting switch does not need to be on in order to compute cut forces and moments. */
    status?: number;
    /** Thickness for thick cuts. If positive, thick cuts will be turned on. If 0.0, thick cuts will be turned off. If thickness is undefined, then thick cuts and thickness will remain on or off as before. */
    thickness?: number;
    /** OFF or ON (default ON). Determines whether or not the cut direction at &lt;direction_id&gt; is active. For it to be visible, in addition to this &lt;visible&gt; property also the cutting switch needs to be turned on with &lt;status&gt;. */
    visible?: number;
    /** A valid window id or ALL for all active windows. If omitted, the cut section will be set for ALL windows. */
    window_id?: number;
    /** X axis vector (required for &lt;definition&gt; OR_AND_V) */
    x_axis?: number[];
    /** X axis head coordinate (required for &lt;definition&gt; LS_DYNA) */
    x_axis_head?: number[];
    /** XY plane vector (required for &lt;definition&gt; OR_AND_V) */
    xy_plane?: number[];
}

/**
 * Returns the coordinates where the cut-section cuts through element &lt;type/item&gt;.
 * @param options 
 */
declare function GetCutCoords(options: GetCutCoordsArgument_options): GetCutCoordsReturn;

/**
 * Returns the forces, moments, centroid and area of the cut section in &lt;window_id&gt;. See documentation for CutSection.GetForces for more detail.
 * @param options 
 */
declare function GetCutForces(options: GetCutForcesArgument_options): GetCutForcesReturn;

/**
 * Retrieves all attributes of the cut section in &lt;window_id&gt;.
 * @param options Retrieves all attributes of the cut section in &lt;window_id&gt;.
 */
declare function GetCutSection(options: GetCutSectionArgument_options): GetCutSectionReturn;

/**
 * Sets properties of the cut section in &lt;window_id&gt; Each D3PLOT window can have cut planes in up to three directions, which are by default not active. Their location, orientation and type can be defined here, and it can be turned on or off. Forces and moments from the cut sections can be obtained from function GetCutForces(). Cut section definitions are a "per window" attribute that apply to all models in the window. Thefore if the window has multiple models, and nodes are used to define the section (CONST_X, CONST_Y, CONST_Z with a node or N3), the origin and/or vectors of the section may vary for each model in the window. In addition if the coordinates of these nodes are "followed" (see the &lt;follow_n&gt; property on the options), then the section locations may change from state to state.
 * @param options The cut section properties which should be changed.  All coordinates and vectors must be defined in model space, and will always form an orthogonal right handed coordinate system in which local Z is normal to the cut plane. Vector length is irrelevant (but should be well-conditioned), and the Y axis is obtained automatically from the vector cross product Z_AXIS x X_AXIS. If the Z and X axes as supplied are not at right angles the X will be updated to make it orthogonal to Y and Z. &lt;nodes[0]&gt; or &lt;origin&gt; will define the cut section origin coordinate. The array &lt;nodes&gt; for N3 or origin/x_axis/xy_plane will define the cut section orientation. Care must be taken when defining nodes for windows that contain multiple models. Since a node index (+ve) may resolve to a different node in each model it is usually best to use external labels (-ve) in this context to avoid ambiguity. (The speed of the external =&gt; internal lookup will not matter as this function is unlikely to be called many times.) FOLLOW_N(odes) will only have an effect if the cut section is defined by node(s), i.e. CONST_X, CONST_Y or CONST_Z with nodes[0] or N3. 
 * @returns boolean
 */
declare function SetCutSection(options: SetCutSectionArgument_options): boolean;


/** Object returned by GetConditionParts */
interface GetConditionPartsReturn {
    /** List of failing parts (indices starting at 1) */
    fail_list: number[];
    /** Number of failing parts */
    failed: number;
    /** List of passing parts (indices starting at 1) */
    pass_list: number[];
    /** Number of passing parts */
    passed: number;
}


/** Object function argument in GetConditionParts */
interface GetConditionPartsArgument_int_pt {
    /** Through thickness integration point */
    ip: number;
    /** On plan integration point. Defaults to the first one. */
    op?: number;
}


/** Object function argument in GetData */
interface GetDataArgument_int_pt {
    /** Through thickness integration point */
    ip: number;
    /** On plan integration point. Defaults to the first one. */
    op?: number;
}


/** Object returned by GetMultipleData */
interface GetMultipleDataReturn {
    /**  data[#rows] for data components that return a scalar value, eg DX data[#cols][#rows] for data components that return a vector or tensor value, eg UNOV  Take care when dealing with the two-dimensional array of results returned by the vector and tensor component cases, as the order in which the data is stored is [column][row]. For example if you have a tensor component then in order to extract the XY shear term for index you need to write:   r = GetMultipleData(args...) shear_term = r.data[Constant.XY][index];  Also remember that the rows in this array start at index 0, thus the results for item_1 will be row index [0] in the array of results returned, and so on. */
    data: number[];
    /** The number of columns of data. 1 for scalar components, 3 for vector, 6 for tensor */
    nc: number;
    /** The number of rows of data, ie how many items processed in the range &lt;item_1 .. item_2&gt; */
    nr: number;
}


/** Object function argument in GetMultipleData */
interface GetMultipleDataArgument_int_pt {
    /** Through thickness integration point */
    ip: number;
    /** On plan integration point. Defaults to the first one. */
    op?: number;
}


/** Object function argument in GetNumberOf */
interface GetNumberOfArgument_options {
    /** The state to use instead of the current state. Only necessary in adaptively remeshed analyses. */
    state_id?: number;
}

/**
 * Returns the maximum/ minimum contour plot value of &lt;component&gt; specified for the current window. Returns null if &lt;component&gt; specified is not active.
 * @param mode Constant.MIN for minimum contour plot value, or Constant.MAX for maximum contour plot value.
 * @param component Contour plot component: "SCALAR_1" for Scalar 1, "SCALAR_2" for Scalar 2, "VECTOR_1" or "VECTOR" for Vector, "VECTOR_2" or "VEL" for "Vel". If only 1 component is active, &lt;component&gt; is optional and min/max will be evaluated for the active component. If more than 1 component is active and &lt;component&gt; is not specified, min/max will be evaluated for Scalar 1.
 * @returns real (or null if &lt;component&gt; specified is not active)
 */
declare function GetContourLimit(mode: number, component?: string): number;

/**
 * Returns the data for &lt;component&gt; of type &lt;type_code&gt; for the single &lt;item&gt; WARNING: If the function arguments are grammatically correct but the requested data component is not present in the database, then 1, 3 or 6 zeros are returned as required, and no warning message is output. Therefore it is good practice to use function QueryDataPresent() to check that an optional data component is actually present in a database before attempting to extract its values. NOTE: to return the same data for a range of items it will be much faster to call the GetMultipleData() variant of this function, described below.  In other words instead of something like this, calling GetData()for each item individually:  for(item=item_1; item&lt;=item_2; item++) { result = GetData(component, type, item, ...); }  You can write the following to extract data into an array of results using a single call to GetMultipleData():  result = GetMultipleData(component, type, item_1, item_2, ...);  This reduces the time taken to extract data by a factor nearly equal to #items, and for a large model this can give a dramatic speed increase.
 * @param component A valid component code (e.g. Component.DX, Component.SXY)
 * @param type_code A valid element type code (e.g. Type.SOLID, Type.SHELL)
 * @param item If +ve, the internal item number starting at 1. If -ve, the external label of the item. Internal numbers will be many times faster to process.
 * @param int_pt This may be one of three types:  A +ve integer that is an integration point id One of the types Constant.TOP, Constant.MIDDLE or Constant.BOTTOM for shell surfaces only An object defining both through-thickness and on-plan integration points for fully integrated shells.  Integration points are only meaningful for some element type / data component combinations:  Shells and Tshells: Stress and strain tensors; Plastic strain; "Extra" data (if written) Solids: All data components if NINTSLD on the database extent binary card is 8 Beams: 3 Stresses and 2 strains in non-resultant beam types if BEAMIP on the database extent binary card is &gt; 0  This has become a complex data field, please see the separate section on Defining the Integration point argument below. Where the integration point is not relevant this argument may be omitted. Use zero to define a null "padding" argument. If the integration point is not defined it will use the integration point defined on the current GUI "data" panel, which defaults to the middle surface for shells, thick shells, and solids, and Mag All for beams, but may vary if changed by an interactive user. If consistent output from a script is required, independent of any prior interactive activity, an explicit integration point or surface should be defined.
 * @param extra  The "Extra" solid or shell component id for components Component.SOX or Component.SHX The ALE mulit-material group id for components Component.AMMG and Component.AMMS The sub-number for user-defined components Component.UNOS, Component.UNOV, Component.USSS, Component.USST, Component.UBMS, Component.UBMV  If any of the above component codes are used, the "extra" argument must be set to a non zero value. Use zero to define a null "padding" argument if this is not required
 * @param fr_of_ref The frame of reference to return values in Constant.GLOBAL, Constant.LOCAL, Constant.CYLINDRICAL, Constant.USER_DEFINED, Constant.MATERIAL. This is only necessary for directional components (eg X stress) and then only when something other than the default Constant.GLOBAL coordinate system is to be used. If omitted, or set to zero, it defaults to Constant.GLOBAL for directional components and is ignore for all others.
 * @param state_id State number to be used instead of the current state
 * @param dda Direct Disk Access flag. Either Constant.OFF (default) for normal data cacheing or Constant.ON to enable direct disk reading of data. If turned on this reads data not currently in core memory directly from disk without loading the complete data vector for the state into core. This should be used if you want to extract results for a few items over a range of states, since it will potentially be faster.
 * @param consider_blanking Consider blanking flag. Either Constant.OFF (default) to ignore blanking or Constant.ON to consider blanking. This argument is relevant for nodal contact force results. By default the sum of all forces at a given node for all surfaces using that node will be returned. By blanking all but the contact surface(s) of interest and setting this argument to ON the results can be restricted to the contact surface(s) you want.
 * @param mag_or_cur Magnitude or Current Value flag. This argument is relevant for analyses with phase angle results. Set it to Constant.MAGNITUDE to output the magnitude Set it to Constant.CURRENT_VAL to output the current value [Magniude * cos(phase + phi)]. This is dependent on the current phi angle displayed in the graphics window and can be set using SetWindowFrame(). See example below. If omitted, or set to zero, it defaults to Constant.MAGNITUDE.
 * @returns float|Array of floats
 */
declare function GetData(component: number, type_code: number, item: number, int_pt?: GetDataArgument_int_pt|number, extra?: number, fr_of_ref?: number, state_id?: number, dda?: number, consider_blanking?: number, mag_or_cur?: number): number | number[];

/**
 * Returns the data for &lt;component&gt; of type &lt;type_code&gt; for the range of items &lt;item1 .. item2&gt; WARNING #1: If the function arguments are grammatically correct but the requested data component is not present in the database, then 1, 3 or 6 zeros are returned as required, and no warning message is output. Therefore it is good practice to use function QueryDataPresent() to check that an optional data component is actually present in a database before attempting to extract its values. WARNING #2: It is possible to extract vary large quantities of data using a single call of this function. Bear in mind that JavaScript representations of values are quite bloated, for example all "numbers"are 64 bit (8 byte) floating double format, and the language imposes further overheads because of the way it organises data. For large models it may be necessary to extract large blocks of data in several smaller chunks, rather than one big one. WARNING #3: The data return value from this function is an array of length #rows, and the subscripts of this array start at row 0. In other words the result for item_1 in the call below will be returned in results array row data[0]. When extracting results for all items of a type, for example all shells in a model, item_1 will typically be 1, and it is easy to make the mistake of expecting this to be in results array row data[1]. In addition when you extract data for vector or tensor data the result will be a two-dimensional array, aligned data[#cols][#rows]. See the examples at the bottom of this description for more information about using two-dimensional arrays. 
 * @param component A valid component code (e.g. Component.DX, Component.SXY)
 * @param type_code A valid element type code (e.g. Type.SOLID, Type.SHELL)
 * @param item_1 If +ve, the internal item number starting at 1. If -ve, the external label of the item. Internal numbers will be many times faster to process.
 * @param item_2 If +ve, the internal item number starting at 1. If -ve, the external label of the item. Must have the same sign as item_1, so both must be +ve or -ve. It is legal for it to be the same as item_1, in which case only values for a single item will be extracted.
 * @param int_pt This may be one of three types:  A +ve integer that is an integration point id One of the types Constant.TOP, Constant.MIDDLE or Constant.BOTTOM for shell surfaces only An object defining both through-thickness and on-plan integration points for fully integrated shells.  Integration points are only meaningful for some element type / data component combinations:  Shells and Tshells: Stress and strain tensors; Plastic strain; "Extra" data (if written) Solids: All data components if NINTSLD on the database extent binary card is 8 Beams: 3 Stresses and 2 strains in non-resultant beam types if BEAMIP on the database extent binary card is &gt; 0  This has become a complex data field, please see the separate section on Defining the Integration point argument below. Where the integration point is not relevant this argument may be omitted. Use zero to define a null "padding" argument. If the integration point is not defined it will use the integration point defined on the current GUI "data" panel, which defaults to the middle surface for shells, thick shells, and solids, and Mag All for beams, but may vary if changed by an interactive user. If consistent output from a script is required, independent of any prior interactive activity, an explicit integration point or surface should be defined.
 * @param extra  The "Extra" solid or shell component id for components Component.SOX or Component.SHX The ALE mulit-material group id for components Component.AMMG and Component.AMMS The sub-number for user-defined components Component.UNOS, Component.UNOV, Component.USSS, Component.USST, Component.UBMS, Component.UBMV  If any of the above component codes are used, the "extra" argument must be set to a non zero value. Use zero to define a null "padding" argument if this is not required
 * @param fr_of_ref The frame of reference to return values in Constant.GLOBAL, Constant.LOCAL, Constant.CYLINDRICAL, Constant.USER_DEFINED, Constant.MATERIAL. This is only necessary for directional components (eg X stress) and then only when something other than the default Constant.GLOBAL coordinate system is to be used. If omitted, or set to zero, it defaults to Constant.GLOBAL for directional components and is ignore for all others.
 * @param state_id State number to be used instead of the current state
 * @param dda Direct Disk Access flag. Either Constant.OFF (default) for normal data cacheing or Constant.ON to enable direct disk reading of data. If turned on this reads data not currently in core memory directly from disk without loading the complete data vector for the state into core. This should be used if you want to extract results for a few items over a range of states, since it will potentially be faster.
 * @param consider_blanking Consider blanking flag. Either Constant.OFF (default) to ignore blanking or Constant.ON to consider blanking. This argument is relevant for nodal contact force results. By default the sum of all forces at a given node for all surfaces using that node will be returned. By blanking all but the contact surface(s) of interest and setting this argument to ON the results can be restricted to the contact surface(s) you want.
 * @param mag_or_cur Magnitude or Current Value flag. This argument is relevant for analyses with phase angle results. Set it to Constant.MAGNITUDE to output the magnitude Set it to Constant.CURRENT_VAL to output the current value [Magniude * cos(phase + phi)]. This is dependent on the current phi angle displayed in the graphics window and can be set using SetWindowFrame(). See example below. If omitted, or set to zero, it defaults to MAGNITUDE.
 */
declare function GetMultipleData(component: number, type_code: number, item_1: number, item_2: number, int_pt?: GetMultipleDataArgument_int_pt|number, extra?: number, fr_of_ref?: number, state_id?: number, dda?: number, consider_blanking?: number, mag_or_cur?: number): GetMultipleDataReturn;

/**
 * Returns the number of on plan points in an element in the current model
 * @param type_code A type code (either Type.SHELL or Type.TSHELL)
 * @param item If +ve, the internal item number starting at 1. If -ve, the external label of the item.
 * @param state_id The state to use instead of the current state. Only necessary in adaptively remeshed analyses.
 * @returns integer
 */
declare function GetNumOnPlanIntPts(type_code: number, item: number, state_id?: number): number;

/**
 * Returns the number of items of type_code in the current model Note that in adaptively remeshed models the current family may affect the number of nodes and elements returned. The family of the current state will be used unless you supply the optional state_id argument, in which case the family of that state will be used. Notes: The number of models returned by GetNumberOf(Type.MODEL) is actually the number of active and inactive model "slots" in the database, including those currently not in use. This means that it will always return the highest model number that has been used to date. Therefore the following sequence:  Read in (say) three models M1 to M3 Delete models M1 and M2, leaving only M3 in use   Will result in GetNumberOf(Type.MODEL) returning the value 3. You can use SetCurrentModel(model_id) to attempt to set a model and examine its return value to see whether it succeeded or failed:  n = GetNumberOf(Type.MODEL); for(i=1; i&lt;=n; i++) { if(SetCurrentModel(i)) // TRUE if present { do something } } 
 * @param type_code A valid type code or a 'GetNumberOf' constant
 * @param options 
 * @returns integer
 */
declare function GetNumberOf(type_code: number, options?: GetNumberOfArgument_options): number;

/**
 * Returns true if data &lt;component&gt; is present in the current model's database, otherwise false. For some data components that are switchable the &lt;type_code&gt; must also be supplied, these are listed below.
 * @param component A valid component code (e.g. Component.DX, Component.SXY)
 * @param type_code One of the type codes Type.SOLID, Type.SHELL or Type.TSHELL if the component is:  Stress tensor derived, e.g. SXX, ... SVON Strain tensor derived, e.g. EXX, ... EVON Effective plastic strain, EPL Strain rate, ERATE 
 * @returns boolean
 */
declare function QueryDataPresent(component: number, type_code?: number): boolean;


/** Object returned by GetElemsAtNode */
interface GetElemsAtNodeReturn {
    /** Internal element ids */
    list: number[];
    /** Number of elements in list */
    nn: number;
}


/** Object returned by GetElemsInPart */
interface GetElemsInPartReturn {
    /** Internal element ids */
    list: number[];
    /** Number of elements in list */
    nn: number;
    /** Element type code */
    type: number;
}


/** Object returned by GetTopology */
interface GetTopologyReturn {
    /** Number of nodes in topology list */
    nn: number;
    /** Internal part id for part-based elements, otherwise zero */
    pid: number;
    /** Internal node ids */
    top: number[];
}

/**
 * Returns the local axes of the element in model space, expressed as direction cosines in a 2d array
 * @param type_code A valid element type code (SOLID, BEAM, SHELL or TSHELL)
 * @param item If +ve, the internal item number starting at 1. If -ve, the external label of the item. Internal numbers will be many times faster to process.
 * @param state_id State number to be used instead of the current state
 * @returns 2d array of reals. The cosines of the element in model space as a two-dimensional array, subscripts [row][col], with cosines organised in rows. Spelled out in detail for results array R this means:  X axis cosines: R[X][X], R[X][Y], R[X][Z] Y axis cosines: R[Y][X], R[Y][Y], R[Y][Z] Z axis cosines: R[Z][X], R[Z][Y], R[Z][Z] 
 */
declare function GetElemAxes(type_code: number, item: number, state_id?: number): number[][];

/**
 * Returns the beta angle (in degrees) at either the ply id or integration point number on element &lt;item&gt; of &lt;type_code&gt; If &lt;ply_id&gt; is non-zero then &lt;int_pnt&gt; can be omitted or set to zero. If &lt;ply_id&gt; is zero then &lt;int_pnt&gt; must be defined and non-zero. When working with &lt;ply_id&gt; if the ply does not exist in the element, then false is returned. When working with &lt;int_pnt&gt; a value will always be returned, but this will be zero if no beta angle is defined for the element / int_pnt combination. Ply data is only available if a .ztf file containing composite information has been read.
 * @param type_code A valid element type code (Currently only SHELL is valid)
 * @param item If +ve, the internal item number starting at 1. If -ve, the external label of the item. Internal numbers will be many times faster to process.
 * @param ply_id If +ve, the internal ply index. If -ve, the external ply label. Internal numbers will be many times faster to process. Set to zero if &lt;int_pt&gt; is to be used instead.
 * @param int_pnt Integration point in the range 1 - maxint, required if &lt;ply_id&gt; is zero.
 * @param state_id State number to be used instead of the current state
 * @returns real
 */
declare function GetElemBetaAngle(type_code: number, item: number, ply_id: number, int_pnt?: number, state_id?: number): number;

/**
 * Returns an object containing the number of elements of &lt;type&gt; at &lt;node&gt;, and also an array &lt;list[ ]&gt; of their internal indices. If there are no elements of &lt;type&gt; at the node then false is returned.
 * @param node The node at which to return the list of elements. If +ve, the internal node number starting at 1. If -ve, the external node label. Internal numbers will be many times faster to process.
 * @param type_code A valid element type code (SOLID etc.)
 * @param state_id State number to be used instead of the current state
 */
declare function GetElemsAtNode(node: number, type_code: number, state_id?: number): GetElemsAtNodeReturn;

/**
 * Returns an object containing the number of elements in part &lt;part_id&gt;, the element type code, and also an array &lt;list[ ]&gt; of their internal indices. If there are no elements in the part then false is returned.
 * @param part_id The part in which to return the list of elements. If +ve, the internal part number starting at 1. If -ve, the external part label. Internal numbers will be many times faster to process.
 * @param state_id State number to be used instead of the current state
 */
declare function GetElemsInPart(part_id: number, state_id?: number): GetElemsInPartReturn;

/**
 * Returns the topology list for internal &lt;item&gt; of type &lt;type_code&gt;. This should only be used for element types which have nodal topologies.
 * @param type_code A valid element type code (SOLID etc.)
 * @param item If +ve, the internal item number starting at 1. If -ve, the external label of the item. Internal numbers will be many times faster to process.
 * @param state_id State number to be used instead of the current state
 */
declare function GetTopology(type_code: number, item: number, state_id?: number): GetTopologyReturn;


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


/** Object returned by GetModelInfo */
interface GetModelInfoReturn {
    /** The colour for the model */
    colour: Colour;
    /** How the model is model is displayed in the graphics window. One of View.WIRE, View.HIDDEN, View.SHADED or View.CURRENT */
    mode: number;
    /** The model at the given index */
    model: Model;
    /** How the model is offset in the graphics window. One of GraphicsWindow.NO_OFFSET, GraphicsWindow.OFFSET_MODEL_SPACE or GraphicsWindow.OFFSET_SCREEN_SPACE */
    offsetMode: number;
    /** The current state number for the model */
    state: number;
    /** Whether the model is visible in the graphics window or not */
    visible: boolean;
    /** The X offset for the model */
    xOffset: number;
    /** The Y offset for the model */
    yOffset: number;
    /** The Z offset for the model */
    zOffset: number;
}


/** Object returned by GetTargetEye */
interface GetTargetEyeReturn {
    /** Array containing the coordinates of the eye position */
    eye: array[];
    /** Whether the perspective switch is active */
    perspective: boolean;
    /** Scale factor */
    scale: number;
    /** Array containing the coordinates of the target position */
    target: array[];
    /** GraphicsWindow.UP_AUTOMATIC, GraphicsWindow.UP_X, GraphicsWindow.UP_Y, GraphicsWindow.UP_Z or an array containing the up vector if user defined */
    up: number[];
}


/** Object function argument in SetModelInfo */
interface SetModelInfoArgument_info {
    /** The colour for the model */
    colour: Colour;
    /** How the model is model is displayed in the graphics window. One of View.WIRE, View.HIDDEN, View.SHADED or View.CURRENT */
    mode: number;
    /** How the model is offset in the graphics window. One of GraphicsWindow.NO_OFFSET, GraphicsWindow.OFFSET_MODEL_SPACE or GraphicsWindow.OFFSET_SCREEN_SPACE */
    offsetMode: number;
    /** Whether the model is visible in the graphics window or not */
    visible: boolean;
    /** The X offset for the model */
    xOffset: number;
    /** The Y offset for the model */
    yOffset: number;
    /** The Z offset for the model */
    zOffset: number;
}


/** Object function argument in SetTargetEye */
interface SetTargetEyeArgument_info {
    /** Array containing the coordinates of the eye position */
    eye: array[];
    /** Whether the perspective switch is active. If omitted the default is true */
    perspective: boolean;
    /** Scale factor. If omitted, the scaling is automatically calculated (in the same way as if running D3PLOT interactively) */
    scale: number;
    /** Array containing the coordinates of the target position */
    target: array[];
    /** GraphicsWindow.UP_AUTOMATIC, GraphicsWindow.UP_X, GraphicsWindow.UP_Y, GraphicsWindow.UP_Z or an array containing the up vector if user defined. If omitted the default is GraphicsWindow.UP_AUTOMATIC */
    up: number[];
}

declare class GraphicsWindow {
/**
 * Adds a model to a graphics window
 * @param model The model to add to the graphics window
 */
    AddModel(model: Model): void;

/**
 * Deletes a graphics window in D3PLOTDo not use the GraphicsWindow object after calling this method.
 */
    Delete(): void;

/**
 * Returns the GraphicsWindow object for the first graphics window in D3PLOT (or null if there are no graphics windows)
 * @returns GraphicsWindow object
 */
    static First(): GraphicsWindow;

/**
 * Returns the GraphicsWindow object for a graphics window ID (or null if graphics window does not exist)
 * @param graphics_window_number number of the graphics window you want the GraphicsWindow object for
 * @returns GraphicsWindow object
 */
    static GetFromID(graphics_window_number: number): GraphicsWindow;

/**
 * Gets the information for a model in a graphics window
 * @param index index of the model in the graphics window you want information for (0 &lt;= index &lt; models)
 */
    GetModelInfo(index: number): GetModelInfoReturn;

/**
 * Get the current target and eye settings
 */
    GetTargetEye(): GetTargetEyeReturn;

/**
 * Returns the GraphicsWindow object for the last graphics window in D3PLOT (or null if there are no graphics windows)
 * @returns GraphicsWindow object
 */
    static Last(): GraphicsWindow;

/**
 * Returns the next graphics window (or null if there is not one)
 * @returns GraphicsWindow object
 */
    Next(): GraphicsWindow;

/**
 * Returns the previous graphics window (or null if there is not one)
 * @returns GraphicsWindow object
 */
    Previous(): GraphicsWindow;

/**
 * Redraws the graphics window
 */
    Redraw(): void;

/**
 * Removes a model from a graphics window
 * @param model The model to remove from the graphics window
 */
    RemoveModel(model: Model): void;

/**
 * Sets the information for a model in a graphics window
 * @param index index of the model in the graphics window you want to set information for (0 &lt;= index &lt; models)
 * @param info Object containing the information to set. Can be any of:
 */
    SetModelInfo(index: number, info: SetModelInfoArgument_info): void;

/**
 * Set the current target and eye settings
 * @param info Object containing the target and eye properties
 */
    SetTargetEye(info: SetTargetEyeArgument_info): void;

/**
 * Defines a state change callback function
 * @param name The name of the function (or null to remove a function). When defined, this function will be called every time that the state changes in a graphics window. In the definition of this callback function the keyword 'this' will be a GraphicsWindow object pointing to the window where the state has changed. When the state changes simultaneously for multiple graphics windows, there will be multiple calls to this callback function, one for each graphics window where the state is changed.
 */
    static StateChangeFunction(name: () => void): void;

/**
 * Returns the total number of graphics windows in use in D3PLOT
 * @returns Total number of graphics windows
 */
    static Total(): number;

/**
 * Creates a new graphics window in D3PLOT
 * @param model The model to open in this graphics window
 *        This argument can be repeated if required.
 * @returns GraphicsWindow object
 */
    constructor(...model: Model[]);

/**
 * Creates a new graphics window in D3PLOT
 * @param model Array where each element specifies a The model to open in this graphics window
 * @returns GraphicsWindow object
 */
    constructor(model: Model[]);

/** Whether the graphics window is active or not (equivalent to turning the window off/on in the GUI) */
    active: boolean;
/** How positive and negative actions for multiple cut section directions are combined. Can be Constant.UNION or Constant.INTERSECTION. Note that this only has an effect with at least 2 cut plane directions. */
    cutCombination: number;
/** true if cut sections in this window follow nodes in this window, false otherwise. This only has an effect for definitions by constant X/Y/Z with node or 3 nodes. */
    cutFollowN: boolean;
/** Cut space system. Can be Constant.BASIC or Constant.DEFORMED (default). */
    cutSpace: number;
/** true if the cutting switch is on in this window, false otherwise */
    cutSwitch: boolean;
/** The total number of models in this graphics window */
    readonly models: number;
/** The graphics window number */
    readonly number: number;
/** The current state displayed in this graphics window. Also see the Model state. */
    state: number;
/** The highest state number from all models in this graphics window */
    readonly states: number;
/** Model has no offset in the graphics window */
    static NO_OFFSET: number;
/** Model is offset in model space coordinates */
    static OFFSET_MODEL_SPACE: number;
/** Model is offset in screen space coordinates */
    static OFFSET_SCREEN_SPACE: number;
/** Automatically calculate up vector for target and eye */
    static UP_AUTOMATIC: number;
/** Set up vector for target and eye to global X */
    static UP_X: number;
/** Set up vector for target and eye to global Y */
    static UP_Y: number;
/** Set up vector for target and eye to global Z */
    static UP_Z: number;
}

declare class Group {
/**
 * Adds flagged items to the contents of the group
 * @param flag Flag (see AllocateFlag) set on items to add to the group
 */
    AddFlagged(flag: number): void;

/**
 * Empties the group (removes everything from the group)
 */
    Empty(): void;

/**
 * Returns the first group in the model (or null if there are no groups)
 * @param model Model to get first group in
 * @returns Group object
 */
    static First(model: Model): Group;

/**
 * Flags the contents of the group
 * @param flag Flag (see AllocateFlag) to set for the group contents
 */
    FlagContents(flag: number): void;

/**
 * Returns the Group object for group in model with label (or null if it does not exist)
 * @param model Model to get group in
 * @param label The label for the group in the model
 * @returns Group object
 */
    static GetFromID(model: Model, label: number): Group;

/**
 * Returns the last group in the model (or null if there are no groups)
 * @param model Model to get last group in
 * @returns Group object
 */
    static Last(model: Model): Group;

/**
 * Returns the next group in the model (or null if there is not one)
 * @returns Group object
 */
    Next(): Group;

/**
 * Returns the previous group in the model (or null if there is not one)
 * @returns Group object
 */
    Previous(): Group;

/**
 * Returns the total number of groups in a model
 * @param model Model to get group in
 * @returns The number of groups
 */
    static Total(model: Model): number;

/**
 * Creates a new group in D3PLOT
 * @param model The model to create the group in
 * @returns Group object
 */
    constructor(model: Model);

/** The group label */
    readonly label: number;
/** The Model that the group is in */
    readonly model: Model;
/** The group title */
    title: string;
/** The type for the group (will be Type.GROUP) */
    readonly type: number;
}


/** Object returned by GetGroupInfo */
interface GetGroupInfoReturn {
    /** The label of the group */
    label: number;
    /** The name of the group */
    name: string;
}

/**
 * Returns information about a group in the current model
 * @param group_id Group number
 */
declare function GetGroupInfo(group_id: number): GetGroupInfoReturn;


/** Object function argument in Write3D */
interface Write3DArgument_options {
    /** Anonymise part tree (default = false) */
    anonymise?: boolean;
    /** The format for the 3D file. Either Image.GLB (default) or Image.GLBU */
    format?: number;
    /** The frame rate if multiple states are written (default = 25) */
    frameRate?: number;
    /** An individual GraphicsWindow to write 3D data for. If not given (default) all the windows on the current page will be written */
    graphicsWindow?: GraphicsWindow;
    /** The state number to write or Image.ALL_STATES (default) */
    state?: number;
}


/** Object function argument in WriteImage */
interface WriteImageArgument_options {
    /** Whether to dither 8 bit images or not (default is false) */
    dither?: boolean;
    /** The format for the image. One of Image.BMP8C, Image.BMP8, Image.BMP, Image.JPEG, Image.PPM, Image.PNG (default), Image.PNG8 or Image.GIF */
    format?: number;
    /** An individual GraphicsWindow to write image for. If not given (default) all the windows on the current page will be written */
    graphicsWindow?: GraphicsWindow;
    /** Whether to optimise the colour palette for 8 bit images or not (default is true) */
    optimise?: boolean;
    /** The quality for JPEG images (1 - 100) (default = 90) */
    quality?: number;
    /** The resolution for the image. One of Image.SCREEN (default), Image.X2 or Image.X4 */
    resolution?: number;
}


/** Object function argument in WriteMovie */
interface WriteMovieArgument_options {
    /** The AVI format for the movie if writing an AVI file. One of Image.JPEG (default), Image.BMP8C, Image.BMP8 or Image.BMP */
    aviFormat?: number;
    /** Whether to dither 8 bit images or not (default is false) */
    dither?: boolean;
    /** The format for the movie. One of Image.MP4 (default), Image.AVI or Image.AGIF */
    format?: number;
    /** The frame rate (default = 25) */
    frameRate?: number;
    /** An individual GraphicsWindow to write movie for. If not given (default) all the windows on the current page will be written */
    graphicsWindow?: GraphicsWindow;
    /** The quality for AVI MJPEG images (1 - 100) (default = 90) */
    quality?: number;
    /** The number of repeats for the movie. 0 is infinite (default = 0) */
    repeat?: number;
    /** The target file size for the movie file in megabytes. This only applies when 'format' is Image.MP4. If this is positive, it supersedes any value for 'quality'. This value is only a target and not a certainly achieved exact size. If the target file size is 0.0, it has the same effect as being undefined. */
    targetFileSize?: number;
}

declare class Image {
/**
 * Writes a 3D (GLB) file
 * @param name Filename for the movie
 * @param options Object containing options for writing movie. Can be any of:
 */
    static Write3D(name: string, options?: Write3DArgument_options): void;

/**
 * Writes a static image file
 * @param name Filename for the image
 * @param options Object containing options for writing image. Can be any of:
 */
    static WriteImage(name: string, options?: WriteImageArgument_options): void;

/**
 * Writes a movie file
 * @param name Filename for the movie
 * @param options Object containing options for writing movie. Can be any of:
 */
    static WriteMovie(name: string, options?: WriteMovieArgument_options): void;

/** 8-bit animated GIF file */
    static AGIF: number;
/** Use all states */
    static ALL_STATES: number;
/** AVI movie file */
    static AVI: number;
/** 24-bit uncompressed BMP file */
    static BMP: number;
/** 8-bit uncompressed BMP file */
    static BMP8: number;
/** 8-bit compressed BMP file */
    static BMP8C: number;
/** 8-bit GIF file */
    static GIF: number;
/** GLB animation file */
    static GLB: number;
/** Uncompressed GLB animation file */
    static GLBU: number;
/** JPEG file */
    static JPEG: number;
/** MP4 movie file */
    static MP4: number;
/** 24-bit PNG file */
    static PNG: number;
/** 8-bit PNG file */
    static PNG8: number;
/** PPM file */
    static PPM: number;
/** Image will be created at screen resolution. */
    static SCREEN: number;
/** Image will be created at 2x screen resolution. */
    static X2: number;
/** Image will be created at 4x screen resolution. */
    static X4: number;
}

declare class Include {
/**
 * Returns the first include file in the model (or null if there are no include files in the model)
 * @param model Model to get first include file in
 * @returns Include object
 */
    static First(model: Model): Include;

/**
 * Returns the include file in the model with number (or null if it does not exist)
 * @param model Model to get include file in
 * @param number The number for the include file in the model. Note that include file numbers start at 1. 0 is the main file.
 * @returns Include object
 */
    static GetFromID(model: Model, number: number): Include;

/**
 * Returns the last include file in the model (or null if there are no include files in the model)
 * @param model Model to get last include file in
 * @returns Include object
 */
    static Last(model: Model): Include;

/**
 * Returns the next include file in the model (or null if there is not one)
 * @returns Include object
 */
    Next(): Include;

/**
 * Returns the previous include file in the model (or null if there is not one)
 * @returns Include object
 */
    Previous(): Include;

/**
 * Returns the total number of include files in the model
 * @param model Model to get total in
 * @returns Number of includes
 */
    static Total(model: Model): number;

/** The label for the include file */
    readonly label: number;
/** The name for the include file */
    readonly name: string;
/** The label for the include file parent (0 if main file) */
    readonly parent: number;
/** Use directory separators native to this machine when writing directory names. */
    static NATIVE: number;
/** Use unix directory separators when writing directory names. */
    static UNIX: number;
/** Use windows directory separators when writing directory names. */
    static WINDOWS: number;
}


/** Object returned by GetIncludeInfo */
interface GetIncludeInfoReturn {
    /** The label of the include file */
    label: number;
    /** The name of the include file */
    name: string;
    /** The parent include file (0 if main file) */
    parent: number;
}

/**
 * Returns information about an include file in the current model
 * @param include_id Include number
 */
declare function GetIncludeInfo(include_id: number): GetIncludeInfoReturn;

/**
 * Returns the external label of internal &lt;item&gt; of type &lt;type_code&gt;
 * @param type_code A valid type code (e.g. NODE, SOLID, SHELL)
 * @param item The internal number starting from 1
 * @param state_id State number to use instead of the current state
 * @returns integer
 */
declare function GetLabel(type_code: number, item: number, state_id?: number): number;


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

declare class Material {
/**
 * Clears a flag on a material
 * @param flag Flag (see AllocateFlag) to clear on the material
 */
    ClearFlag(flag: number): void;

/**
 * Returns the first material in the model (or null if there are no materials in the model)
 * @param model Model to get first material in
 * @returns Material object
 */
    static First(model: Model): Material;

/**
 * Flags all of the materials in the model with a defined flag
 * @param model Model that all the materials will be flagged in
 * @param flag Flag (see AllocateFlag) to set on the materials
 */
    static FlagAll(model: Model, flag: number): void;

/**
 * Checks if the material is flagged or not
 * @param flag Flag (see AllocateFlag) to test on the material
 * @returns true if flagged, false if not
 */
    Flagged(flag: number): boolean;

/**
 * Returns an array of Material objects or properties for all of the materials in the model. If the optional property argument is not given then an array of Material objects is returned. If the property argument is given, that property value for each material is returned in the array instead of a Material object
 * @param model Model that all the materials are in
 * @param property Name for property to get for all materials in the model
 * @returns Array of Material objects or properties
 */
    static GetAll(model: Model, property?: string): Material[];

/**
 * Gets all of the materials in the model flagged with a defined flag. If the optional property argument is not given then an array of Material objects is returned. If the property argument is given, that property value for each material is returned in the array instead of a Material object
 * @param model Model that the flagged materials are in
 * @param flag Flag (see AllocateFlag) set on the materials to get
 * @param property Name for property to get for all flagged materials in the model
 * @returns Array of Material objects or properties
 */
    static GetFlagged(model: Model, flag: number, property?: string): Material[];

/**
 * Returns the Material object for material in model with label (or null if it does not exist)
 * @param model Model to get material in
 * @param label The Ansys LS-DYNA label for the material in the model
 * @returns Material object
 */
    static GetFromID(model: Model, label: number): Material;

/**
 * Returns the Material object for material in model with index (or null if it does not exist)
 * @param model Model to get material in
 * @param index The D3PLOT internal index in the model for material, starting at 0.
 * @returns Material object
 */
    static GetFromIndex(model: Model, index: number): Material;

/**
 * Returns the last material in the model (or null if there are no materials in the model)
 * @param model Model to get last material in
 * @returns Material object
 */
    static Last(model: Model): Material;

/**
 * Returns the next material in the model (or null if there is not one)
 * @returns Material object
 */
    Next(): Material;

/**
 * Returns the previous material in the model (or null if there is not one)
 * @returns Material object
 */
    Previous(): Material;

/**
 * Sets a flag on a material
 * @param flag Flag (see AllocateFlag) to set on the material
 */
    SetFlag(flag: number): void;

/**
 * Returns the total number of materials in the model
 * @param model Model to get total in
 * @returns The number of materials
 */
    static Total(model: Model): number;

/**
 * Unsets a defined flag on all of the materials in the model
 * @param model Model that the defined flag for all materials will be unset in
 * @param flag Flag (see AllocateFlag) to unset on the materials
 */
    static UnflagAll(model: Model, flag: number): void;

/** The include file number in the model that the material is in */
    readonly include: number;
/** The internal index for the material in D3PLOT (starting at 0) */
    readonly index: number;
/** The Ansys LS-DYNA label for the material */
    readonly label: number;
/** The Model that the material is in */
    readonly model: Model;
/** The name for the material type (e.g. *MAT_RIGID) */
    readonly name: string;
/** The title for the material (or null if no title) */
    readonly title: string;
/** The type for the material (will be Type.MATERIAL) */
    readonly type: number;
}

/**
 * Returns the external material id of internal &lt;item&gt; of type &lt;type_code&gt; Use of this function requires that material data be present, which means that a .ztf file must have been read. If the optional &lt;layer_id&gt; argument is used the element must be in a part using a *PART_COMPOSITE definition. If the material number is requested for a (composite) layer that does not exist in this item a value of zero is returned. No warning message is issued in this situation since experience has shown that this is a common occurrence and excessive warning messages are a nuisance.
 * @param type_code PART or a valid part-based element type code (e.g. SOLID, SHELL)
 * @param item If +ve, the internal item number starting at 1. If -ve, the external label of the item. Internal numbers will be many times faster to process.
 * @param layer_id For composites the layer number 1 - n.
 * @param state_id State number to be used instead of the current state
 * @returns integer
 */
declare function GetMid(type_code: number, item: number, layer_id?: number, state_id?: number): number;


/** Object returned by Data */
interface DataReturn {
    /** X component of the measurement (for types Measure.NODE_TO_NODE, Measure.NODE_ORIGIN, Measure.NODE_TO_PART or Measure.PART_TO_PART) */
    dx: number;
    /** Y component of the measurement (for types Measure.NODE_TO_NODE, Measure.NODE_ORIGIN, Measure.NODE_TO_PART or Measure.PART_TO_PART) */
    dy: number;
    /** Z component of the measurement (for types Measure.NODE_TO_NODE, Measure.NODE_ORIGIN, Measure.NODE_TO_PART or Measure.PART_TO_PART) */
    dz: number;
    /** magnitude of the measurement (length for types Measure.NODE_TO_NODE, Measure.NODE_ORIGIN, Measure.NODE_TO_PART or Measure.PART_TO_PART, angle in degrees for type Measure.NODE_ANGLE) */
    mag: number;
    /** Angle in the XY plane in degrees for type Measure.NODE_ANGLE */
    xy: number;
    /** Angle in the XZ plane in degrees for type Measure.NODE_ANGLE. The zx property is an alternative name for this. */
    xz: number;
    /** Angle in the YZ plane in degrees for type Measure.NODE_ANGLE */
    yz: number;
    /** Angle in the ZX plane in degrees for type Measure.NODE_ANGLE. The xz property is an alternative name for this. */
    zx: number;
}


/** Object function argument in Measure constructor */
interface Measure_constructor_Argument_options {
    /** First node for the measurement */
    node1: Node;
    /** Second node for the measurement */
    node2: Node;
    /** Third node for the measurement */
    node3: Node;
    /** First part for the measurement */
    part1: Part;
    /** Second part for the measurement */
    part2: Part;
    /** Graphics window where the measurement will be created. If omitted, it will be created in the first window. */
    window: GraphicsWindow;
}


/** Object function argument in Measure constructor */
interface Measure_constructor_Argument_options {
    /** Model ID for the first node or part for the measurement. If omitted, the current model will be used. */
    model1: number;
    /** Model ID for the second node or part for the measurement. If omitted, the current model will be used. */
    model2: number;
    /** Model ID for the third node for the measurement. If omitted, the current model will be used. */
    model3: number;
    /** First node for the measurement. If +ve: internal node number starting at 1 (faster), if -ve: external node label. */
    node1: number;
    /** Second node for the measurement. If +ve: internal node number starting at 1 (faster), if -ve: external node label. */
    node2: number;
    /** Third node for the measurement. If +ve: internal node number starting at 1 (faster), if -ve: external node label. */
    node3: number;
    /** First part for the measurement If +ve: internal part number starting at 1 (faster), if -ve: external part label. */
    part1: number;
    /** Second part for the measurement. If +ve: internal part number starting at 1 (faster), if -ve: external part label. */
    part2: number;
    /** Graphics window ID where the measurement will be created. If omitted, it will be created in the first window. */
    window: number;
}

declare class Measure {
/**
 * Returns an object with data for this measure.
 */
    Data(): DataReturn;

/**
 * Deletes the measure with the given index.
 * @param type Index of the measure to be deleted, starting at 1.
 */
    static Delete(type: number): void;

/**
 * Deletes all measures.
 */
    static DeleteAll(): void;

/**
 * Gets the measure object for a given index.
 * @param index Index of the measure, starting at 1.
 * @returns Measure object for that index
 */
    static GetFromIndex(index: number): Measure;

/**
 * Create a new Measure object.
 * @param type Measure type. Can be Measure.NODE_TO_NODE, Measure.NODE_ANGLE, Measure.NODE_ORIGIN, Measure.NODE_TO_PART or Measure.PART_TO_PART
 * @param options Measure options.
 * @returns Measure object
 */
    constructor(type: number, options: Measure_constructor_Argument_options);

/** true if calculations in Measure.Data() only consider unblanked elements, false (default) if they consider all elements. */
    static consider_blanking: boolean;
/** Index of the measure currently selected for display purposes, starting at 1. */
    static current: number;
/** Display options for measurements. Can be any combination (bitwise OR) of Measure.MAGNITUDE, Measure.VECTOR, Measure.LABEL and Measure.TRANSPARENT. */
    static display: number;
/** Number format for measures. Can be Measure.AUTOMATIC, Measure.SCIENTIFIC or Measure.GENERAL. */
    static format: number;
/** Index where the measure appears on the interactive measure menu, starting at 1. Note that the index of a measure can change when measures with lower indices are deleted. */
    readonly index: number;
/** Line style for measures. Can be Measure.HIDDEN or Measure.WIREFRAME. */
    static line: number;
/** Measure name */
    name: string;
/** Whether or not to consider Deform (Shift deform, Magnify etc.) or model space offsets in the calculation of measures. Can be any combination (bitwise OR) of Measure.DEFORM, Measure.MODEL_SPACE. */
    static offsets: number;
/** Number of decimal places for scientific or general number format. */
    static precision: number;
/** Whether all, only the current or no measure is shown. Can be Measure.SHOW_NONE, Measure.SHOW_CURRENT or Measure.SHOW_ALL. */
    static show: number;
/** Total number of measures in D3PLOT */
    static readonly total: number;
/** Measure type. Can be Measure.NODE_TO_NODE, Measure.NODE_ANGLE, Measure.NODE_ORIGIN, Measure.NODE_TO_PART or Measure.PART_TO_PART. */
    readonly type: number;
/** Automatic number format */
    static AUTOMATIC: number;
/** Consider Deform (Shift deform, Magnify etc.) coordinates for measure calculations */
    static DEFORM: number;
/** General number format, for example 123.4 */
    static GENERAL: number;
/** Hidden line style for measures */
    static HIDDEN: number;
/** Display measure entity labels */
    static LABEL: number;
/** Display measurement magnitude */
    static MAGNITUDE: number;
/** Consider model space offsets in the graphics window */
    static MODEL_SPACE: number;
/** Node angle measure type */
    static NODE_ANGLE: number;
/** Node to origin measure type */
    static NODE_ORIGIN: number;
/** Node to node measure type */
    static NODE_TO_NODE: number;
/** Node to part measure type */
    static NODE_TO_PART: number;
/** Part to part measure type */
    static PART_TO_PART: number;
/** Scientific number format, for example, 1.234E+2 */
    static SCIENTIFIC: number;
/** Show all measures */
    static SHOW_ALL: number;
/** Show only the current measure */
    static SHOW_CURRENT: number;
/** Show no measure */
    static SHOW_NONE: number;
/** Transparent display of measurements */
    static TRANSPARENT: number;
/** Display measurement vector */
    static VECTOR: number;
/** Wireframe line style for measures */
    static WIREFRAME: number;
}


/** Object function argument in ReadPropertiesFile */
interface ReadPropertiesFileArgument_info {
    /** Ignore any element properties in the properties file and only process part based entries (default is false) */
    ignoreElements: boolean;
    /** Blank everything in the model before reading the properties file (default is false) */
    preBlank: boolean;
}

declare class Model {
/**
 * Clears a flag on all of the items in the model
 * @param flag Flag (see AllocateFlag) to clear
 */
    ClearFlag(flag: number): void;

/**
 * Deletes a model in D3PLOTDo not use the Model object after calling this method.
 */
    Delete(): void;

/**
 * Returns the Model object for the first model in D3PLOT (or null if there are no models)
 * @returns Model object
 */
    static First(): Model;

/**
 * Returns the Model object for a model ID (or null if model does not exist)
 * @param model_number number of the model you want the Model object for
 * @returns Model object
 */
    static GetFromID(model_number: number): Model;

/**
 * Returns the graphics window(s) that the model exists in
 * @returns Array of GraphicsWindow objects
 */
    GraphicsWindows(): array;

/**
 * Returns the highest model number in D3PLOT (or 0 if no models). Also see Total()
 * @returns Highest model number
 */
    static Highest(): number;

/**
 * Returns the Model object for the last model in D3PLOT (or null if there are no models)
 * @returns Model object
 */
    static Last(): Model;

/**
 * Returns the next model (or null if there is not one)
 * @returns Model object
 */
    Next(): Model;

/**
 * Returns the previous model (or null if there is not one)
 * @returns Model object
 */
    Previous(): Model;

/**
 * Reads a file into D3PLOT
 * @param filename Filename you want to read
 * @returns Model object
 */
    static Read(filename: string): Model;

/**
 * Reads a properties file for the model
 * @param filename Filename for the properties file you want to read
 * @param info Object containing the information to set. Can be any of:
 */
    ReadPropertiesFile(filename: string, info?: ReadPropertiesFileArgument_info): void;

/**
 * Rereads the model
 */
    Reread(): void;

/**
 * Rescans the model
 */
    Rescan(): void;

/**
 * Returns the analysis time for a particular state in the model
 * @param state The state you want to get the time for (0 &lt;= state &lt;= states)
 * @returns Analysis time
 */
    Time(state: number): number;

/**
 * Returns the total number of models in use in D3PLOT. Also see Highest()
 * @returns Total number of models in use
 */
    static Total(): number;

/**
 * Reads a file into the first free model in D3PLOT
 * @param filename Filename you want to read
 * @returns Model object
 */
    constructor(filename: string);

/** The model filename */
    readonly filename: boolean;
/** The model number */
    readonly number: number;
/** The state in the model used for scripting methods. Note that this is not the state that is displayed for a model in a graphics window. This property is only used for some of the scripting methods. Many of the methods in the API depend on which state the model is in and setting this property alters that state. To set the state used for all the "get" and "put" functions which handle model-related data use this property. To change the state that is displayed for a model in a graphics window use the GraphicsWindow state property */
    state: number;
/** The total number of states in the model */
    states: number;
/** The model title */
    title: string;
}


/** Object returned by GetModelInfo */
interface GetModelInfoReturn {
    /** the full name, including the pathname, of the contact force CTF file (intfor) */
    ctf_name: string;
    /** the number of adaptive remesh families in the file sequence. Will be one for a normal non-adaptive analysis */
    num_families: number;
    /** the number of complete states in the file sequence */
    num_states: number;
    /** the full name, including the pathname, of the Nastran OP2 file */
    op2_name: string;
    /** the full name, including the pathname, of the LS-PREPOST database file */
    pp_name: string;
    /** the full name, including the pathname, of the complete state PTF/d3plot file */
    ptf_name: string;
    /** the full name, including the pathname, of the extra database XTF file */
    xtf_name: string;
    /** the full name, including the pathname, of the extra database ZTF file */
    ztf_name: string;
}

/**
 * Returns information about filenames in the current model, or in model_id if specified. It is an error to define model_id that is not currently in use. Notes The vast majority of analyses do not use adaptive remeshing and the family_id argument can be ignored. When it is given: Family id 0 is the base analysis Family id 1 is the first remesh, ie name_aa ... and so on
 * @param model_id Model number. The current model is used if unspecified or zero
 * @param family_id Family number (starting from zero). The family number of an adaptive remesh analysis
 */
declare function GetModelInfo(model_id?: number, family_id?: number): GetModelInfoReturn;

/**
 * Checks whether a model exists in the database
 * @param model_id Model number to check
 * @returns boolean
 */
declare function ModelExists(model_id: number): boolean;

/**
 * Sets the current model in the JavaScript interface to model_id At the start of script execution the current model is automatically set to the first active model in the database
 * @param model_id Model number to be made current
 * @returns boolean
 */
declare function SetCurrentModel(model_id: number): boolean;


/** Object function argument in GetData */
interface GetDataArgument_options {
    /** The extra data component number if component Component.SOX for solids, Component.BMX for beams or Component.SHX for shells and thick shells */
    extra: number;
    /** Integration point number to get the data at (ip &gt;= 1 or one of the constants Constant.TOP, Constant.MIDDLE or Constant.BOTTOM). If the integration point is not defined it will use the integration point defined on the current GUI "data" panel, which defaults to the middle surface for shells, thick shells, and solids, and Mag All for beams, but may vary if changed by an interactive user. If consistent output from a script is required, independent of any prior interactive activity, an explicit integration point or surface should be defined */
    ip: number;
    /** On plane integration point number for shells and thick shells (op &gt;= 1 [default]) */
    op: number;
    /** The frame of reference to return values in. Either Constant.GLOBAL (default), Constant.LOCAL, Constant.CYLINDRICAL, Constant.USER_DEFINED or Constant.MATERIAL. This is only necessary for directional components (eg X stress) and then only when something other than the default Constant.GLOBAL coordinate system is to be used */
    referenceFrame: number;
    /** The user-defined component number if component Component.UNOS, Component.UNOV, Component.USSS, Component.USST, Component.UBMS or Component.UBMV */
    user: number;
}


/** Object function argument in GetMultipleData */
interface GetMultipleDataArgument_options {
    /** The extra data component number if component Component.SOX for solids, Component.BMX for beams or Component.SHX for shells and thick shells */
    extra: number;
    /** Integration point number to get the data at (ip &gt;= 1 or one of the constants Constant.TOP, Constant.MIDDLE or Constant.BOTTOM) */
    ip: number;
    /** On plane integration point number for shells and thick shells (op &gt;= 1 [default]) */
    op: number;
    /** The frame of reference to return values in. Either Constant.GLOBAL (default), Constant.LOCAL, Constant.CYLINDRICAL, Constant.USER_DEFINED or Constant.MATERIAL. This is only necessary for directional components (eg X stress) and then only when something other than the default Constant.GLOBAL coordinate system is to be used */
    referenceFrame: number;
    /** The user-defined component number if component Component.UNOS, Component.UNOV, Component.USSS, Component.USST, Component.UBMS or Component.UBMV */
    user: number;
}

declare class Node {
/**
 * Returns the acceleration for the node
 * @returns Array containing the nodal acceleration [Ax, Ay, Az] (or null if the value cannot be calculated)
 */
    Acceleration(): array;

/**
 * Blanks the node in a graphics window
 * @param window GraphicsWindow) to blank the node in
 */
    Blank(window: GraphicsWindow): void;

/**
 * Blanks all of the nodes in the model
 * @param window GraphicsWindow) to blank the nodes in
 * @param model Model that all the nodes will be blanked in
 */
    static BlankAll(window: GraphicsWindow, model: Model): void;

/**
 * Blanks all of the nodes in the model flagged with a defined flag
 * @param window GraphicsWindow) to blank the nodes in
 * @param model Model that the flagged nodes will be blanked in
 * @param flag Flag (see AllocateFlag) set on the nodes to blank
 */
    static BlankFlagged(window: GraphicsWindow, model: Model, flag: number): void;

/**
 * Checks if the node is blanked in a graphics window or not
 * @param window GraphicsWindow) in which to check if the node is blanked
 * @returns true if blanked, false if not
 */
    Blanked(window: GraphicsWindow): boolean;

/**
 * Clears a flag on a node
 * @param flag Flag (see AllocateFlag) to clear on the node
 */
    ClearFlag(flag: number): void;

/**
 * Returns the coordinates for the node
 * @returns Array containing the nodal coordinates [Cx, Cy, Cz] (or null if the value cannot be calculated)
 */
    Coordinates(): array;

/**
 * Returns the displacement for the node
 * @returns Array containing the nodal displacement [Dx, Dy, Dz] (or null if the value cannot be calculated)
 */
    Displacement(): array;

/**
 * Returns the elements using this node
 * @param type The type of elements. Either Type.BEAM, Type.SHELL, Type.SOLID or Type.TSHELL
 * @returns Array containing the elements or null if there are no elements
 */
    Elements(type: number): array;

/**
 * Returns the first node in the model (or null if there are no nodes in the model)
 * @param model Model to get first node in
 * @returns Node object
 */
    static First(model: Model): Node;

/**
 * Flags all of the nodes in the model with a defined flag
 * @param model Model that all the nodes will be flagged in
 * @param flag Flag (see AllocateFlag) to set on the nodes
 */
    static FlagAll(model: Model, flag: number): void;

/**
 * Checks if the node is flagged or not
 * @param flag Flag (see AllocateFlag) to test on the node
 * @returns true if flagged, false if not
 */
    Flagged(flag: number): boolean;

/**
 * Returns an array of Node objects or properties for all of the nodes in the model. If the optional property argument is not given then an array of Node objects is returned. If the property argument is given, that property value for each node is returned in the array instead of a Node object
 * @param model Model that all the nodes are in
 * @param property Name for property to get for all nodes in the model
 * @returns Array of Node objects or properties
 */
    static GetAll(model: Model, property?: string): Node[];

/**
 * Returns the value for a data component. Also see GetMultipleData
 * @param component Component constant to get data for
 * @param options Object containing options for getting data. Can be any of:
 * @returns Number if a scalar component, array if a vector or tensor component (or null if the value cannot be calculated because it's not available in the model). If requesting an invalid component it will throw an error (e.g. Component.AREA of a node).
 */
    GetData(component: number, options?: GetDataArgument_options): number | array;

/**
 * Gets all of the nodes in the model flagged with a defined flag. If the optional property argument is not given then an array of Node objects is returned. If the property argument is given, that property value for each node is returned in the array instead of a Node object
 * @param model Model that the flagged nodes are in
 * @param flag Flag (see AllocateFlag) set on the nodes to get
 * @param property Name for property to get for all flagged nodes in the model
 * @returns Array of Node objects or properties
 */
    static GetFlagged(model: Model, flag: number, property?: string): Node[];

/**
 * Returns the Node object for node in model with label (or null if it does not exist)
 * @param model Model to get node in
 * @param label The Ansys LS-DYNA label for the node in the model
 * @returns Node object
 */
    static GetFromID(model: Model, label: number): Node;

/**
 * Returns the Node object for node in model with index (or null if it does not exist)
 * @param model Model to get node in
 * @param index The D3PLOT internal index in the model for node, starting at 0.
 * @returns Node object
 */
    static GetFromIndex(model: Model, index: number): Node;

/**
 * Returns the value for a data component for multiple nodes. For each node a local property called data will be created containing a number if a scalar component, or an array if a vector or tensor component (or null if the value cannot be calculated). The data is also returned as an object. Also see GetData
 * @param component Component constant to get data for
 * @param items Array of Node objects to get the data for. All of the nodes must be in the same model.
 * @param options Object containing options for getting data. Can be any of:
 * @returns Object containing the data. A property is created in the object for each node with the label. The value of the property is a number if a scalar component or an array if a vector or tensor component (or null if the value cannot be calculated)
 */
    static GetMultipleData(component: number, items: array[], options?: GetMultipleDataArgument_options): object;

/**
 * Returns the last node in the model (or null if there are no nodes in the model)
 * @param model Model to get last node in
 * @returns Node object
 */
    static Last(model: Model): Node;

/**
 * Returns the next node in the model (or null if there is not one)
 * @returns Node object
 */
    Next(): Node;

/**
 * Allows the user to pick a node from the screen
 * @returns Node object or null if cancelled
 */
    static Pick(): Node;

/**
 * Returns the previous node in the model (or null if there is not one)
 * @returns Node object
 */
    Previous(): Node;

/**
 * Selects nodes using an object menu
 * @param flag Flag (see AllocateFlag) to use when selecting nodes
 * @returns The number of nodes selected or null if menu cancelled
 */
    static Select(flag: number): number;

/**
 * Sets a flag on a node
 * @param flag Flag (see AllocateFlag) to set on the node
 */
    SetFlag(flag: number): void;

/**
 * Returns the total number of nodes in the model
 * @param model Model to get total in
 * @returns The number of nodes
 */
    static Total(model: Model): number;

/**
 * Unblanks the node in a graphics window
 * @param window GraphicsWindow) to unblank the node in
 */
    Unblank(window: GraphicsWindow): void;

/**
 * Unblanks all of the nodes in the model
 * @param window GraphicsWindow) to unblank the nodes in
 * @param model Model that all the nodes will be unblanked in
 */
    static UnblankAll(window: GraphicsWindow, model: Model): void;

/**
 * Unblanks all of the nodes in the model flagged with a defined flag
 * @param window GraphicsWindow) to unblank the nodes in
 * @param model Model that the flagged nodes will be unblanked in
 * @param flag Flag (see AllocateFlag) set on the nodes to unblank
 */
    static UnblankFlagged(window: GraphicsWindow, model: Model, flag: number): void;

/**
 * Unsets a defined flag on all of the nodes in the model
 * @param model Model that the defined flag for all nodes will be unset in
 * @param flag Flag (see AllocateFlag) to unset on the nodes
 */
    static UnflagAll(model: Model, flag: number): void;

/**
 * Returns the velocity for the node
 * @returns Array containing the nodal velocity [Vx, Vy, Vz] (or null if the value cannot be calculated)
 */
    Velocity(): array;

/** The colour of the node */
    colour: Colour;
/** Component data for a node passed as an argument to GetMultipleData. Note that data will only exist for the instance of the node passed to GetMultipleData. i.e. it is a local property stored on the specific instance. It is not stored in the D3PLOT database */
    readonly data: number;
/** The display mode of the node. Can be Constant.WIREFRAME, Constant.HIDDEN, Constant.SHADED or Constant.CURRENT. */
    displayMode: number;
/** The include file number in the model that the node is in */
    readonly include: number;
/** The internal index for the node in D3PLOT (starting at 0) */
    readonly index: number;
/** The Ansys LS-DYNA label for the node */
    readonly label: number;
/** The Model that the node is in */
    readonly model: Model;
/** The overlay colour of the node */
    overlayColour: Colour;
/** The overlay mode of the node. Can be Constant.NO_OVERLAY, Constant.FREE_EDGE, Constant.ALL_EDGES or Constant.CURRENT. */
    overlayMode: number;
/** The transparency of the node between 0 (opaque) and 100 (clear) */
    transparency: number;
/** The type for the node (will be Type.NODE) */
    readonly type: number;
}

declare class Options {
/** If true then D3PLOT will automatically confirm (i.e. press the OK button) on (most) message boxes that are mapped. If false (default) then the message boxes will be shown and wait for the user to press a button. This option may be useful to help automate an operation where D3PLOT would normally show a message box and wait for the user to press a button. */
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
 * Returns the Page object for the page currently shown in D3PLOT
 * @returns Page object
 */
    static Current(): Page;

/**
 * Returns the Page object for the first page in D3PLOT
 * @returns Page object
 */
    static First(): Page;

/**
 * Returns the Page object for a page ID
 * @param page_number number of the page you want the Page object for
 * @returns Page object
 */
    static GetFromID(page_number: number): Page;

/**
 * Returns the Page object for the last page in D3PLOT
 * @returns Page object
 */
    static Last(): Page;

/**
 * Returns the next page (or null if there is not one)
 * @returns Page object
 */
    Next(): Page;

/**
 * Returns the previous page (or null if there is not one)
 * @returns Page object
 */
    Previous(): Page;

/**
 * Shows this page in D3PLOT
 */
    Show(): void;

/**
 * Returns the total number of pages in D3PLOT.
 * @returns Total number of pages
 */
    static Total(): number;

/** The page layout. See Page layout constants */
    layout: number;
/** The page number */
    readonly number: number;
/** The number of windows in X for the LAYOUT_CUSTOM case */
    x: number;
/** The number of windows in Y for the LAYOUT_CUSTOM case */
    y: number;
/** Layout with 1x1 windows per page */
    static LAYOUT_1_1: number;
/** Layout with 2x2 windows per page */
    static LAYOUT_2_2: number;
/** Layout with 3x3 windows per page */
    static LAYOUT_3_3: number;
/** Custom layout with user defined numer of windows per page */
    static LAYOUT_CUSTOM: number;
/** Layout with tall tiles */
    static LAYOUT_TILE_TALL: number;
/** Layout with wide tiles */
    static LAYOUT_TILE_WIDE: number;
}


/** Object returned by GetConditionParts */
interface GetConditionPartsReturn {
    /** Failing parts (array of Part objects) */
    failList: number[];
    /** Number of failing parts */
    failed: number;
    /** Passing parts (array of Part objects) */
    passList: number[];
    /** Number of passing parts */
    passed: number;
}


/** Object function argument in GetConditionParts */
interface GetConditionPartsArgument_options {
    /** A valid component code (e.g. Component.DX, Component.SXY) */
    component: number;
    /**  The "Extra" solid or shell component id for components Component.SOX or Component.SHX The ALE mulit-material group id for components Component.AMMG and Component.AMMS The sub-number for user-defined components Component.UNOS, Component.UNOV, Component.USSS, Component.USST, Component.UBMS, Component.UBMV  If any of the above component codes are used, the "extra" argument must be set to a non zero value. */
    extra?: number;
    /** Through thickness integration point. This can be either  A +ve integer that is an integration point id or One of the types Constant.TOP, Constant.MIDDLE or Constant.BOTTOM for shell surfaces only  Integration points are only meaningful for some element type / data component combinations:  Shells and Tshells: Stress and strain tensors; Plastic strain; "Extra" data (if written) Solids: All data components if NINTSLD on the database extent binary card is 8 Beams: 3 Stresses and 2 strains in non-resultant beam types if BEAMIP on the database extent binary card is &gt; 0  ip and op have become complex data fields, please see the separate section on Defining the Integration point argument. Where the integration point is not relevant this argument may be omitted. If &lt;ip&gt; is not defined, this function will loop through all through thickness integration points for each element to check if the condition is fufilled. */
    ip?: number;
    /** Determines if condition is Constant.LT (&lt;), Constant.LTEQ (&lt;=), Constant.GT (&gt;) or Constant.GTEQ (&gt;=) than &lt;value&gt;. */
    mode: number;
    /** The model whose parts will be returned */
    model: Model;
    /** On plan integration point. Defaults to the first one. */
    op?: number;
    /** A value to compare element data against. */
    value: number;
}


/** Object function argument in GetData */
interface GetDataArgument_options {
    /** The extra data component number if component Component.SOX for solids, Component.BMX for beams or Component.SHX for shells and thick shells */
    extra: number;
    /** Integration point number to get the data at (ip &gt;= 1 or one of the constants Constant.TOP, Constant.MIDDLE or Constant.BOTTOM). If the integration point is not defined it will use the integration point defined on the current GUI "data" panel, which defaults to the middle surface for shells, thick shells, and solids, and Mag All for beams, but may vary if changed by an interactive user. If consistent output from a script is required, independent of any prior interactive activity, an explicit integration point or surface should be defined */
    ip: number;
    /** On plane integration point number for shells and thick shells (op &gt;= 1 [default]) */
    op: number;
    /** The frame of reference to return values in. Either Constant.GLOBAL (default), Constant.LOCAL, Constant.CYLINDRICAL, Constant.USER_DEFINED or Constant.MATERIAL. This is only necessary for directional components (eg X stress) and then only when something other than the default Constant.GLOBAL coordinate system is to be used */
    referenceFrame: number;
    /** The user-defined component number if component Component.UNOS, Component.UNOV, Component.USSS, Component.USST, Component.UBMS or Component.UBMV */
    user: number;
}


/** Object function argument in GetMultipleData */
interface GetMultipleDataArgument_options {
    /** The extra data component number if component Component.SOX for solids, Component.BMX for beams or Component.SHX for shells and thick shells */
    extra: number;
    /** Integration point number to get the data at (ip &gt;= 1 or one of the constants Constant.TOP, Constant.MIDDLE or Constant.BOTTOM) */
    ip: number;
    /** On plane integration point number for shells and thick shells (op &gt;= 1 [default]) */
    op: number;
    /** The frame of reference to return values in. Either Constant.GLOBAL (default), Constant.LOCAL, Constant.CYLINDRICAL, Constant.USER_DEFINED or Constant.MATERIAL. This is only necessary for directional components (eg X stress) and then only when something other than the default Constant.GLOBAL coordinate system is to be used */
    referenceFrame: number;
    /** The user-defined component number if component Component.UNOS, Component.UNOV, Component.USSS, Component.USST, Component.UBMS or Component.UBMV */
    user: number;
}

declare class Part {
/**
 * Blanks the part in a graphics window
 * @param window GraphicsWindow) to blank the part in
 */
    Blank(window: GraphicsWindow): void;

/**
 * Blanks all of the parts in the model
 * @param window GraphicsWindow) to blank the parts in
 * @param model Model that all the parts will be blanked in
 */
    static BlankAll(window: GraphicsWindow, model: Model): void;

/**
 * Blanks all of the parts in the model flagged with a defined flag
 * @param window GraphicsWindow) to blank the parts in
 * @param model Model that the flagged parts will be blanked in
 * @param flag Flag (see AllocateFlag) set on the parts to blank
 */
    static BlankFlagged(window: GraphicsWindow, model: Model, flag: number): void;

/**
 * Checks if the part is blanked in a graphics window or not
 * @param window GraphicsWindow) in which to check if the part is blanked
 * @returns true if blanked, false if not
 */
    Blanked(window: GraphicsWindow): boolean;

/**
 * Clears a flag on a part
 * @param flag Flag (see AllocateFlag) to clear on the part
 */
    ClearFlag(flag: number): void;

/**
 * Returns an array containing the elements in the part
 * @returns Array of element objects
 */
    Elements(): array;

/**
 * Returns the first part in the model (or null if there are no parts in the model)
 * @param model Model to get first part in
 * @returns Part object
 */
    static First(model: Model): Part;

/**
 * Flags all of the parts in the model with a defined flag
 * @param model Model that all the parts will be flagged in
 * @param flag Flag (see AllocateFlag) to set on the parts
 */
    static FlagAll(model: Model, flag: number): void;

/**
 * Checks if the part is flagged or not
 * @param flag Flag (see AllocateFlag) to test on the part
 * @returns true if flagged, false if not
 */
    Flagged(flag: number): boolean;

/**
 * Returns an array of Part objects or properties for all of the parts in the model. If the optional property argument is not given then an array of Part objects is returned. If the property argument is given, that property value for each part is returned in the array instead of a Part object
 * @param model Model that all the parts are in
 * @param property Name for property to get for all parts in the model
 * @returns Array of Part objects or properties
 */
    static GetAll(model: Model, property?: string): Part[];

/**
 * Returns the composite data for an integration point in *PART_COMPOSITE.
 * @param ipt The integration point you want the data for. Note that integration points start at 0, not 1.
 * @returns An array containing the material id and thickness values.
 */
    GetCompositeData(ipt: number): number[];

/**
 * Returns an object with all parts in current model filtered into two lists (pass_list and fail_list). Passing parts must have elements that pass the specified condition (indicated by &lt;value&gt; and &lt;mode&gt;) for the specified &lt;component&gt;. For spotweld data components passing parts must have a beam or solid (hex) spotweld passing the specified condition such that the element of that weld is in the given part. NOTE: This function only works for scalar components. If &lt;component&gt; is a vector or tensor component, this function will return null.
 * @param options Returns an object with all parts in current model filtered into two lists (pass_list and fail_list). Passing parts must have elements that pass the specified condition (indicated by &lt;value&gt; and &lt;mode&gt;) for the specified &lt;component&gt;. For spotweld data components passing parts must have a beam or solid (hex) spotweld passing the specified condition such that the element of that weld is in the given part. NOTE: This function only works for scalar components. If &lt;component&gt; is a vector or tensor component, this function will return null.
 */
    static GetConditionParts(options: GetConditionPartsArgument_options): GetConditionPartsReturn;

/**
 * Returns the value for a data component. Also see GetMultipleData
 * @param component Component constant to get data for
 * @param options Object containing options for getting data. Can be any of:
 * @returns Number if a scalar component, array if a vector or tensor component (or null if the value cannot be calculated because it's not available in the model). If requesting an invalid component it will throw an error (e.g. Component.AREA of a node).
 */
    GetData(component: number, options?: GetDataArgument_options): number | array;

/**
 * Gets all of the parts in the model flagged with a defined flag. If the optional property argument is not given then an array of Part objects is returned. If the property argument is given, that property value for each part is returned in the array instead of a Part object
 * @param model Model that the flagged parts are in
 * @param flag Flag (see AllocateFlag) set on the parts to get
 * @param property Name for property to get for all flagged parts in the model
 * @returns Array of Part objects or properties
 */
    static GetFlagged(model: Model, flag: number, property?: string): Part[];

/**
 * Returns the Part object for part in model with label (or null if it does not exist)
 * @param model Model to get part in
 * @param label The Ansys LS-DYNA label for the part in the model
 * @returns Part object
 */
    static GetFromID(model: Model, label: number): Part;

/**
 * Returns the Part object for part in model with index (or null if it does not exist)
 * @param model Model to get part in
 * @param index The D3PLOT internal index in the model for part, starting at 0.
 * @returns Part object
 */
    static GetFromIndex(model: Model, index: number): Part;

/**
 * Returns the value for a data component for multiple parts. For each part a local property called data will be created containing a number if a scalar component, or an array if a vector or tensor component (or null if the value cannot be calculated). The data is also returned as an object. Also see GetData
 * @param component Component constant to get data for
 * @param items Array of Part objects to get the data for. All of the parts must be in the same model.
 * @param options Object containing options for getting data. Can be any of:
 * @returns Object containing the data. A property is created in the object for each part with the label. The value of the property is a number if a scalar component or an array if a vector or tensor component (or null if the value cannot be calculated)
 */
    static GetMultipleData(component: number, items: array[], options?: GetMultipleDataArgument_options): object;

/**
 * Returns the last part in the model (or null if there are no parts in the model)
 * @param model Model to get last part in
 * @returns Part object
 */
    static Last(model: Model): Part;

/**
 * Returns the next part in the model (or null if there is not one)
 * @returns Part object
 */
    Next(): Part;

/**
 * Allows the user to pick a part from the screen
 * @returns Part object or null if cancelled
 */
    static Pick(): Part;

/**
 * Returns the previous part in the model (or null if there is not one)
 * @returns Part object
 */
    Previous(): Part;

/**
 * Selects parts using an object menu
 * @param flag Flag (see AllocateFlag) to use when selecting parts
 * @returns The number of parts selected or null if menu cancelled
 */
    static Select(flag: number): number;

/**
 * Sets a flag on a part
 * @param flag Flag (see AllocateFlag) to set on the part
 */
    SetFlag(flag: number): void;

/**
 * Returns the total number of parts in the model
 * @param model Model to get total in
 * @returns The number of parts
 */
    static Total(model: Model): number;

/**
 * Unblanks the part in a graphics window
 * @param window GraphicsWindow) to unblank the part in
 */
    Unblank(window: GraphicsWindow): void;

/**
 * Unblanks all of the parts in the model
 * @param window GraphicsWindow) to unblank the parts in
 * @param model Model that all the parts will be unblanked in
 */
    static UnblankAll(window: GraphicsWindow, model: Model): void;

/**
 * Unblanks all of the parts in the model flagged with a defined flag
 * @param window GraphicsWindow) to unblank the parts in
 * @param model Model that the flagged parts will be unblanked in
 * @param flag Flag (see AllocateFlag) set on the parts to unblank
 */
    static UnblankFlagged(window: GraphicsWindow, model: Model, flag: number): void;

/**
 * Unsets a defined flag on all of the parts in the model
 * @param model Model that the defined flag for all parts will be unset in
 * @param flag Flag (see AllocateFlag) to unset on the parts
 */
    static UnflagAll(model: Model, flag: number): void;

/** The colour of the part */
    colour: Colour;
/** If this is a PART_COMPOSITE. Can be true or false. If there is no ztf file for the model this will be false. */
    readonly composite: boolean;
/** Component data for a part passed as an argument to GetMultipleData. Note that data will only exist for the instance of the part passed to GetMultipleData. i.e. it is a local property stored on the specific instance. It is not stored in the D3PLOT database */
    readonly data: number;
/** The display mode of the part. Can be Constant.WIREFRAME, Constant.HIDDEN, Constant.SHADED or Constant.CURRENT. */
    displayMode: number;
/** The type of elements in the part. e.g. Type.SHELL, Type.SOLID etc */
    readonly elementType: number;
/** The include file number in the model that the part is in */
    readonly include: number;
/** The internal index for the part in D3PLOT (starting at 0) */
    readonly index: number;
/** The Ansys LS-DYNA label for the part */
    readonly label: number;
/** The Material the part has. This is only available if there is a ztf file for the model. If not null will be returned. If this is a PART_COMPOSITE then null will be returned. If the model comes from writing a PTF/d3plot file from PRIMER and the material was latent there, null will be returned. Part.GetCompositeData should be used to get material data in this case */
    readonly material: Material;
/** The Model that the part is in */
    readonly model: Model;
/** Number of integration points (layers) present for _COMPOSITE parts */
    readonly nip: number;
/** The overlay colour of the part */
    overlayColour: Colour;
/** The overlay mode of the part. Can be Constant.NO_OVERLAY, Constant.FREE_EDGE, Constant.ALL_EDGES or Constant.CURRENT. */
    overlayMode: number;
/** The title for the part (or null if no title) */
    readonly title: string;
/** The transparency of the part between 0 (opaque) and 100 (clear) */
    transparency: number;
/** The type for the part (will be Type.PART) */
    readonly type: number;
}


/** Object returned by GetPartInfo */
interface GetPartInfoReturn {
    /** Part transparency (0-255) */
    alpha: number;
    /** Blue component of part colour (0-255) */
    blue: number;
    /** Green component of part colour (0-255) */
    green: number;
    /** The include number part is in (0 if main file) */
    include: number;
    /** Red component of part colour (0-255) */
    red: number;
    /** The part title */
    title: string;
}

/**
 * Returns information about a part in the current model
 * @param part_id Internal part number
 */
declare function GetPartInfo(part_id: number): GetPartInfoReturn;

/**
 * Returns the internal part id of internal &lt;item&gt; of type &lt;type_code&gt;
 * @param type_code A valid part-based element type code (e.g. SOLID, SHELL)
 * @param item If +ve, the internal item number starting at 1. If -ve, the external label of the item. Internal numbers will be many times faster to process.
 * @param state_id State number to be used instead of the current state
 * @returns integer
 */
declare function GetPid(type_code: number, item: number, state_id?: number): number;

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


/** Object function argument in GetData */
interface GetDataArgument_options {
    /** The extra data component number if component Component.SOX for solids, Component.BMX for beams or Component.SHX for shells and thick shells */
    extra: number;
    /** Integration point number to get the data at (ip &gt;= 1 or one of the constants Constant.TOP, Constant.MIDDLE or Constant.BOTTOM). If the integration point is not defined it will use the integration point defined on the current GUI "data" panel, which defaults to the middle surface for shells, thick shells, and solids, and Mag All for beams, but may vary if changed by an interactive user. If consistent output from a script is required, independent of any prior interactive activity, an explicit integration point or surface should be defined */
    ip: number;
    /** On plane integration point number for shells and thick shells (op &gt;= 1 [default]) */
    op: number;
    /** The frame of reference to return values in. Either Constant.GLOBAL (default), Constant.LOCAL, Constant.CYLINDRICAL, Constant.USER_DEFINED or Constant.MATERIAL. This is only necessary for directional components (eg X stress) and then only when something other than the default Constant.GLOBAL coordinate system is to be used */
    referenceFrame: number;
    /** The user-defined component number if component Component.UNOS, Component.UNOV, Component.USSS, Component.USST, Component.UBMS or Component.UBMV */
    user: number;
}


/** Object function argument in GetMultipleData */
interface GetMultipleDataArgument_options {
    /** The extra data component number if component Component.SOX for solids, Component.BMX for beams or Component.SHX for shells and thick shells */
    extra: number;
    /** Integration point number to get the data at (ip &gt;= 1 or one of the constants Constant.TOP, Constant.MIDDLE or Constant.BOTTOM) */
    ip: number;
    /** On plane integration point number for shells and thick shells (op &gt;= 1 [default]) */
    op: number;
    /** The frame of reference to return values in. Either Constant.GLOBAL (default), Constant.LOCAL, Constant.CYLINDRICAL, Constant.USER_DEFINED or Constant.MATERIAL. This is only necessary for directional components (eg X stress) and then only when something other than the default Constant.GLOBAL coordinate system is to be used */
    referenceFrame: number;
    /** The user-defined component number if component Component.UNOS, Component.UNOV, Component.USSS, Component.USST, Component.UBMS or Component.UBMV */
    user: number;
}

declare class Segment {
/**
 * Blanks the segment in a graphics window
 * @param window GraphicsWindow) to blank the segment in
 */
    Blank(window: GraphicsWindow): void;

/**
 * Blanks all of the segments in the model
 * @param window GraphicsWindow) to blank the segments in
 * @param model Model that all the segments will be blanked in
 */
    static BlankAll(window: GraphicsWindow, model: Model): void;

/**
 * Blanks all of the segments in the model flagged with a defined flag
 * @param window GraphicsWindow) to blank the segments in
 * @param model Model that the flagged segments will be blanked in
 * @param flag Flag (see AllocateFlag) set on the segments to blank
 */
    static BlankFlagged(window: GraphicsWindow, model: Model, flag: number): void;

/**
 * Checks if the segment is blanked in a graphics window or not
 * @param window GraphicsWindow) in which to check if the segment is blanked
 * @returns true if blanked, false if not
 */
    Blanked(window: GraphicsWindow): boolean;

/**
 * Clears a flag on a segment
 * @param flag Flag (see AllocateFlag) to clear on the segment
 */
    ClearFlag(flag: number): void;

/**
 * Returns the first segment in the model (or null if there are no segments in the model)
 * @param model Model to get first segment in
 * @returns Segment object
 */
    static First(model: Model): Segment;

/**
 * Flags all of the segments in the model with a defined flag
 * @param model Model that all the segments will be flagged in
 * @param flag Flag (see AllocateFlag) to set on the segments
 */
    static FlagAll(model: Model, flag: number): void;

/**
 * Checks if the segment is flagged or not
 * @param flag Flag (see AllocateFlag) to test on the segment
 * @returns true if flagged, false if not
 */
    Flagged(flag: number): boolean;

/**
 * Returns an array of Segment objects or properties for all of the segments in the model. If the optional property argument is not given then an array of Segment objects is returned. If the property argument is given, that property value for each segment is returned in the array instead of a Segment object
 * @param model Model that all the segments are in
 * @param property Name for property to get for all segments in the model
 * @returns Array of Segment objects or properties
 */
    static GetAll(model: Model, property?: string): Segment[];

/**
 * Returns the value for a data component. Also see GetMultipleData
 * @param component Component constant to get data for
 * @param options Object containing options for getting data. Can be any of:
 * @returns Number if a scalar component, array if a vector or tensor component (or null if the value cannot be calculated because it's not available in the model). If requesting an invalid component it will throw an error (e.g. Component.AREA of a node).
 */
    GetData(component: number, options?: GetDataArgument_options): number | array;

/**
 * Gets all of the segments in the model flagged with a defined flag. If the optional property argument is not given then an array of Segment objects is returned. If the property argument is given, that property value for each segment is returned in the array instead of a Segment object
 * @param model Model that the flagged segments are in
 * @param flag Flag (see AllocateFlag) set on the segments to get
 * @param property Name for property to get for all flagged segments in the model
 * @returns Array of Segment objects or properties
 */
    static GetFlagged(model: Model, flag: number, property?: string): Segment[];

/**
 * Returns the Segment object for segment in model with label (or null if it does not exist)
 * @param model Model to get segment in
 * @param label The Ansys LS-DYNA label for the segment in the model
 * @returns Segment object
 */
    static GetFromID(model: Model, label: number): Segment;

/**
 * Returns the Segment object for segment in model with index (or null if it does not exist)
 * @param model Model to get segment in
 * @param index The D3PLOT internal index in the model for segment, starting at 0.
 * @returns Segment object
 */
    static GetFromIndex(model: Model, index: number): Segment;

/**
 * Returns the value for a data component for multiple segments. For each segment a local property called data will be created containing a number if a scalar component, or an array if a vector or tensor component (or null if the value cannot be calculated). The data is also returned as an object. Also see GetData
 * @param component Component constant to get data for
 * @param items Array of Segment objects to get the data for. All of the segments must be in the same model.
 * @param options Object containing options for getting data. Can be any of:
 * @returns Object containing the data. A property is created in the object for each segment with the label. The value of the property is a number if a scalar component or an array if a vector or tensor component (or null if the value cannot be calculated)
 */
    static GetMultipleData(component: number, items: array[], options?: GetMultipleDataArgument_options): object;

/**
 * Returns the last segment in the model (or null if there are no segments in the model)
 * @param model Model to get last segment in
 * @returns Segment object
 */
    static Last(model: Model): Segment;

/**
 * Returns the local axes of the element in model space, expressed as direction cosines in a 2D array. Beam elements must have 3 nodes to be able to return local axes.
 * @returns array of arrays
 */
    LocalAxes(): array[];

/**
 * Returns the next segment in the model (or null if there is not one)
 * @returns Segment object
 */
    Next(): Segment;

/**
 * Allows the user to pick a segment from the screen
 * @returns Segment object or null if cancelled
 */
    static Pick(): Segment;

/**
 * Returns the previous segment in the model (or null if there is not one)
 * @returns Segment object
 */
    Previous(): Segment;

/**
 * Selects segments using an object menu
 * @param flag Flag (see AllocateFlag) to use when selecting segments
 * @returns The number of segments selected or null if menu cancelled
 */
    static Select(flag: number): number;

/**
 * Sets a flag on a segment
 * @param flag Flag (see AllocateFlag) to set on the segment
 */
    SetFlag(flag: number): void;

/**
 * Returns the topology for the segment in the model
 * @returns array of Node objects
 */
    Topology(): Node[];

/**
 * Returns the total number of segments in the model
 * @param model Model to get total in
 * @returns The number of segments
 */
    static Total(model: Model): number;

/**
 * Unblanks the segment in a graphics window
 * @param window GraphicsWindow) to unblank the segment in
 */
    Unblank(window: GraphicsWindow): void;

/**
 * Unblanks all of the segments in the model
 * @param window GraphicsWindow) to unblank the segments in
 * @param model Model that all the segments will be unblanked in
 */
    static UnblankAll(window: GraphicsWindow, model: Model): void;

/**
 * Unblanks all of the segments in the model flagged with a defined flag
 * @param window GraphicsWindow) to unblank the segments in
 * @param model Model that the flagged segments will be unblanked in
 * @param flag Flag (see AllocateFlag) set on the segments to unblank
 */
    static UnblankFlagged(window: GraphicsWindow, model: Model, flag: number): void;

/**
 * Unsets a defined flag on all of the segments in the model
 * @param model Model that the defined flag for all segments will be unset in
 * @param flag Flag (see AllocateFlag) to unset on the segments
 */
    static UnflagAll(model: Model, flag: number): void;

/** The colour of the segment */
    colour: Colour;
/** Component data for a segment passed as an argument to GetMultipleData. Note that data will only exist for the instance of the segment passed to GetMultipleData. i.e. it is a local property stored on the specific instance. It is not stored in the D3PLOT database */
    readonly data: number;
/** The display mode of the segment. Can be Constant.WIREFRAME, Constant.HIDDEN, Constant.SHADED or Constant.CURRENT. */
    displayMode: number;
/** The include file number in the model that the segment is in */
    readonly include: number;
/** The internal index for the segment in D3PLOT (starting at 0) */
    readonly index: number;
/** The Ansys LS-DYNA label for the segment */
    readonly label: number;
/** The Material the segment has. This is only available if there is a ztf file for the model. If not null will be returned. If this is a PART_COMPOSITE then null will be returned. If the model comes from writing a PTF/d3plot file from PRIMER and the material was latent there, null will be returned. Part.GetCompositeData should be used to get material data in this case */
    readonly material: Material;
/** The Model that the segment is in */
    readonly model: Model;
/** The overlay colour of the segment */
    overlayColour: Colour;
/** The overlay mode of the segment. Can be Constant.NO_OVERLAY, Constant.FREE_EDGE, Constant.ALL_EDGES or Constant.CURRENT. */
    overlayMode: number;
/** The Part the segment is in */
    readonly part: Part;
/** The transparency of the segment between 0 (opaque) and 100 (clear) */
    transparency: number;
/** The type for the segment (will be Type.SEGMENT) */
    readonly type: number;
}

/**
 * Checks whether an item has been selected with Select()
 * @param type_code The type of item to select (SOLID, etc.)
 * @param item If +ve, the internal item number starting at 1. If -ve, the external label of the item.
 * @returns boolean
 */
declare function IsSelected(type_code: number, item: number): boolean;

/**
 * Allows the user to interactively pick a specified number of items NOTE: If you are using the WINDOW type code, the function should be seen as "Pick item/model and return its WINDOW ID" i.e. if you try and use the pick function and click somewhere away from the model, the function will return null. On the other hand, if you click the model then it will return the WINDOW ID in which the model resides.
 * @param type_code The type of item to select (SOLID, etc.)
 * @param number The number of items to pick.  &gt; 0 The internal indicies of the picked items are returned &lt; 0 The external labels of the picked items are returned 
 * @returns Array of integers (or null if not picked)
 */
declare function Pick(type_code: number, number: number): number[];

/**
 * Allows the user to interactively select items using the mouse or from a menu.
 * @param type_code The type of item to select (SOLID, etc.)
 * @returns integer, &gt;0 the number of items selected, -1 user cancelled the operation, -2 model doesn't contain any of the type requested
 */
declare function Select(type_code: number): number;

declare class SetBeam {
/**
 * Returns all of the beam items for the beam set in the model
 * @returns array of Beam objects
 */
    AllItems(): Beam[];

/**
 * Clears a flag on a beam set
 * @param flag Flag (see AllocateFlag) to clear on the beam set
 */
    ClearFlag(flag: number): void;

/**
 * Returns the first beam set in the model (or null if there are no beam sets in the model)
 * @param model Model to get first beam set in
 * @returns SetBeam object
 */
    static First(model: Model): SetBeam;

/**
 * Flags all of the beam sets in the model with a defined flag
 * @param model Model that all the beam sets will be flagged in
 * @param flag Flag (see AllocateFlag) to set on the beam sets
 */
    static FlagAll(model: Model, flag: number): void;

/**
 * Checks if the beam set is flagged or not
 * @param flag Flag (see AllocateFlag) to test on the beam set
 * @returns true if flagged, false if not
 */
    Flagged(flag: number): boolean;

/**
 * Returns an array of SetBeam objects or properties for all of the beam sets in the model. If the optional property argument is not given then an array of SetBeam objects is returned. If the property argument is given, that property value for each beam set is returned in the array instead of a SetBeam object
 * @param model Model that all the beam sets are in
 * @param property Name for property to get for all beam sets in the model
 * @returns Array of SetBeam objects or properties
 */
    static GetAll(model: Model, property?: string): SetBeam[];

/**
 * Gets all of the beam sets in the model flagged with a defined flag. If the optional property argument is not given then an array of SetBeam objects is returned. If the property argument is given, that property value for each beam set is returned in the array instead of a SetBeam object
 * @param model Model that the flagged beam sets are in
 * @param flag Flag (see AllocateFlag) set on the beam sets to get
 * @param property Name for property to get for all flagged beam sets in the model
 * @returns Array of SetBeam objects or properties
 */
    static GetFlagged(model: Model, flag: number, property?: string): SetBeam[];

/**
 * Returns the SetBeam object for beam set in model with label (or null if it does not exist)
 * @param model Model to get beam set in
 * @param label The Ansys LS-DYNA label for the beam set in the model
 * @returns SetBeam object
 */
    static GetFromID(model: Model, label: number): SetBeam;

/**
 * Returns the SetBeam object for beam set in model with index (or null if it does not exist)
 * @param model Model to get beam set in
 * @param index The D3PLOT internal index in the model for beam set, starting at 0.
 * @returns SetBeam object
 */
    static GetFromIndex(model: Model, index: number): SetBeam;

/**
 * Returns a beam item from the beam set in the model
 * @param index The index in the beam set to get the beam from (0 &lt;= index &lt; total)
 * @returns Beam object
 */
    Item(index: number): Beam;

/**
 * Returns the last beam set in the model (or null if there are no beam sets in the model)
 * @param model Model to get last beam set in
 * @returns SetBeam object
 */
    static Last(model: Model): SetBeam;

/**
 * Returns the next beam set in the model (or null if there is not one)
 * @returns SetBeam object
 */
    Next(): SetBeam;

/**
 * Returns the previous beam set in the model (or null if there is not one)
 * @returns SetBeam object
 */
    Previous(): SetBeam;

/**
 * Sets a flag on a beam set
 * @param flag Flag (see AllocateFlag) to set on the beam set
 */
    SetFlag(flag: number): void;

/**
 * Returns the total number of beam sets in the model
 * @param model Model to get total in
 * @returns The number of beam sets
 */
    static Total(model: Model): number;

/**
 * Unsets a defined flag on all of the beam sets in the model
 * @param model Model that the defined flag for all beam sets will be unset in
 * @param flag Flag (see AllocateFlag) to unset on the beam sets
 */
    static UnflagAll(model: Model, flag: number): void;

/** The include file number in the model that the beam set is in */
    readonly include: number;
/** The internal index for the beam set in D3PLOT (starting at 0) */
    readonly index: number;
/** The Ansys LS-DYNA label for the beam set */
    readonly label: number;
/** The Model that the beam set is in */
    readonly model: Model;
/** The title for the beam set (or null if no title). This is only available if there is a ztf file for the model. If not null will be returned. */
    readonly title: string;
/** The total number of beam items in the beam set */
    readonly total: number;
/** The type for the beam set (will be Type.SET_BEAM) */
    readonly type: number;
}

declare class SetNode {
/**
 * Returns all of the node items for the node set in the model
 * @returns array of Node objects
 */
    AllItems(): Node[];

/**
 * Clears a flag on a node set
 * @param flag Flag (see AllocateFlag) to clear on the node set
 */
    ClearFlag(flag: number): void;

/**
 * Returns the first node set in the model (or null if there are no node sets in the model)
 * @param model Model to get first node set in
 * @returns SetNode object
 */
    static First(model: Model): SetNode;

/**
 * Flags all of the node sets in the model with a defined flag
 * @param model Model that all the node sets will be flagged in
 * @param flag Flag (see AllocateFlag) to set on the node sets
 */
    static FlagAll(model: Model, flag: number): void;

/**
 * Checks if the node set is flagged or not
 * @param flag Flag (see AllocateFlag) to test on the node set
 * @returns true if flagged, false if not
 */
    Flagged(flag: number): boolean;

/**
 * Returns an array of SetNode objects or properties for all of the node sets in the model. If the optional property argument is not given then an array of SetNode objects is returned. If the property argument is given, that property value for each node set is returned in the array instead of a SetNode object
 * @param model Model that all the node sets are in
 * @param property Name for property to get for all node sets in the model
 * @returns Array of SetNode objects or properties
 */
    static GetAll(model: Model, property?: string): SetNode[];

/**
 * Gets all of the node sets in the model flagged with a defined flag. If the optional property argument is not given then an array of SetNode objects is returned. If the property argument is given, that property value for each node set is returned in the array instead of a SetNode object
 * @param model Model that the flagged node sets are in
 * @param flag Flag (see AllocateFlag) set on the node sets to get
 * @param property Name for property to get for all flagged node sets in the model
 * @returns Array of SetNode objects or properties
 */
    static GetFlagged(model: Model, flag: number, property?: string): SetNode[];

/**
 * Returns the SetNode object for node set in model with label (or null if it does not exist)
 * @param model Model to get node set in
 * @param label The Ansys LS-DYNA label for the node set in the model
 * @returns SetNode object
 */
    static GetFromID(model: Model, label: number): SetNode;

/**
 * Returns the SetNode object for node set in model with index (or null if it does not exist)
 * @param model Model to get node set in
 * @param index The D3PLOT internal index in the model for node set, starting at 0.
 * @returns SetNode object
 */
    static GetFromIndex(model: Model, index: number): SetNode;

/**
 * Returns a node item from the node set in the model
 * @param index The index in the node set to get the node from (0 &lt;= index &lt; total)
 * @returns Node object
 */
    Item(index: number): Node;

/**
 * Returns the last node set in the model (or null if there are no node sets in the model)
 * @param model Model to get last node set in
 * @returns SetNode object
 */
    static Last(model: Model): SetNode;

/**
 * Returns the next node set in the model (or null if there is not one)
 * @returns SetNode object
 */
    Next(): SetNode;

/**
 * Returns the previous node set in the model (or null if there is not one)
 * @returns SetNode object
 */
    Previous(): SetNode;

/**
 * Sets a flag on a node set
 * @param flag Flag (see AllocateFlag) to set on the node set
 */
    SetFlag(flag: number): void;

/**
 * Returns the total number of node sets in the model
 * @param model Model to get total in
 * @returns The number of node sets
 */
    static Total(model: Model): number;

/**
 * Unsets a defined flag on all of the node sets in the model
 * @param model Model that the defined flag for all node sets will be unset in
 * @param flag Flag (see AllocateFlag) to unset on the node sets
 */
    static UnflagAll(model: Model, flag: number): void;

/** The include file number in the model that the node set is in */
    readonly include: number;
/** The internal index for the node set in D3PLOT (starting at 0) */
    readonly index: number;
/** The Ansys LS-DYNA label for the node set */
    readonly label: number;
/** The Model that the node set is in */
    readonly model: Model;
/** The title for the node set (or null if no title). This is only available if there is a ztf file for the model. If not null will be returned. */
    readonly title: string;
/** The total number of node items in the node set */
    readonly total: number;
/** The type for the node set (will be Type.SET_NODE) */
    readonly type: number;
}

declare class SetPart {
/**
 * Returns all of the part items for the part set in the model
 * @returns array of Part objects
 */
    AllItems(): Part[];

/**
 * Clears a flag on a part set
 * @param flag Flag (see AllocateFlag) to clear on the part set
 */
    ClearFlag(flag: number): void;

/**
 * Returns the first part set in the model (or null if there are no part sets in the model)
 * @param model Model to get first part set in
 * @returns SetPart object
 */
    static First(model: Model): SetPart;

/**
 * Flags all of the part sets in the model with a defined flag
 * @param model Model that all the part sets will be flagged in
 * @param flag Flag (see AllocateFlag) to set on the part sets
 */
    static FlagAll(model: Model, flag: number): void;

/**
 * Checks if the part set is flagged or not
 * @param flag Flag (see AllocateFlag) to test on the part set
 * @returns true if flagged, false if not
 */
    Flagged(flag: number): boolean;

/**
 * Returns an array of SetPart objects or properties for all of the part sets in the model. If the optional property argument is not given then an array of SetPart objects is returned. If the property argument is given, that property value for each part set is returned in the array instead of a SetPart object
 * @param model Model that all the part sets are in
 * @param property Name for property to get for all part sets in the model
 * @returns Array of SetPart objects or properties
 */
    static GetAll(model: Model, property?: string): SetPart[];

/**
 * Gets all of the part sets in the model flagged with a defined flag. If the optional property argument is not given then an array of SetPart objects is returned. If the property argument is given, that property value for each part set is returned in the array instead of a SetPart object
 * @param model Model that the flagged part sets are in
 * @param flag Flag (see AllocateFlag) set on the part sets to get
 * @param property Name for property to get for all flagged part sets in the model
 * @returns Array of SetPart objects or properties
 */
    static GetFlagged(model: Model, flag: number, property?: string): SetPart[];

/**
 * Returns the SetPart object for part set in model with label (or null if it does not exist)
 * @param model Model to get part set in
 * @param label The Ansys LS-DYNA label for the part set in the model
 * @returns SetPart object
 */
    static GetFromID(model: Model, label: number): SetPart;

/**
 * Returns the SetPart object for part set in model with index (or null if it does not exist)
 * @param model Model to get part set in
 * @param index The D3PLOT internal index in the model for part set, starting at 0.
 * @returns SetPart object
 */
    static GetFromIndex(model: Model, index: number): SetPart;

/**
 * Returns a part item from the part set in the model
 * @param index The index in the part set to get the part from (0 &lt;= index &lt; total)
 * @returns Part object
 */
    Item(index: number): Part;

/**
 * Returns the last part set in the model (or null if there are no part sets in the model)
 * @param model Model to get last part set in
 * @returns SetPart object
 */
    static Last(model: Model): SetPart;

/**
 * Returns the next part set in the model (or null if there is not one)
 * @returns SetPart object
 */
    Next(): SetPart;

/**
 * Returns the previous part set in the model (or null if there is not one)
 * @returns SetPart object
 */
    Previous(): SetPart;

/**
 * Sets a flag on a part set
 * @param flag Flag (see AllocateFlag) to set on the part set
 */
    SetFlag(flag: number): void;

/**
 * Returns the total number of part sets in the model
 * @param model Model to get total in
 * @returns The number of part sets
 */
    static Total(model: Model): number;

/**
 * Unsets a defined flag on all of the part sets in the model
 * @param model Model that the defined flag for all part sets will be unset in
 * @param flag Flag (see AllocateFlag) to unset on the part sets
 */
    static UnflagAll(model: Model, flag: number): void;

/** The include file number in the model that the part set is in */
    readonly include: number;
/** The internal index for the part set in D3PLOT (starting at 0) */
    readonly index: number;
/** The Ansys LS-DYNA label for the part set */
    readonly label: number;
/** The Model that the part set is in */
    readonly model: Model;
/** The title for the part set (or null if no title). This is only available if there is a ztf file for the model. If not null will be returned. */
    readonly title: string;
/** The total number of part items in the part set */
    readonly total: number;
/** The type for the part set (will be Type.SET_PART) */
    readonly type: number;
}

declare class SetShell {
/**
 * Returns all of the shell items for the shell set in the model
 * @returns array of Shell objects
 */
    AllItems(): Shell[];

/**
 * Clears a flag on a shell set
 * @param flag Flag (see AllocateFlag) to clear on the shell set
 */
    ClearFlag(flag: number): void;

/**
 * Returns the first shell set in the model (or null if there are no shell sets in the model)
 * @param model Model to get first shell set in
 * @returns SetShell object
 */
    static First(model: Model): SetShell;

/**
 * Flags all of the shell sets in the model with a defined flag
 * @param model Model that all the shell sets will be flagged in
 * @param flag Flag (see AllocateFlag) to set on the shell sets
 */
    static FlagAll(model: Model, flag: number): void;

/**
 * Checks if the shell set is flagged or not
 * @param flag Flag (see AllocateFlag) to test on the shell set
 * @returns true if flagged, false if not
 */
    Flagged(flag: number): boolean;

/**
 * Returns an array of SetShell objects or properties for all of the shell sets in the model. If the optional property argument is not given then an array of SetShell objects is returned. If the property argument is given, that property value for each shell set is returned in the array instead of a SetShell object
 * @param model Model that all the shell sets are in
 * @param property Name for property to get for all shell sets in the model
 * @returns Array of SetShell objects or properties
 */
    static GetAll(model: Model, property?: string): SetShell[];

/**
 * Gets all of the shell sets in the model flagged with a defined flag. If the optional property argument is not given then an array of SetShell objects is returned. If the property argument is given, that property value for each shell set is returned in the array instead of a SetShell object
 * @param model Model that the flagged shell sets are in
 * @param flag Flag (see AllocateFlag) set on the shell sets to get
 * @param property Name for property to get for all flagged shell sets in the model
 * @returns Array of SetShell objects or properties
 */
    static GetFlagged(model: Model, flag: number, property?: string): SetShell[];

/**
 * Returns the SetShell object for shell set in model with label (or null if it does not exist)
 * @param model Model to get shell set in
 * @param label The Ansys LS-DYNA label for the shell set in the model
 * @returns SetShell object
 */
    static GetFromID(model: Model, label: number): SetShell;

/**
 * Returns the SetShell object for shell set in model with index (or null if it does not exist)
 * @param model Model to get shell set in
 * @param index The D3PLOT internal index in the model for shell set, starting at 0.
 * @returns SetShell object
 */
    static GetFromIndex(model: Model, index: number): SetShell;

/**
 * Returns a shell item from the shell set in the model
 * @param index The index in the shell set to get the shell from (0 &lt;= index &lt; total)
 * @returns Shell object
 */
    Item(index: number): Shell;

/**
 * Returns the last shell set in the model (or null if there are no shell sets in the model)
 * @param model Model to get last shell set in
 * @returns SetShell object
 */
    static Last(model: Model): SetShell;

/**
 * Returns the next shell set in the model (or null if there is not one)
 * @returns SetShell object
 */
    Next(): SetShell;

/**
 * Returns the previous shell set in the model (or null if there is not one)
 * @returns SetShell object
 */
    Previous(): SetShell;

/**
 * Sets a flag on a shell set
 * @param flag Flag (see AllocateFlag) to set on the shell set
 */
    SetFlag(flag: number): void;

/**
 * Returns the total number of shell sets in the model
 * @param model Model to get total in
 * @returns The number of shell sets
 */
    static Total(model: Model): number;

/**
 * Unsets a defined flag on all of the shell sets in the model
 * @param model Model that the defined flag for all shell sets will be unset in
 * @param flag Flag (see AllocateFlag) to unset on the shell sets
 */
    static UnflagAll(model: Model, flag: number): void;

/** The include file number in the model that the shell set is in */
    readonly include: number;
/** The internal index for the shell set in D3PLOT (starting at 0) */
    readonly index: number;
/** The Ansys LS-DYNA label for the shell set */
    readonly label: number;
/** The Model that the shell set is in */
    readonly model: Model;
/** The title for the shell set (or null if no title). This is only available if there is a ztf file for the model. If not null will be returned. */
    readonly title: string;
/** The total number of shell items in the shell set */
    readonly total: number;
/** The type for the shell set (will be Type.SET_SHELL) */
    readonly type: number;
}

declare class SetSolid {
/**
 * Returns all of the solid items for the solid set in the model
 * @returns array of Solid objects
 */
    AllItems(): Solid[];

/**
 * Clears a flag on a solid set
 * @param flag Flag (see AllocateFlag) to clear on the solid set
 */
    ClearFlag(flag: number): void;

/**
 * Returns the first solid set in the model (or null if there are no solid sets in the model)
 * @param model Model to get first solid set in
 * @returns SetSolid object
 */
    static First(model: Model): SetSolid;

/**
 * Flags all of the solid sets in the model with a defined flag
 * @param model Model that all the solid sets will be flagged in
 * @param flag Flag (see AllocateFlag) to set on the solid sets
 */
    static FlagAll(model: Model, flag: number): void;

/**
 * Checks if the solid set is flagged or not
 * @param flag Flag (see AllocateFlag) to test on the solid set
 * @returns true if flagged, false if not
 */
    Flagged(flag: number): boolean;

/**
 * Returns an array of SetSolid objects or properties for all of the solid sets in the model. If the optional property argument is not given then an array of SetSolid objects is returned. If the property argument is given, that property value for each solid set is returned in the array instead of a SetSolid object
 * @param model Model that all the solid sets are in
 * @param property Name for property to get for all solid sets in the model
 * @returns Array of SetSolid objects or properties
 */
    static GetAll(model: Model, property?: string): SetSolid[];

/**
 * Gets all of the solid sets in the model flagged with a defined flag. If the optional property argument is not given then an array of SetSolid objects is returned. If the property argument is given, that property value for each solid set is returned in the array instead of a SetSolid object
 * @param model Model that the flagged solid sets are in
 * @param flag Flag (see AllocateFlag) set on the solid sets to get
 * @param property Name for property to get for all flagged solid sets in the model
 * @returns Array of SetSolid objects or properties
 */
    static GetFlagged(model: Model, flag: number, property?: string): SetSolid[];

/**
 * Returns the SetSolid object for solid set in model with label (or null if it does not exist)
 * @param model Model to get solid set in
 * @param label The Ansys LS-DYNA label for the solid set in the model
 * @returns SetSolid object
 */
    static GetFromID(model: Model, label: number): SetSolid;

/**
 * Returns the SetSolid object for solid set in model with index (or null if it does not exist)
 * @param model Model to get solid set in
 * @param index The D3PLOT internal index in the model for solid set, starting at 0.
 * @returns SetSolid object
 */
    static GetFromIndex(model: Model, index: number): SetSolid;

/**
 * Returns a solid item from the solid set in the model
 * @param index The index in the solid set to get the solid from (0 &lt;= index &lt; total)
 * @returns Solid object
 */
    Item(index: number): Solid;

/**
 * Returns the last solid set in the model (or null if there are no solid sets in the model)
 * @param model Model to get last solid set in
 * @returns SetSolid object
 */
    static Last(model: Model): SetSolid;

/**
 * Returns the next solid set in the model (or null if there is not one)
 * @returns SetSolid object
 */
    Next(): SetSolid;

/**
 * Returns the previous solid set in the model (or null if there is not one)
 * @returns SetSolid object
 */
    Previous(): SetSolid;

/**
 * Sets a flag on a solid set
 * @param flag Flag (see AllocateFlag) to set on the solid set
 */
    SetFlag(flag: number): void;

/**
 * Returns the total number of solid sets in the model
 * @param model Model to get total in
 * @returns The number of solid sets
 */
    static Total(model: Model): number;

/**
 * Unsets a defined flag on all of the solid sets in the model
 * @param model Model that the defined flag for all solid sets will be unset in
 * @param flag Flag (see AllocateFlag) to unset on the solid sets
 */
    static UnflagAll(model: Model, flag: number): void;

/** The include file number in the model that the solid set is in */
    readonly include: number;
/** The internal index for the solid set in D3PLOT (starting at 0) */
    readonly index: number;
/** The Ansys LS-DYNA label for the solid set */
    readonly label: number;
/** The Model that the solid set is in */
    readonly model: Model;
/** The title for the solid set (or null if no title). This is only available if there is a ztf file for the model. If not null will be returned. */
    readonly title: string;
/** The total number of solid items in the solid set */
    readonly total: number;
/** The type for the solid set (will be Type.SET_SOLID) */
    readonly type: number;
}

declare class SetTshell {
/**
 * Returns all of the thick shell items for the thick shell set in the model
 * @returns array of Tshell objects
 */
    AllItems(): Tshell[];

/**
 * Clears a flag on a thick shell set
 * @param flag Flag (see AllocateFlag) to clear on the thick shell set
 */
    ClearFlag(flag: number): void;

/**
 * Returns the first thick shell set in the model (or null if there are no thick shell sets in the model)
 * @param model Model to get first thick shell set in
 * @returns SetTshell object
 */
    static First(model: Model): SetTshell;

/**
 * Flags all of the thick shell sets in the model with a defined flag
 * @param model Model that all the thick shell sets will be flagged in
 * @param flag Flag (see AllocateFlag) to set on the thick shell sets
 */
    static FlagAll(model: Model, flag: number): void;

/**
 * Checks if the thick shell set is flagged or not
 * @param flag Flag (see AllocateFlag) to test on the thick shell set
 * @returns true if flagged, false if not
 */
    Flagged(flag: number): boolean;

/**
 * Returns an array of SetTshell objects or properties for all of the thick shell sets in the model. If the optional property argument is not given then an array of SetTshell objects is returned. If the property argument is given, that property value for each thick shell set is returned in the array instead of a SetTshell object
 * @param model Model that all the thick shell sets are in
 * @param property Name for property to get for all thick shell sets in the model
 * @returns Array of SetTshell objects or properties
 */
    static GetAll(model: Model, property?: string): SetTshell[];

/**
 * Gets all of the thick shell sets in the model flagged with a defined flag. If the optional property argument is not given then an array of SetTshell objects is returned. If the property argument is given, that property value for each thick shell set is returned in the array instead of a SetTshell object
 * @param model Model that the flagged thick shell sets are in
 * @param flag Flag (see AllocateFlag) set on the thick shell sets to get
 * @param property Name for property to get for all flagged thick shell sets in the model
 * @returns Array of SetTshell objects or properties
 */
    static GetFlagged(model: Model, flag: number, property?: string): SetTshell[];

/**
 * Returns the SetTshell object for thick shell set in model with label (or null if it does not exist)
 * @param model Model to get thick shell set in
 * @param label The Ansys LS-DYNA label for the thick shell set in the model
 * @returns SetTshell object
 */
    static GetFromID(model: Model, label: number): SetTshell;

/**
 * Returns the SetTshell object for thick shell set in model with index (or null if it does not exist)
 * @param model Model to get thick shell set in
 * @param index The D3PLOT internal index in the model for thick shell set, starting at 0.
 * @returns SetTshell object
 */
    static GetFromIndex(model: Model, index: number): SetTshell;

/**
 * Returns a thick shell item from the thick shell set in the model
 * @param index The index in the thick shell set to get the thick shell from (0 &lt;= index &lt; total)
 * @returns Tshell object
 */
    Item(index: number): Tshell;

/**
 * Returns the last thick shell set in the model (or null if there are no thick shell sets in the model)
 * @param model Model to get last thick shell set in
 * @returns SetTshell object
 */
    static Last(model: Model): SetTshell;

/**
 * Returns the next thick shell set in the model (or null if there is not one)
 * @returns SetTshell object
 */
    Next(): SetTshell;

/**
 * Returns the previous thick shell set in the model (or null if there is not one)
 * @returns SetTshell object
 */
    Previous(): SetTshell;

/**
 * Sets a flag on a thick shell set
 * @param flag Flag (see AllocateFlag) to set on the thick shell set
 */
    SetFlag(flag: number): void;

/**
 * Returns the total number of thick shell sets in the model
 * @param model Model to get total in
 * @returns The number of thick shell sets
 */
    static Total(model: Model): number;

/**
 * Unsets a defined flag on all of the thick shell sets in the model
 * @param model Model that the defined flag for all thick shell sets will be unset in
 * @param flag Flag (see AllocateFlag) to unset on the thick shell sets
 */
    static UnflagAll(model: Model, flag: number): void;

/** The include file number in the model that the thick shell set is in */
    readonly include: number;
/** The internal index for the thick shell set in D3PLOT (starting at 0) */
    readonly index: number;
/** The Ansys LS-DYNA label for the thick shell set */
    readonly label: number;
/** The Model that the thick shell set is in */
    readonly model: Model;
/** The title for the thick shell set (or null if no title). This is only available if there is a ztf file for the model. If not null will be returned. */
    readonly title: string;
/** The total number of thick shell items in the thick shell set */
    readonly total: number;
/** The type for the thick shell set (will be Type.SET_TSHELL) */
    readonly type: number;
}


/** Object returned by GetItemsInSet */
interface GetItemsInSetReturn {
    /** Internal entity indices */
    list: number[];
    /** Number of entities in list */
    nn: number;
}


/** Object returned by GetSetInfo */
interface GetSetInfoReturn {
    /** The label of the set */
    label: number;
    /** The name of the set */
    name: string;
    /** Number of items in the set */
    nn: number;
}

/**
 * Returns an object containing the number of items in set &lt;set_id&gt; of set type &lt;set_type&gt; and also an array &lt;list[ ]&gt; of their internal indices. If there are no items in the set then false is returned.
 * @param set_type A valid type code (SET_PART, etc.)
 * @param set_id The set id. If +ve, the internal number starting at 1. If -ve, the external label of the set. Internal numbers will be many times faster to process.
 */
declare function GetItemsInSet(set_type: number, set_id: number): GetItemsInSetReturn;

/**
 * Returns information about a set in the current model
 * @param set_type A valid type code (SET_PART, etc.)
 * @param set_id The set id. If +ve, the internal number starting at 1. If -ve, the external label of the set. Internal numbers will be many times faster to process.
 */
declare function GetSetInfo(set_type: number, set_id: number): GetSetInfoReturn;


/** Object function argument in GetData */
interface GetDataArgument_options {
    /** The extra data component number if component Component.SOX for solids, Component.BMX for beams or Component.SHX for shells and thick shells */
    extra: number;
    /** Integration point number to get the data at (ip &gt;= 1 or one of the constants Constant.TOP, Constant.MIDDLE or Constant.BOTTOM). If the integration point is not defined it will use the integration point defined on the current GUI "data" panel, which defaults to the middle surface for shells, thick shells, and solids, and Mag All for beams, but may vary if changed by an interactive user. If consistent output from a script is required, independent of any prior interactive activity, an explicit integration point or surface should be defined */
    ip: number;
    /** On plane integration point number for shells and thick shells (op &gt;= 1 [default]) */
    op: number;
    /** The frame of reference to return values in. Either Constant.GLOBAL (default), Constant.LOCAL, Constant.CYLINDRICAL, Constant.USER_DEFINED or Constant.MATERIAL. This is only necessary for directional components (eg X stress) and then only when something other than the default Constant.GLOBAL coordinate system is to be used */
    referenceFrame: number;
    /** The user-defined component number if component Component.UNOS, Component.UNOV, Component.USSS, Component.USST, Component.UBMS or Component.UBMV */
    user: number;
}


/** Object function argument in GetMultipleData */
interface GetMultipleDataArgument_options {
    /** The extra data component number if component Component.SOX for solids, Component.BMX for beams or Component.SHX for shells and thick shells */
    extra: number;
    /** Integration point number to get the data at (ip &gt;= 1 or one of the constants Constant.TOP, Constant.MIDDLE or Constant.BOTTOM) */
    ip: number;
    /** On plane integration point number for shells and thick shells (op &gt;= 1 [default]) */
    op: number;
    /** The frame of reference to return values in. Either Constant.GLOBAL (default), Constant.LOCAL, Constant.CYLINDRICAL, Constant.USER_DEFINED or Constant.MATERIAL. This is only necessary for directional components (eg X stress) and then only when something other than the default Constant.GLOBAL coordinate system is to be used */
    referenceFrame: number;
    /** The user-defined component number if component Component.UNOS, Component.UNOV, Component.USSS, Component.USST, Component.UBMS or Component.UBMV */
    user: number;
}


/** Object function argument in PlasticStrain */
interface PlasticStrainArgument_options {
    /** Integration point number to get the data at (ip &gt;= 1 or one of the constants Constant.TOP, Constant.MIDDLE or Constant.BOTTOM) */
    ip: number;
    /** On plane integration point number for shells and thick shells (op &gt;= 1 [default]) */
    op: number;
}


/** Object function argument in StrainTensor */
interface StrainTensorArgument_options {
    /** Integration point number to get the data at (ip &gt;= 1 or one of the constants Constant.TOP, Constant.MIDDLE or Constant.BOTTOM) */
    ip: number;
    /** On plane integration point number for shells and thick shells (op &gt;= 1 [default]) */
    op: number;
    /** The frame of reference to return values in. Either Constant.GLOBAL (default), Constant.LOCAL, Constant.CYLINDRICAL, Constant.USER_DEFINED or Constant.MATERIAL */
    referenceFrame: number;
}


/** Object function argument in StressTensor */
interface StressTensorArgument_options {
    /** Integration point number to get the data at (ip &gt;= 1 or one of the constants Constant.TOP, Constant.MIDDLE or Constant.BOTTOM) */
    ip: number;
    /** On plane integration point number for shells and thick shells (op &gt;= 1 [default]) */
    op: number;
    /** The frame of reference to return values in. Either Constant.GLOBAL (default), Constant.LOCAL, Constant.CYLINDRICAL, Constant.USER_DEFINED or Constant.MATERIAL */
    referenceFrame: number;
}


/** Object function argument in VonMisesStress */
interface VonMisesStressArgument_options {
    /** Integration point number to get the data at (ip &gt;= 1 or one of the constants Constant.TOP, Constant.MIDDLE or Constant.BOTTOM) */
    ip: number;
    /** On plane integration point number for shells and thick shells (op &gt;= 1 [default]) */
    op: number;
}

declare class Shell {
/**
 * Blanks the shell in a graphics window
 * @param window GraphicsWindow) to blank the shell in
 */
    Blank(window: GraphicsWindow): void;

/**
 * Blanks all of the shells in the model
 * @param window GraphicsWindow) to blank the shells in
 * @param model Model that all the shells will be blanked in
 */
    static BlankAll(window: GraphicsWindow, model: Model): void;

/**
 * Blanks all of the shells in the model flagged with a defined flag
 * @param window GraphicsWindow) to blank the shells in
 * @param model Model that the flagged shells will be blanked in
 * @param flag Flag (see AllocateFlag) set on the shells to blank
 */
    static BlankFlagged(window: GraphicsWindow, model: Model, flag: number): void;

/**
 * Checks if the shell is blanked in a graphics window or not
 * @param window GraphicsWindow) in which to check if the shell is blanked
 * @returns true if blanked, false if not
 */
    Blanked(window: GraphicsWindow): boolean;

/**
 * Clears a flag on a shell
 * @param flag Flag (see AllocateFlag) to clear on the shell
 */
    ClearFlag(flag: number): void;

/**
 * Checks if the shell has been deleted or not
 * @returns true if deleted, false if not
 */
    Deleted(): boolean;

/**
 * Returns the first shell in the model (or null if there are no shells in the model)
 * @param model Model to get first shell in
 * @returns Shell object
 */
    static First(model: Model): Shell;

/**
 * Flags all of the shells in the model with a defined flag
 * @param model Model that all the shells will be flagged in
 * @param flag Flag (see AllocateFlag) to set on the shells
 */
    static FlagAll(model: Model, flag: number): void;

/**
 * Checks if the shell is flagged or not
 * @param flag Flag (see AllocateFlag) to test on the shell
 * @returns true if flagged, false if not
 */
    Flagged(flag: number): boolean;

/**
 * Returns an array of Shell objects or properties for all of the shells in the model. If the optional property argument is not given then an array of Shell objects is returned. If the property argument is given, that property value for each shell is returned in the array instead of a Shell object
 * @param model Model that all the shells are in
 * @param property Name for property to get for all shells in the model
 * @returns Array of Shell objects or properties
 */
    static GetAll(model: Model, property?: string): Shell[];

/**
 * Returns the value for a data component. Also see GetMultipleData
 * @param component Component constant to get data for
 * @param options Object containing options for getting data. Can be any of:
 * @returns Number if a scalar component, array if a vector or tensor component (or null if the value cannot be calculated because it's not available in the model). If requesting an invalid component it will throw an error (e.g. Component.AREA of a node).
 */
    GetData(component: number, options?: GetDataArgument_options): number | array;

/**
 * Gets all of the shells in the model flagged with a defined flag. If the optional property argument is not given then an array of Shell objects is returned. If the property argument is given, that property value for each shell is returned in the array instead of a Shell object
 * @param model Model that the flagged shells are in
 * @param flag Flag (see AllocateFlag) set on the shells to get
 * @param property Name for property to get for all flagged shells in the model
 * @returns Array of Shell objects or properties
 */
    static GetFlagged(model: Model, flag: number, property?: string): Shell[];

/**
 * Returns the Shell object for shell in model with label (or null if it does not exist)
 * @param model Model to get shell in
 * @param label The Ansys LS-DYNA label for the shell in the model
 * @returns Shell object
 */
    static GetFromID(model: Model, label: number): Shell;

/**
 * Returns the Shell object for shell in model with index (or null if it does not exist)
 * @param model Model to get shell in
 * @param index The D3PLOT internal index in the model for shell, starting at 0.
 * @returns Shell object
 */
    static GetFromIndex(model: Model, index: number): Shell;

/**
 * Returns the value for a data component for multiple shells. For each shell a local property called data will be created containing a number if a scalar component, or an array if a vector or tensor component (or null if the value cannot be calculated). The data is also returned as an object. Also see GetData
 * @param component Component constant to get data for
 * @param items Array of Shell objects to get the data for. All of the shells must be in the same model.
 * @param options Object containing options for getting data. Can be any of:
 * @returns Object containing the data. A property is created in the object for each shell with the label. The value of the property is a number if a scalar component or an array if a vector or tensor component (or null if the value cannot be calculated)
 */
    static GetMultipleData(component: number, items: array[], options?: GetMultipleDataArgument_options): object;

/**
 * Returns the last shell in the model (or null if there are no shells in the model)
 * @param model Model to get last shell in
 * @returns Shell object
 */
    static Last(model: Model): Shell;

/**
 * Returns the local axes of the element in model space, expressed as direction cosines in a 2D array. Beam elements must have 3 nodes to be able to return local axes.
 * @returns array of arrays
 */
    LocalAxes(): array[];

/**
 * Returns the next shell in the model (or null if there is not one)
 * @returns Shell object
 */
    Next(): Shell;

/**
 * Allows the user to pick a shell from the screen
 * @returns Shell object or null if cancelled
 */
    static Pick(): Shell;

/**
 * Returns the effective plastic strain for the shell
 * @param options Object containing options for getting data. Can be any of:
 * @returns Plastic strain (or null if the value cannot be calculated)
 */
    PlasticStrain(options?: PlasticStrainArgument_options): number;

/**
 * Returns the previous shell in the model (or null if there is not one)
 * @returns Shell object
 */
    Previous(): Shell;

/**
 * Selects shells using an object menu
 * @param flag Flag (see AllocateFlag) to use when selecting shells
 * @returns The number of shells selected or null if menu cancelled
 */
    static Select(flag: number): number;

/**
 * Sets a flag on a shell
 * @param flag Flag (see AllocateFlag) to set on the shell
 */
    SetFlag(flag: number): void;

/**
 * Returns the strain tensor for the shell
 * @param options Object containing options for getting data. Can be any of:
 * @returns Array containing the strain tensor [Exx, Eyy, Ezz, Exy, Eyz, Ezx] (or null if the value cannot be calculated)
 */
    StrainTensor(options?: StrainTensorArgument_options): array;

/**
 * Returns the stress tensor for the shell
 * @param options Object containing options for getting data. Can be any of:
 * @returns Array containing the stress tensor [Exx, Eyy, Ezz, Exy, Eyz, Ezx] (or null if the value cannot be calculated)
 */
    StressTensor(options?: StressTensorArgument_options): array;

/**
 * Returns the topology for the shell in the model
 * @returns array of Node objects
 */
    Topology(): Node[];

/**
 * Returns the total number of shells in the model
 * @param model Model to get total in
 * @returns The number of shells
 */
    static Total(model: Model): number;

/**
 * Returns the total number of shells that have been deleted in a model in the state given by its state property
 * @param model Model to get total in
 * @returns The number of shells that have been deleted
 */
    static TotalDeleted(model: Model): number;

/**
 * Unblanks the shell in a graphics window
 * @param window GraphicsWindow) to unblank the shell in
 */
    Unblank(window: GraphicsWindow): void;

/**
 * Unblanks all of the shells in the model
 * @param window GraphicsWindow) to unblank the shells in
 * @param model Model that all the shells will be unblanked in
 */
    static UnblankAll(window: GraphicsWindow, model: Model): void;

/**
 * Unblanks all of the shells in the model flagged with a defined flag
 * @param window GraphicsWindow) to unblank the shells in
 * @param model Model that the flagged shells will be unblanked in
 * @param flag Flag (see AllocateFlag) set on the shells to unblank
 */
    static UnblankFlagged(window: GraphicsWindow, model: Model, flag: number): void;

/**
 * Unsets a defined flag on all of the shells in the model
 * @param model Model that the defined flag for all shells will be unset in
 * @param flag Flag (see AllocateFlag) to unset on the shells
 */
    static UnflagAll(model: Model, flag: number): void;

/**
 * Returns the von Mises stress for the shell (or null if the value cannot be calculated)
 * @param options Object containing options for getting data. Can be any of:
 * @returns von Mises stress
 */
    VonMisesStress(options?: VonMisesStressArgument_options): number;

/** The colour of the shell */
    colour: Colour;
/** Component data for a shell passed as an argument to GetMultipleData. Note that data will only exist for the instance of the shell passed to GetMultipleData. i.e. it is a local property stored on the specific instance. It is not stored in the D3PLOT database */
    readonly data: number;
/** The display mode of the shell. Can be Constant.WIREFRAME, Constant.HIDDEN, Constant.SHADED or Constant.CURRENT. */
    displayMode: number;
/** The include file number in the model that the shell is in */
    readonly include: number;
/** The internal index for the shell in D3PLOT (starting at 0) */
    readonly index: number;
/** The number of through thickness integration points that the shell has */
    readonly integrationPoints: number;
/** The Ansys LS-DYNA label for the shell */
    readonly label: number;
/** The Material the shell has. This is only available if there is a ztf file for the model. If not null will be returned. If this is a PART_COMPOSITE then null will be returned. If the model comes from writing a PTF/d3plot file from PRIMER and the material was latent there, null will be returned. Part.GetCompositeData should be used to get material data in this case */
    readonly material: Material;
/** The Model that the shell is in */
    readonly model: Model;
/** The number of on plan integration points that the shell has */
    readonly onPlanIntegrationPoints: number;
/** The overlay colour of the shell */
    overlayColour: Colour;
/** The overlay mode of the shell. Can be Constant.NO_OVERLAY, Constant.FREE_EDGE, Constant.ALL_EDGES or Constant.CURRENT. */
    overlayMode: number;
/** The Part the shell is in */
    readonly part: Part;
/** The transparency of the shell between 0 (opaque) and 100 (clear) */
    transparency: number;
/** The type for the shell (will be Type.SHELL) */
    readonly type: number;
}


/** Object function argument in GetData */
interface GetDataArgument_options {
    /** The extra data component number if component Component.SOX for solids, Component.BMX for beams or Component.SHX for shells and thick shells */
    extra: number;
    /** Integration point number to get the data at (ip &gt;= 1 or one of the constants Constant.TOP, Constant.MIDDLE or Constant.BOTTOM). If the integration point is not defined it will use the integration point defined on the current GUI "data" panel, which defaults to the middle surface for shells, thick shells, and solids, and Mag All for beams, but may vary if changed by an interactive user. If consistent output from a script is required, independent of any prior interactive activity, an explicit integration point or surface should be defined */
    ip: number;
    /** On plane integration point number for shells and thick shells (op &gt;= 1 [default]) */
    op: number;
    /** The frame of reference to return values in. Either Constant.GLOBAL (default), Constant.LOCAL, Constant.CYLINDRICAL, Constant.USER_DEFINED or Constant.MATERIAL. This is only necessary for directional components (eg X stress) and then only when something other than the default Constant.GLOBAL coordinate system is to be used */
    referenceFrame: number;
    /** The user-defined component number if component Component.UNOS, Component.UNOV, Component.USSS, Component.USST, Component.UBMS or Component.UBMV */
    user: number;
}


/** Object function argument in GetMultipleData */
interface GetMultipleDataArgument_options {
    /** The extra data component number if component Component.SOX for solids, Component.BMX for beams or Component.SHX for shells and thick shells */
    extra: number;
    /** Integration point number to get the data at (ip &gt;= 1 or one of the constants Constant.TOP, Constant.MIDDLE or Constant.BOTTOM) */
    ip: number;
    /** On plane integration point number for shells and thick shells (op &gt;= 1 [default]) */
    op: number;
    /** The frame of reference to return values in. Either Constant.GLOBAL (default), Constant.LOCAL, Constant.CYLINDRICAL, Constant.USER_DEFINED or Constant.MATERIAL. This is only necessary for directional components (eg X stress) and then only when something other than the default Constant.GLOBAL coordinate system is to be used */
    referenceFrame: number;
    /** The user-defined component number if component Component.UNOS, Component.UNOV, Component.USSS, Component.USST, Component.UBMS or Component.UBMV */
    user: number;
}


/** Object function argument in PlasticStrain */
interface PlasticStrainArgument_options {
    /** Integration point number to get the data at (ip &gt;= 1) */
    ip: number;
}


/** Object function argument in StrainTensor */
interface StrainTensorArgument_options {
    /** Integration point number to get the data at (ip &gt;= 1) */
    ip: number;
    /** The frame of reference to return values in. Either Constant.GLOBAL (default), Constant.LOCAL, Constant.CYLINDRICAL, Constant.USER_DEFINED or Constant.MATERIAL */
    referenceFrame: number;
}


/** Object function argument in StressTensor */
interface StressTensorArgument_options {
    /** Integration point number to get the data at (ip &gt;= 1) */
    ip: number;
    /** The frame of reference to return values in. Either Constant.GLOBAL (default), Constant.LOCAL, Constant.CYLINDRICAL, Constant.USER_DEFINED or Constant.MATERIAL */
    referenceFrame: number;
}


/** Object function argument in VonMisesStress */
interface VonMisesStressArgument_options {
    /** Integration point number to get the data at (ip &gt;= 1) */
    ip: number;
}

declare class Solid {
/**
 * Blanks the solid in a graphics window
 * @param window GraphicsWindow) to blank the solid in
 */
    Blank(window: GraphicsWindow): void;

/**
 * Blanks all of the solids in the model
 * @param window GraphicsWindow) to blank the solids in
 * @param model Model that all the solids will be blanked in
 */
    static BlankAll(window: GraphicsWindow, model: Model): void;

/**
 * Blanks all of the solids in the model flagged with a defined flag
 * @param window GraphicsWindow) to blank the solids in
 * @param model Model that the flagged solids will be blanked in
 * @param flag Flag (see AllocateFlag) set on the solids to blank
 */
    static BlankFlagged(window: GraphicsWindow, model: Model, flag: number): void;

/**
 * Checks if the solid is blanked in a graphics window or not
 * @param window GraphicsWindow) in which to check if the solid is blanked
 * @returns true if blanked, false if not
 */
    Blanked(window: GraphicsWindow): boolean;

/**
 * Clears a flag on a solid
 * @param flag Flag (see AllocateFlag) to clear on the solid
 */
    ClearFlag(flag: number): void;

/**
 * Checks if the solid has been deleted or not
 * @returns true if deleted, false if not
 */
    Deleted(): boolean;

/**
 * Returns the first solid in the model (or null if there are no solids in the model)
 * @param model Model to get first solid in
 * @returns Solid object
 */
    static First(model: Model): Solid;

/**
 * Flags all of the solids in the model with a defined flag
 * @param model Model that all the solids will be flagged in
 * @param flag Flag (see AllocateFlag) to set on the solids
 */
    static FlagAll(model: Model, flag: number): void;

/**
 * Checks if the solid is flagged or not
 * @param flag Flag (see AllocateFlag) to test on the solid
 * @returns true if flagged, false if not
 */
    Flagged(flag: number): boolean;

/**
 * Returns an array of Solid objects or properties for all of the solids in the model. If the optional property argument is not given then an array of Solid objects is returned. If the property argument is given, that property value for each solid is returned in the array instead of a Solid object
 * @param model Model that all the solids are in
 * @param property Name for property to get for all solids in the model
 * @returns Array of Solid objects or properties
 */
    static GetAll(model: Model, property?: string): Solid[];

/**
 * Returns the value for a data component. Also see GetMultipleData
 * @param component Component constant to get data for
 * @param options Object containing options for getting data. Can be any of:
 * @returns Number if a scalar component, array if a vector or tensor component (or null if the value cannot be calculated because it's not available in the model). If requesting an invalid component it will throw an error (e.g. Component.AREA of a node).
 */
    GetData(component: number, options?: GetDataArgument_options): number | array;

/**
 * Gets all of the solids in the model flagged with a defined flag. If the optional property argument is not given then an array of Solid objects is returned. If the property argument is given, that property value for each solid is returned in the array instead of a Solid object
 * @param model Model that the flagged solids are in
 * @param flag Flag (see AllocateFlag) set on the solids to get
 * @param property Name for property to get for all flagged solids in the model
 * @returns Array of Solid objects or properties
 */
    static GetFlagged(model: Model, flag: number, property?: string): Solid[];

/**
 * Returns the Solid object for solid in model with label (or null if it does not exist)
 * @param model Model to get solid in
 * @param label The Ansys LS-DYNA label for the solid in the model
 * @returns Solid object
 */
    static GetFromID(model: Model, label: number): Solid;

/**
 * Returns the Solid object for solid in model with index (or null if it does not exist)
 * @param model Model to get solid in
 * @param index The D3PLOT internal index in the model for solid, starting at 0.
 * @returns Solid object
 */
    static GetFromIndex(model: Model, index: number): Solid;

/**
 * Returns the value for a data component for multiple solids. For each solid a local property called data will be created containing a number if a scalar component, or an array if a vector or tensor component (or null if the value cannot be calculated). The data is also returned as an object. Also see GetData
 * @param component Component constant to get data for
 * @param items Array of Solid objects to get the data for. All of the solids must be in the same model.
 * @param options Object containing options for getting data. Can be any of:
 * @returns Object containing the data. A property is created in the object for each solid with the label. The value of the property is a number if a scalar component or an array if a vector or tensor component (or null if the value cannot be calculated)
 */
    static GetMultipleData(component: number, items: array[], options?: GetMultipleDataArgument_options): object;

/**
 * Returns the last solid in the model (or null if there are no solids in the model)
 * @param model Model to get last solid in
 * @returns Solid object
 */
    static Last(model: Model): Solid;

/**
 * Returns the local axes of the element in model space, expressed as direction cosines in a 2D array. Beam elements must have 3 nodes to be able to return local axes.
 * @returns array of arrays
 */
    LocalAxes(): array[];

/**
 * Returns the next solid in the model (or null if there is not one)
 * @returns Solid object
 */
    Next(): Solid;

/**
 * Allows the user to pick a solid from the screen
 * @returns Solid object or null if cancelled
 */
    static Pick(): Solid;

/**
 * Returns the effective plastic strain for the solid (or null if the value cannot be calculated)
 * @param options Object containing options for getting data. Can be any of:
 * @returns Plastic strain
 */
    PlasticStrain(options?: PlasticStrainArgument_options): number;

/**
 * Returns the previous solid in the model (or null if there is not one)
 * @returns Solid object
 */
    Previous(): Solid;

/**
 * Selects solids using an object menu
 * @param flag Flag (see AllocateFlag) to use when selecting solids
 * @returns The number of solids selected or null if menu cancelled
 */
    static Select(flag: number): number;

/**
 * Sets a flag on a solid
 * @param flag Flag (see AllocateFlag) to set on the solid
 */
    SetFlag(flag: number): void;

/**
 * Returns the strain tensor for the solid
 * @param options Object containing options for getting data. Can be any of:
 * @returns Array containing the strain tensor [Exx, Eyy, Ezz, Exy, Eyz, Ezx] (or null if the value cannot be calculated)
 */
    StrainTensor(options?: StrainTensorArgument_options): array;

/**
 * Returns the stress tensor for the solid
 * @param options Object containing options for getting data. Can be any of:
 * @returns Array containing the stress tensor [Exx, Eyy, Ezz, Exy, Eyz, Ezx] (or null if the value cannot be calculated)
 */
    StressTensor(options?: StressTensorArgument_options): array;

/**
 * Returns the topology for the solid in the model
 * @returns array of Node objects
 */
    Topology(): Node[];

/**
 * Returns the total number of solids in the model
 * @param model Model to get total in
 * @returns The number of solids
 */
    static Total(model: Model): number;

/**
 * Returns the total number of solids that have been deleted in a model in the state given by its state property
 * @param model Model to get total in
 * @returns The number of solids that have been deleted
 */
    static TotalDeleted(model: Model): number;

/**
 * Unblanks the solid in a graphics window
 * @param window GraphicsWindow) to unblank the solid in
 */
    Unblank(window: GraphicsWindow): void;

/**
 * Unblanks all of the solids in the model
 * @param window GraphicsWindow) to unblank the solids in
 * @param model Model that all the solids will be unblanked in
 */
    static UnblankAll(window: GraphicsWindow, model: Model): void;

/**
 * Unblanks all of the solids in the model flagged with a defined flag
 * @param window GraphicsWindow) to unblank the solids in
 * @param model Model that the flagged solids will be unblanked in
 * @param flag Flag (see AllocateFlag) set on the solids to unblank
 */
    static UnblankFlagged(window: GraphicsWindow, model: Model, flag: number): void;

/**
 * Unsets a defined flag on all of the solids in the model
 * @param model Model that the defined flag for all solids will be unset in
 * @param flag Flag (see AllocateFlag) to unset on the solids
 */
    static UnflagAll(model: Model, flag: number): void;

/**
 * Returns the von Mises stress for the solid (or null if the value cannot be calculated)
 * @param options Object containing options for getting data. Can be any of:
 * @returns von Mises stress
 */
    VonMisesStress(options?: VonMisesStressArgument_options): number;

/** The colour of the solid */
    colour: Colour;
/** Component data for a solid passed as an argument to GetMultipleData. Note that data will only exist for the instance of the solid passed to GetMultipleData. i.e. it is a local property stored on the specific instance. It is not stored in the D3PLOT database */
    readonly data: number;
/** The display mode of the solid. Can be Constant.WIREFRAME, Constant.HIDDEN, Constant.SHADED or Constant.CURRENT. */
    displayMode: number;
/** The include file number in the model that the solid is in */
    readonly include: number;
/** The internal index for the solid in D3PLOT (starting at 0) */
    readonly index: number;
/** The Ansys LS-DYNA label for the solid */
    readonly label: number;
/** The Material the solid has. This is only available if there is a ztf file for the model. If not null will be returned. If this is a PART_COMPOSITE then null will be returned. If the model comes from writing a PTF/d3plot file from PRIMER and the material was latent there, null will be returned. Part.GetCompositeData should be used to get material data in this case */
    readonly material: Material;
/** The Model that the solid is in */
    readonly model: Model;
/** The overlay colour of the solid */
    overlayColour: Colour;
/** The overlay mode of the solid. Can be Constant.NO_OVERLAY, Constant.FREE_EDGE, Constant.ALL_EDGES or Constant.CURRENT. */
    overlayMode: number;
/** The Part the solid is in */
    readonly part: Part;
/** The transparency of the solid between 0 (opaque) and 100 (clear) */
    transparency: number;
/** The type for the solid (will be Type.SOLID) */
    readonly type: number;
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

/**
 * Returns the analysis time of the current state, or that of &lt;state_id&gt; if defined
 * @param state_id State number to use
 * @returns real
 */
declare function GetTime(state_id?: number): number;

/**
 * "Locks" any memory already allocated for data storage in &lt;state_id&gt;, preventing it from being reused by other states looking for memory in which to store data. When dealing with large models it is normally the case that the amount of data to be processed far exceeds the amount of memory installed in the computer, meaning that it is not possible to store all data of interest in memory at the same time. Therefore D3PLOT tries to minimise the amount of data currently stored in memory by reusing the memory allocated previously for other states and/or data components. This process is called "scavenging" and the rules it uses when trying to decide from where to scavenge memory are, in order of descending preference:  Data from a different component in a different state Data from this component in a different state Data from an unused component in this state If none of the above are available then allocate some fresh memory from the operating system  In most cases a Javascript will be working with one state at a time, so the problem of reusing memory in this state for purpose A when it is still required for purpose B will not arise. However if, for example, you are writing a script that compares data from this state and the previous one inside a loop it is possible that "churning" could arise from the sequence: . For each state GetData in state N Scavenges memory from state N-1 to store the data for state N GetData in state N-1 Scavenges memory from state N to store data for state N-1 . In this example the script would probably run incredibly slowly as each GetData() call would have to reread data from disk into the newly scavenged memory, so you would end up with &lt;#elements * 2&gt; disk reads of all the data for this component and element type. The same would be true if PutUbinData() or GetUbinData() were used as both of these require the data to be "put" or "got" to exist in memory, requiring that memory to be obtained from somewhere. By "locking" states N and N-1 in this example you would force D3PLOT to allocate enough memory to hold both data vectors in memory at the same time, and the script would run &lt;#elements * 2&gt; times faster. For a model with 1,000,000 elements this might reduce the run-time from months to seconds! Clearly states should not be "locked" unnecessarily or, more importantly, left "locked" when there is no longer any need for the data they contain, since this will lead to a significant build-up of memory usage. Therefore states can be unlocked in three ways:  Explicitly by using the Javascript function UnlockState() Implicitly by using the Javascript function SetCurrentState(), which unlocks all states except the current one Implicitly by exiting the Javascript, as normal (interactive or batch) D3PLOT usage will implicitly unlock all but the current state.  To summarise: this function is likely to be needed only when you are performing repeated "gets" and/or "puts" of data to and from more than one state. Locking and unlocking states takes place in the current model only, and has no effect on states in any other model.
 * @param state_id State number to lock
 * @returns boolean
 */
declare function LockState(state_id: number): boolean;

/**
 * Sets the current state for the JavaScript interface to state_id This is the state used for all the "get" and "put" functions which handle model-related data. If the optional state_id argument in a get/put function call is used then that state is used instead for the duration of that call, but this current state is not changed. The current state is a property of the current model, in other words each model has its own, separate, current state. For all models this defaults to state #1 (if present). Setting the current state in model i has no effect on the current state in any other model.
 * @param state_id State number to make current
 * @returns boolean
 */
declare function SetCurrentState(state_id: number): boolean;

/**
 * "Unlocks" this state for the purposes of memory scavenging, making any data vectors within it eligible for reuse by other states looking for memory Please see the documentation on LockState() for a description of what this function does and when it might be needed.
 * @param state_id State number to unlock
 * @returns boolean
 */
declare function UnlockState(state_id: number): boolean;


/** Object function argument in GetData */
interface GetDataArgument_options {
    /** The extra data component number if component Component.SOX for solids, Component.BMX for beams or Component.SHX for shells and thick shells */
    extra: number;
    /** Integration point number to get the data at (ip &gt;= 1 or one of the constants Constant.TOP, Constant.MIDDLE or Constant.BOTTOM). If the integration point is not defined it will use the integration point defined on the current GUI "data" panel, which defaults to the middle surface for shells, thick shells, and solids, and Mag All for beams, but may vary if changed by an interactive user. If consistent output from a script is required, independent of any prior interactive activity, an explicit integration point or surface should be defined */
    ip: number;
    /** On plane integration point number for shells and thick shells (op &gt;= 1 [default]) */
    op: number;
    /** The frame of reference to return values in. Either Constant.GLOBAL (default), Constant.LOCAL, Constant.CYLINDRICAL, Constant.USER_DEFINED or Constant.MATERIAL. This is only necessary for directional components (eg X stress) and then only when something other than the default Constant.GLOBAL coordinate system is to be used */
    referenceFrame: number;
    /** The user-defined component number if component Component.UNOS, Component.UNOV, Component.USSS, Component.USST, Component.UBMS or Component.UBMV */
    user: number;
}


/** Object function argument in GetMultipleData */
interface GetMultipleDataArgument_options {
    /** The extra data component number if component Component.SOX for solids, Component.BMX for beams or Component.SHX for shells and thick shells */
    extra: number;
    /** Integration point number to get the data at (ip &gt;= 1 or one of the constants Constant.TOP, Constant.MIDDLE or Constant.BOTTOM) */
    ip: number;
    /** On plane integration point number for shells and thick shells (op &gt;= 1 [default]) */
    op: number;
    /** The frame of reference to return values in. Either Constant.GLOBAL (default), Constant.LOCAL, Constant.CYLINDRICAL, Constant.USER_DEFINED or Constant.MATERIAL. This is only necessary for directional components (eg X stress) and then only when something other than the default Constant.GLOBAL coordinate system is to be used */
    referenceFrame: number;
    /** The user-defined component number if component Component.UNOS, Component.UNOV, Component.USSS, Component.USST, Component.UBMS or Component.UBMV */
    user: number;
}


/** Object function argument in PlasticStrain */
interface PlasticStrainArgument_options {
    /** Integration point number to get the data at (ip &gt;= 1 or one of the constants Constant.TOP, Constant.MIDDLE or Constant.BOTTOM) */
    ip: number;
    /** On plane integration point number for shells and thick shells (op &gt;= 1 [default]) */
    op: number;
}


/** Object function argument in StrainTensor */
interface StrainTensorArgument_options {
    /** Integration point number to get the data at (ip &gt;= 1 or one of the constants Constant.TOP, Constant.MIDDLE or Constant.BOTTOM) */
    ip: number;
    /** On plane integration point number for shells and thick shells (op &gt;= 1 [default]) */
    op: number;
    /** The frame of reference to return values in. Either Constant.GLOBAL (default), Constant.LOCAL, Constant.CYLINDRICAL, Constant.USER_DEFINED or Constant.MATERIAL */
    referenceFrame: number;
}


/** Object function argument in StressTensor */
interface StressTensorArgument_options {
    /** Integration point number to get the data at (ip &gt;= 1 or one of the constants Constant.TOP, Constant.MIDDLE or Constant.BOTTOM) */
    ip: number;
    /** On plane integration point number for shells and thick shells (op &gt;= 1 [default]) */
    op: number;
    /** The frame of reference to return values in. Either Constant.GLOBAL (default), Constant.LOCAL, Constant.CYLINDRICAL, Constant.USER_DEFINED or Constant.MATERIAL */
    referenceFrame: number;
}


/** Object function argument in VonMisesStress */
interface VonMisesStressArgument_options {
    /** Integration point number to get the data at (ip &gt;= 1 or one of the constants Constant.TOP, Constant.MIDDLE or Constant.BOTTOM) */
    ip: number;
    /** On plane integration point number for shells and thick shells (op &gt;= 1 [default]) */
    op: number;
}

declare class Tshell {
/**
 * Blanks the tshell in a graphics window
 * @param window GraphicsWindow) to blank the tshell in
 */
    Blank(window: GraphicsWindow): void;

/**
 * Blanks all of the tshells in the model
 * @param window GraphicsWindow) to blank the tshells in
 * @param model Model that all the tshells will be blanked in
 */
    static BlankAll(window: GraphicsWindow, model: Model): void;

/**
 * Blanks all of the tshells in the model flagged with a defined flag
 * @param window GraphicsWindow) to blank the tshells in
 * @param model Model that the flagged tshells will be blanked in
 * @param flag Flag (see AllocateFlag) set on the tshells to blank
 */
    static BlankFlagged(window: GraphicsWindow, model: Model, flag: number): void;

/**
 * Checks if the tshell is blanked in a graphics window or not
 * @param window GraphicsWindow) in which to check if the tshell is blanked
 * @returns true if blanked, false if not
 */
    Blanked(window: GraphicsWindow): boolean;

/**
 * Clears a flag on a tshell
 * @param flag Flag (see AllocateFlag) to clear on the tshell
 */
    ClearFlag(flag: number): void;

/**
 * Checks if the thick shell has been deleted or not
 * @returns true if deleted, false if not
 */
    Deleted(): boolean;

/**
 * Returns the first tshell in the model (or null if there are no tshells in the model)
 * @param model Model to get first tshell in
 * @returns Tshell object
 */
    static First(model: Model): Tshell;

/**
 * Flags all of the tshells in the model with a defined flag
 * @param model Model that all the tshells will be flagged in
 * @param flag Flag (see AllocateFlag) to set on the tshells
 */
    static FlagAll(model: Model, flag: number): void;

/**
 * Checks if the tshell is flagged or not
 * @param flag Flag (see AllocateFlag) to test on the tshell
 * @returns true if flagged, false if not
 */
    Flagged(flag: number): boolean;

/**
 * Returns an array of Tshell objects or properties for all of the tshells in the model. If the optional property argument is not given then an array of Tshell objects is returned. If the property argument is given, that property value for each tshell is returned in the array instead of a Tshell object
 * @param model Model that all the tshells are in
 * @param property Name for property to get for all tshells in the model
 * @returns Array of Tshell objects or properties
 */
    static GetAll(model: Model, property?: string): Tshell[];

/**
 * Returns the value for a data component. Also see GetMultipleData
 * @param component Component constant to get data for
 * @param options Object containing options for getting data. Can be any of:
 * @returns Number if a scalar component, array if a vector or tensor component (or null if the value cannot be calculated because it's not available in the model). If requesting an invalid component it will throw an error (e.g. Component.AREA of a node).
 */
    GetData(component: number, options?: GetDataArgument_options): number | array;

/**
 * Gets all of the tshells in the model flagged with a defined flag. If the optional property argument is not given then an array of Tshell objects is returned. If the property argument is given, that property value for each tshell is returned in the array instead of a Tshell object
 * @param model Model that the flagged tshells are in
 * @param flag Flag (see AllocateFlag) set on the tshells to get
 * @param property Name for property to get for all flagged tshells in the model
 * @returns Array of Tshell objects or properties
 */
    static GetFlagged(model: Model, flag: number, property?: string): Tshell[];

/**
 * Returns the Tshell object for tshell in model with label (or null if it does not exist)
 * @param model Model to get tshell in
 * @param label The Ansys LS-DYNA label for the tshell in the model
 * @returns Tshell object
 */
    static GetFromID(model: Model, label: number): Tshell;

/**
 * Returns the Tshell object for tshell in model with index (or null if it does not exist)
 * @param model Model to get tshell in
 * @param index The D3PLOT internal index in the model for tshell, starting at 0.
 * @returns Tshell object
 */
    static GetFromIndex(model: Model, index: number): Tshell;

/**
 * Returns the value for a data component for multiple tshells. For each tshell a local property called data will be created containing a number if a scalar component, or an array if a vector or tensor component (or null if the value cannot be calculated). The data is also returned as an object. Also see GetData
 * @param component Component constant to get data for
 * @param items Array of Tshell objects to get the data for. All of the tshells must be in the same model.
 * @param options Object containing options for getting data. Can be any of:
 * @returns Object containing the data. A property is created in the object for each tshell with the label. The value of the property is a number if a scalar component or an array if a vector or tensor component (or null if the value cannot be calculated)
 */
    static GetMultipleData(component: number, items: array[], options?: GetMultipleDataArgument_options): object;

/**
 * Returns the last tshell in the model (or null if there are no tshells in the model)
 * @param model Model to get last tshell in
 * @returns Tshell object
 */
    static Last(model: Model): Tshell;

/**
 * Returns the local axes of the element in model space, expressed as direction cosines in a 2D array. Beam elements must have 3 nodes to be able to return local axes.
 * @returns array of arrays
 */
    LocalAxes(): array[];

/**
 * Returns the next tshell in the model (or null if there is not one)
 * @returns Tshell object
 */
    Next(): Tshell;

/**
 * Allows the user to pick a tshell from the screen
 * @returns Tshell object or null if cancelled
 */
    static Pick(): Tshell;

/**
 * Returns the effective plastic strain for the thick shell (or null if the value cannot be calculated)
 * @param options Object containing options for getting data. Can be any of:
 * @returns Plastic strain
 */
    PlasticStrain(options?: PlasticStrainArgument_options): number;

/**
 * Returns the previous tshell in the model (or null if there is not one)
 * @returns Tshell object
 */
    Previous(): Tshell;

/**
 * Selects tshells using an object menu
 * @param flag Flag (see AllocateFlag) to use when selecting tshells
 * @returns The number of tshells selected or null if menu cancelled
 */
    static Select(flag: number): number;

/**
 * Sets a flag on a tshell
 * @param flag Flag (see AllocateFlag) to set on the tshell
 */
    SetFlag(flag: number): void;

/**
 * Returns the strain tensor for the thick shell
 * @param options Object containing options for getting data. Can be any of:
 * @returns Array containing the strain tensor [Exx, Eyy, Ezz, Exy, Eyz, Ezx] (or null if the value cannot be calculated)
 */
    StrainTensor(options?: StrainTensorArgument_options): array;

/**
 * Returns the stress tensor for the thick shell
 * @param options Object containing options for getting data. Can be any of:
 * @returns Array containing the stress tensor [Exx, Eyy, Ezz, Exy, Eyz, Ezx] (or null if the value cannot be calculated)
 */
    StressTensor(options?: StressTensorArgument_options): array;

/**
 * Returns the topology for the tshell in the model
 * @returns array of Node objects
 */
    Topology(): Node[];

/**
 * Returns the total number of tshells in the model
 * @param model Model to get total in
 * @returns The number of tshells
 */
    static Total(model: Model): number;

/**
 * Returns the total number of thick shells that have been deleted in a model in the state given by its state property
 * @param model Model to get total in
 * @returns The number of thick shells that have been deleted
 */
    static TotalDeleted(model: Model): number;

/**
 * Unblanks the tshell in a graphics window
 * @param window GraphicsWindow) to unblank the tshell in
 */
    Unblank(window: GraphicsWindow): void;

/**
 * Unblanks all of the tshells in the model
 * @param window GraphicsWindow) to unblank the tshells in
 * @param model Model that all the tshells will be unblanked in
 */
    static UnblankAll(window: GraphicsWindow, model: Model): void;

/**
 * Unblanks all of the tshells in the model flagged with a defined flag
 * @param window GraphicsWindow) to unblank the tshells in
 * @param model Model that the flagged tshells will be unblanked in
 * @param flag Flag (see AllocateFlag) set on the tshells to unblank
 */
    static UnblankFlagged(window: GraphicsWindow, model: Model, flag: number): void;

/**
 * Unsets a defined flag on all of the tshells in the model
 * @param model Model that the defined flag for all tshells will be unset in
 * @param flag Flag (see AllocateFlag) to unset on the tshells
 */
    static UnflagAll(model: Model, flag: number): void;

/**
 * Returns the von Mises stress for the thick shell (or null if the value cannot be calculated)
 * @param options Object containing options for getting data. Can be any of:
 * @returns von Mises stress
 */
    VonMisesStress(options?: VonMisesStressArgument_options): number;

/** The colour of the tshell */
    colour: Colour;
/** Component data for a tshell passed as an argument to GetMultipleData. Note that data will only exist for the instance of the tshell passed to GetMultipleData. i.e. it is a local property stored on the specific instance. It is not stored in the D3PLOT database */
    readonly data: number;
/** The display mode of the tshell. Can be Constant.WIREFRAME, Constant.HIDDEN, Constant.SHADED or Constant.CURRENT. */
    displayMode: number;
/** The include file number in the model that the tshell is in */
    readonly include: number;
/** The internal index for the tshell in D3PLOT (starting at 0) */
    readonly index: number;
/** The number of through thickness integration points that the thick shell has */
    readonly integrationPoints: number;
/** The Ansys LS-DYNA label for the tshell */
    readonly label: number;
/** The Material the tshell has. This is only available if there is a ztf file for the model. If not null will be returned. If this is a PART_COMPOSITE then null will be returned. If the model comes from writing a PTF/d3plot file from PRIMER and the material was latent there, null will be returned. Part.GetCompositeData should be used to get material data in this case */
    readonly material: Material;
/** The Model that the tshell is in */
    readonly model: Model;
/** The number of on plan integration points that the thick shell has */
    readonly onPlanIntegrationPoints: number;
/** The overlay colour of the tshell */
    overlayColour: Colour;
/** The overlay mode of the tshell. Can be Constant.NO_OVERLAY, Constant.FREE_EDGE, Constant.ALL_EDGES or Constant.CURRENT. */
    overlayMode: number;
/** The Part the tshell is in */
    readonly part: Part;
/** The transparency of the tshell between 0 (opaque) and 100 (clear) */
    transparency: number;
/** The type for the tshell (will be Type.TSHELL) */
    readonly type: number;
}

declare class Type {
/** Beam elements */
    static BEAM: number;
/** Bolts (contributes to the count of total connections, but can't provide data or be visualised) */
    static BOLT: number;
/** Beam spotwelds */
    static BWLD: number;
/** Contact surfaces */
    static CONTACT: number;
/** All connection types */
    static CONX: number;
/** *CONSTRAINED_SPOTWELD spotwelds */
    static CWLD: number;
/** Discrete Element Sphere */
    static DES: number;
/** Generic elements */
    static ELEMENT: number;
/** Groups */
    static GROUP: number;
/** *CONSTRAINED_GENERALIZED spotwelds */
    static GWLD: number;
/** Hex spotweld assemblies */
    static HSWA: number;
/** Hex (Solid) spotwelds */
    static HWLD: number;
/** Joints */
    static JOINT: number;
/** Lumped masses */
    static MASS: number;
/** Materials */
    static MATERIAL: number;
/** MIG welds (contributes to the count of total connections, but can't provide data or be visualised) */
    static MIG: number;
/** Model */
    static MODEL: number;
/** Nodes */
    static NODE: number;
/** Nodal Rigid Bodies */
    static NRB: number;
/** Parts */
    static PART: number;
/** Pretensioners */
    static PRETENSIONER: number;
/** Rigid bolts (contributes to the count of total connections, but can't provide data or be visualised) */
    static RBOLT: number;
/** Retractors */
    static RETRACTOR: number;
/** Rigidwalls */
    static RIGIDWALL: number;
/** Seatbelt types generally */
    static SBENT: number;
/** Seatbelt elements */
    static SEATBELT: number;
/** (Element) section definitions */
    static SECTION: number;
/** Contact segments */
    static SEGMENT: number;
/** *SET_BEAM sets */
    static SET_BEAM: number;
/** *SET_DISCRETE sets */
    static SET_DISCRETE: number;
/** *SET_NODE sets */
    static SET_NODE: number;
/** *SET_PART sets */
    static SET_PART: number;
/** *SET_SHELL sets */
    static SET_SHELL: number;
/** *SET_SOLID sets */
    static SET_SOLID: number;
/** *SET_TSHELL sets */
    static SET_TSHELL: number;
/** Shell elements */
    static SHELL: number;
/** Slip-rings */
    static SLIPRING: number;
/** Solid elements */
    static SOLID: number;
/** Single Point Constraint */
    static SPC: number;
/** Smoothed Particle Hydrodynamics */
    static SPH: number;
/** Springs (discrete elements) */
    static SPRING: number;
/** Thick shell elements */
    static TSHELL: number;
/** D3PLOT window id */
    static WINDOW: number;
/** Database cross-sections */
    static XSEC: number;
}


/** Object function argument in GetUbinData */
interface GetUbinDataArgument_int_pt {
    /** Through thickness integration point. */
    ip: number;
    /** On plan integration point. Defaults to the first one. */
    op?: number;
}


/** Object returned by LocateUbinComponent */
interface LocateUbinComponentReturn {
    /** the component type, U_NODE, U_SOSH, U_BEAM or U_OTHR */
    ctype: number;
    /** the data type, U_SCALAR, U_VECTOR or U_TENSOR */
    dtype: number;
    /** the integer handle of the UBIN component */
    handle: number;
}


/** Object function argument in PutUbinData */
interface PutUbinDataArgument_int_pt {
    /** Through thickness integration point. */
    ip: number;
    /** On plan integration point. Defaults to the first one. */
    op?: number;
}

/**
 * Create a new user-defined binary (UBIN) component Note that user-defined components are "program wide", so once created the data "slots" exist in all models. Data values that are not populated will return a value of zero.
 * @param component_name A name for this component, up to 30 characters long. If the name is not unique, D3PLOT's behaviour will depend on the value of the 'if_existing' argument to this function.
 * @param component_type One of the constants  U_NODE for nodal data U_SOSH for solid, shell and thick shell data U_BEAM for beam data U_OTHR for LSDA (Other) data  User-defined components must fall into one of these four categories. It is not possible to have a component of a given name that contains data for more than one of these types.
 * @param data_type One of the constants  U_SCALAR for scalar data (any type) U_VECTOR for vector data (U_NODE, U_BEAM and U_OTHR only) U_TENSOR for tensor data (U_SOSH only) U_OTHR for LSDA (Other) data  Choose the data type that matches the information you want to store.
 * @param if_existing Action to take if UBIN component 'component_name' already exists. One of the constants  REPLACE deletes the existing UBIN component, replacing it with this definition. This means that any existing data for the user-defined component of this name is deleted and the component is re-initialised. RENAME changes the 'component_name' argument of this function call by adding a suffix to make it unique, so the existing component of this name (and data) will be left unchanged and the new one will not clash with it. 
 * @param dispose What to do with the ".ubd" files when the model is closed or D3PLOT exits. One of the constants  LEAVE (default) will leave any ".ubd" files on disk so that they are available for any future D3PLOT sessions. DELETE will delete these files when then model is closed or D3PLOT exits.  If this argument is ommitted or set to zero then LEAVE behaviour is used. However alternative default behaviour may be specified by setting the preference d3plot*ubd_file_dispose: to LEAVE or DELETE
 * @param location Specify where the data for this component is to be stored, one of  A valid &lt;pathname&gt; .ubd files will be written to this directory instead of the original analysis. This will usually be a better solution than the alternative options of keeping data "in core" since it allows D3PLOT memory management to operate normally, writing data to disk if space is needed in memory. The directory &lt;pathname&gt; must exist, and you must have write permission to it. JOBDIR(&lt;pathname&gt;) the path of the directory containing the results, in other words the default location for the files. However you can append a further &lt;pathname&gt; to this in order to specify a directory relative to JOBDIR, for example:  JOBDIR/.. Means the directory above the current results JOBDIR/../../my_results Means two directories above, in the sub-directory 'my_results'   IN_CORE stipulates that this component's data will always be held in memory, and will never be written to disk. This solves the problem of data files being in read-only directories since no .ubd files are written. However it also means that D3PLOT will not dump data for currently unused states to disk, meaning that you may run out of memory if you generate too much data in your JavaScripts.  If IN_CORE is used the value of 'dispose' above is ignored. If this argument is omitted then the default behaviour of creating .ubd files in the same directory as the analysis database files will be used. However an alternative default directory may also be specified by the preference: d3plot*ubd_file_location: &lt;pathname&gt; or IN_CORE or JOBDIR(&lt;pathname&gt;) If both &lt;location&gt; and this preferenceare defined then &lt;location&gt; in this function call takes precedence. Notes on pathnames:  On Windows platforms forward slash / and backslash \ can be used interchangeably in pathnames. On Linux platforms you must use forward slash / only, so in a multi-system environment it is recommended that you use forward slash syntax only. If &lt;pathname&gt; contains white space then you must enclose the whole string in "...", for example "C:\my results". 
 * @returns integer handle for the newly created component that should be used in subsequent UBIN processing function calls. This handle should be regarded as private data and not modified in any way. In addition, if a UBIN component is created and then recreated and over-written in a script (if_existing = REPLACE) the handle from each call may be different - don't assume that is has not changed.
 */
declare function CreateUbinComponent(component_name: string, component_type: number, data_type: number, if_existing: number, dispose?: number, location?: number | string): number;

/**
 * Deletes an existing UBIN component handle. The component is deleted from memory, and any associated .ubd files cached on disk are also deleted. If this succeeds it returns JS_TRUE, otherwise JS_FALSE.
 * @param handle The handle of an existing UBIN component
 * @returns boolean
 */
declare function DeleteUbinComponent(handle: number): boolean;

/**
 * Retrieves data for type/item from a UBIN component. If the data has not previoulsy been written, values of 0.0 will be returned.
 * @param handle The handle of an existing UBIN component as returned by CreateUbinComponent().
 * @param item_type An item type constant, NODE, SOLID, SHELL, etc. This must match the underlying type of the UBIN component, thus NODE for components of type U_NODE, and so on. It is illegal to attempt to store data for a type that does not match the underlying UBIN component type thus, for example, you cannot store NODE data for a U_SOSH component.
 * @param item If +ve, the internal item number starting at 1. If -ve, the external label of the item. Internal numbers will be many times faster to process.
 * @param int_pt Integration point: must be a +ve layer number (lowest = 1). Or zero for item type / data component combinations that do not consider integration points in this context. (for example nodal displacements or beam forces). Or, for fully integrated elements with on plan integration points, an object with properties "ip" and "op". For a further explanation see Defining the Integration point argument in GetData(). "Top", "Middle" and "Bottom" are not allowed in this context since "middle" is not directly readable in cases with an even number of points. A value of 1 should normally be used for solid elements. Note, from D3PLOT 11.0 onwards, the order of the integration points for SHELLS and TSHELLS is &lt;int_pnt&gt; 1-&gt;n: BOTTOM-&gt;TOP surface (so long as a ZTF file is present). See Section 13.8.2.2. Prior to this they were in the order of the integration points output by Ansys LS-DYNA, e.g. for &lt;maxint&gt;=3 &lt;int_pnt&gt; 1 was the MIDDLE surface, &lt;int_pnt&gt; 2 was the BOTTOM surface and &lt;int_pnt&gt; 3 was the TOP surface.
 * @param state_id State number to be used. If omitted, the current state is used.
 * @returns float|Array of floats
 */
declare function GetUbinData(handle: number, item_type: number, item: number, int_pt: GetUbinDataArgument_int_pt|number, state_id?: number): number | number[];

/**
 * Locates an existing UBIN component by name and returns its handle. This is useful when a previous run has created a UBIN component and this script wishes to work with it. 'component_name' is not case-sensitive, but an exact character match is required, so embedded white space is significant. If the lookup succeeds this function returns an object with with properties about the component, if it fails it returns the value JS_FALSE.
 * @param component_name A name to search for, a character string up to 30 characters long. Component names are not case-sensitive, but searching only succeeds if an exact match is found.
 */
declare function LocateUbinComponent(component_name: string): LocateUbinComponentReturn;

/**
 * Stores data for type/item in a UBIN component handle. This will overwrite any existing data in that "slot", which will be lost.
 * @param handle The handle of an existing UBIN component as returned by CreateUbinComponent().
 * @param item_type An item type constant, NODE, SOLID, SHELL etc. This must match the underlying type of the UBIN component, thus NODE for components of type U_NODE, and so on. It is illegal to attempt to store data for a type that does not match the underlying UBIN component type thus, for example, you cannot store NODE data for a U_SOSH component.
 * @param item If +ve, the internal item number starting at 1. If -ve, the external label of the item. Internal numbers will be many times faster to process.
 * @param int_pt Integration point: must be a +ve layer number (lowest = 1) Or zero for item type / data component combinations that do not consider integration points in this context (for example nodal displacements or beam forces). Or, for fully integrated elements with on plan integration points, an object with properties "ip" and "op". For a further explanation see Defining the Integration point argument in GetData(). "Top", "Middle" and "Bottom" are not allowed in this context since "middle" is not directly readable in cases with an even number of points. A value of 1 should normally be used for solid elements. Note from D3PLOT 11.0 onwards, the order of the integration points for SHELLS and TSHELLS is &lt;int_pnt&gt; 1-&gt;n: BOTTOM-&gt;TOP surface (so long as a ZTF file is present). See Section 13.8.2.2. Prior to this they were in the order of the integration points output by Ansys LS-DYNA, e.g. for &lt;maxint&gt;=3 &lt;int_pnt&gt; 1 was the MIDDLE surface, &lt;int_pnt&gt; 2 was the BOTTOM surface and &lt;int_pnt&gt; 3 was the TOP surface.
 * @param data The data to be stored. Its format depends on the "data type" of the component: U_SCALAR: Scalar or array of length &gt;=1 U_VECTOR: Array of length &gt;= 3 U_TENSOR: Array of length &gt;= 6 The alignment of array members should be as follows: Vector: [X, Y, Z] Tensor: [XX, YY, ZZ, XY, YZ, ZX]
 * @param state_id State number to be used. If omitted, the current state is used.
 * @returns boolean
 */
declare function PutUbinData(handle: number, item_type: number, item: number, int_pt: PutUbinDataArgument_int_pt|number, data: number | number[], state_id?: number): boolean;

declare class Utils {
/**
 * Decodes an ASCII85 encoded string. See Utils.Ascii85Encode() for details on the method.
 * @param encoded An ASCII85 encoded string
 * @returns ArrayBuffer object
 */
    static Ascii85Decode(encoded: string): ArrayBuffer;

/**
 * Encodes an ASCII85 encoded string. This enables binary data to be represented by ASCII characters using five ASCII characters to represent four bytes of binary data (making the encoded size 1/4 larger than the original). By doing this binary data can be stored in JavaScript strings. Note that the method used by D3PLOT to encode and decode strings differs from the standard ASCII85 encoding as that uses the ASCII characters ", ' and \ which cannot be used in JavaScript strings as they have special meanings. The method in D3PLOT uses 0-84 are !-u (ASCII codes 33-117) (i.e. 33 is added to it) with the following exceptions v is used instead of " (ASCII code 118 instead of 34) w is used instead of ' (ASCII code 119 instead of 39) x is used instead of \ (ASCII code 120 instead of 92) If all five digits are 0 they are represented by a single character z instead of !!!!!
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

declare class View {
/**
 * Autoscales the view
 */
    static Ac(): void;

/**
 * Does a contour plot
 */
    static Ct(): void;

/**
 * Does a Hidden line plot
 */
    static Hi(): void;

/**
 * Does a line (wireframe) plot
 */
    static Li(): void;

/**
 * Redraws the plot using the current plot mode.
 */
    static Redraw(): void;

/**
 * Does a shaded plot
 */
    static Sh(): void;

/**
 * Redraws using one of the standard views
 * @param View_type The view to show. Can be +/-View.XY, +/-View.YZ, +/-View.XZ or +/-View.ISO
 */
    static Show(View_type: number): void;

/**
 * Does a shaded image contour plot
 */
    static Si(): void;

/**
 * Does a vector plot
 */
    static Vec(): void;

/** current mode */
    static CURRENT: number;
/** Hidden line */
    static HIDDEN: number;
/** Isometric projection */
    static ISO: number;
/** Shaded view */
    static SHADED: number;
/** Wireframe */
    static WIRE: number;
/** XY axis projection */
    static XY: number;
/** XZ axis projection */
    static XZ: number;
/** YZ axis projection */
    static YZ: number;
}

/**
 * Blank an item
 * @param type_code The type of item to check (SOLID, PART etc.) Note: If &lt;item&gt; is "ALL_DEL" (all deleted elements), only element types are acceptable.
 * @param item If +ve, the internal item number starting at 1. If -ve, the external label of the item. It can also be an array of items (index/label) or a string indicating various items ("ALL" for all items of the type and "ALL_DEL" for deleted items of the type.)
 * @param window_id A window id. If defined then the item is blanked in that window. If not defined or set 0 to then the item is blanked in all windows.
 */
declare function Blank(type_code: number, item: number | number[] | string, window_id?: number): void;

/**
 * Checks whether an item is currently blanked. If the type is PART then this function will only return true if all elements of the PART are currently blanked. If the PART is empty this returns false
 * @param type_code The type of item to check (SOLID, etc.)
 * @param item If +ve, the internal item number starting at 1. If -ve, the external label of the item.
 * @param window_id A window id. If defined then the function will return true if the item is blanked in that window. If not defined or set to then the function returns true if it is blanked in any window.
 * @returns boolean
 */
declare function IsBlanked(type_code: number, item: number, window_id?: number): boolean;

/**
 * Checks whether an item is currently deleted. If the type is PART then this function will only return true if all the elements of the PART are currently deleted The deleted status is computed as follows:  Part-based elements: Ansys LS-DYNA reports the deletion status for part-based elements (but not DISCRETE or 1d SEATBELT elements) which have failed according to the failure criteria of their deletion model. Reincarnation of dead elements is possible: *DEFINE_CONSTRUCTION_STAGES will result in an inactive element being marked as deleted, and it will be "undeleted" if that stage becomes active later on in the analysis. Parts themselves: Ansys LS-DYNA does not delete parts as such. A deformable part in which all elements have been deleted is removed from the calculation, but this removal is not reported in the results database. D3PLOT considers a part to be deleted if it has no elements, or all of its elements are marked as deleted. Note that a rigid part with no elements is a perfectly legitimate- if unusual - construct in Ansys LS-DYNA. Nodes: Ansys LS-DYNA does not delete nodes, but nodes with no structural mass are removed from the calculation. However this removal is not reported in the results database. D3PLOT considers a node to be deleted if all the elements to which it is attached are themselves deleted. Remember that D3PLOT does not "know about" all possible connections to a node, for example it may be an extra node on a rigid body, in a rigid part set, or constrained in some other obscure way. Therefore the test "deleted if all attached nodes are deleted" may give false positives and should not be considered definitive.  
 * @param type_code This function only supports the following type codes. PART, NODE, SOLID, BEAM, TSHELL, SPH, DES
 * @param item If +ve, the internal item number starting at 1. If -ve, the external label of the item.
 * @param state_id A valid state id. If omitted the current state will be used.
 * @returns boolean
 */
declare function IsDeleted(type_code: number, item: number, state_id?: number): boolean;

/**
 * Checks whether an item is currently visible. An item is considered "visible" if the following conditions are all true:  Not blanked The visibility switch is on for type_code Is not empty, if type is PART The item has not been deleted in the current state if the type is an element  
 * @param type_code This function only supports the following type codes. PART, NODE, SOLID, BEAM, TSHELL, SPH, DES
 * @param item If +ve, the internal item number starting at 1. If -ve, the external label of the item.
 * @param window_id A valid window id
 * @param state_id A valid state id. If omitted the current state will be used.
 * @returns boolean
 */
declare function IsVisible(type_code: number, item: number, window_id: number, state_id?: number): boolean;

/**
 * Gets the number of deleted elements or segments
 * @param type_code The type of item to check. Only accepts ELEM for #elements or SEGM for #segments.
 * @param state_id A state id. If defined then the number of deleted items is calculated for that state. If not defined or set to 0 then the number of items is calculated for the current state.
 * @returns integer
 */
declare function NumDeleted(type_code: number, state_id?: number): number;

/**
 * Unblank an item
 * @param type_code The type of item to check (SOLID, PART etc.) Note: If &lt;item&gt; is "ALL_DEL" (all deleted elements), only element types are acceptable.
 * @param item If +ve, the internal item number starting at 1. If -ve, the external label of the item. It can also be an array of items (index/label) or a string indicating various items ("ALL" for all items of the type and "ALL_DEL" for deleted items of the type.)
 * @param window_id A window id. If defined then the item is unblanked in that window. If not defined or set to 0 then the item is unblanked in all windows.
 */
declare function Unblank(type_code: number, item: number | number[] | string, window_id?: number): void;

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
 * Deletes the widget from D3PLOT (removing it from the window it is defined in) and returns any memory/resources used for the widget. This function should not normally need to be called. However, sometimes a script may want to recreate widgets in a window many times and unless the old widgets are deleted D3PLOT will reach the maximum number of widgets for a window (Options.max_widgets). To avoid this problem this method can be used to force D3PLOT to delete and return the resources for a widget. Do not use the Widget object after calling this method.
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
 * @param format Can be Widget.RGB8 or Widget.RGB24. Before version 15 D3PLOT only used 8 bits to store RGB (red, green and blue) colour information for widget images. In version 15 widget images have been changed to use 24 bits to store RGB information (8 bits for red, 8 bits for green and 8 bits for blue). Both formats are supported. If omitted the new Widget.RGB24 format will be used. See Widget.ReadImageString() for more details.
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
 * Returns the number of pixels per unit coordinate. This will vary depending on the monitor D3PLOT is running on.
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
 * Reads an image from a file to show on the widget. Only possible for Widget.LABEL and Widget.BUTTON widgets. The image will be shown on the widget underneath any text. Note that due to the way that colours are used for menus in D3PLOT only a small number of colours are available for Widget images. Black and white images will display without any issues but colour images will be displayed with a reduced set of colours.
 * @param filename Image file (BMP, GIF, JPEG or PNG) to read. To remove an image use null.
 * @param justify Widget justification. Can be a bitwise or of Widget.LEFT, Widget.RIGHT or Widget.CENTRE and Widget.TOP, Widget.MIDDLE or Widget.BOTTOM. Additionally Widget.SCALE can be used to scale the image (either reducing or enlarging it) so that it fills the widget. If omitted the default is Widget.CENTRE|Widget.MIDDLE without scaling.
 * @param transparent Transparent colour. Must be a colour returned by Colour.RGB() in D3PLOT. If given then this colour will be replaced by a transparent colour. i.e. the widget background colour will be shown. If omitted or null no transparency will be used.
 * @param tolerance Tolerance for transparent colour (0-255). Any pixels in the image that have a red, green and blue colour value within tolerance of the transparent colour will be transparent. For example if the transparent colour was given as Colour.RGB(255, 0, 0) and tolerance is 0 only pixels which have red value 255 and green value 0 and blue value 0 will be made transparent. If tolerance is 4, pixels which have red values between 251 and 255 and green values between 0 and 4 and blue values between 0 and 4 will be made transparent. If omitted a value of 8 will be used.
 */
    ReadImageFile(filename: string, justify?: number, transparent?: number, tolerance?: number): void;

/**
 * Reads an image from a JavaScript string previously created by Widget.DumpImageString() to show on the widget. Only possible for Widget.LABEL and Widget.BUTTON widgets. The image will be shown on the widget underneath any text. Note, prior to version 15 of D3PLOT only a small number of colours were available for Widget images. In version 14 and earlier the RGB (red, green and blue) information for each pixel in the image was packed into a single byte (8 bits) with 3 bits for red, 3 for green and 2 for blue. Widget.DumpImageString() always returned the string beginning with "RRRGGGBB_RLE" which is this 8 bit format with run length encoding. This is format Widget.RGB8. In version 15 support for Widget images was enhanced to give 24bit support for colours. The RGB information for each pixel has 8 bits for red, 8 bits for green and 8 bits for blue. This is format Widget.RGB24. From version 15 Widget.DumpImageString() can either return the the old 8 bit format Widget.RGB8 (string beginning with "RRRGGGBB_RLE") or return the the new 24bit format Widget.RGB24 (string beginning with "RGB24_Z"). ReadImageString supports both formats.
 * @param string String containing the image data previously created by Widget.DumpImageString(). To remove an image use null.
 * @param justify Widget justification. Can be a bitwise or of Widget.LEFT, Widget.RIGHT or Widget.CENTRE and Widget.TOP, Widget.MIDDLE or Widget.BOTTOM. Additionally Widget.SCALE can be used to scale the image (either reducing or enlarging it) so that it fills the widget. If omitted the default is Widget.CENTRE|Widget.MIDDLE without scaling.
 * @param transparent Transparent colour. Must be a colour returned by Colour.RGB() in D3PLOT. If given then this colour will be replaced by a transparent colour. i.e. the widget background colour will be shown. If omitted or null no transparency will be used.
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
 * Deletes the window from D3PLOT and returns any memory/resources used for the window. This function should not normally need to be called. However, in exceptional circumstances if a script recreates windows many times D3PLOT may run out of USER objects on Microsoft Windows because of the way D3PLOT creates and shows windows. To avoid this problem this method can be used to force D3PLOT to return the resources for a window. Do not use the Window object after calling this method.
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
 * @param modal If this window is modal (true) then the user is blocked from doing anything else in D3PLOT until this window is dismissed). If non-modal (false) then the user can still use other functions in D3PLOT. If omitted the window will be modal. Note that making a window modal will stop interaction in all other windows and may prevent operations such as picking from working in any macros that are run from scripts. Before version 21 D3PLOT would create a blocking event loop when the Window Show method was called (the call to the Window Show method would not return until the window was hidden again). In D3PLOT version 21 the logic has been changed so that Window Show maps the window and returns straight away. The window is managed from the main event loop in D3PLOT. In most cases this will make no differences to scripts but there may be rare cases where you specifically want the blocking behaviour. In this case use Window.StartLoop().
 */
    Show(modal?: boolean): void;

/**
 * Starts a blocking event loop in D3PLOT. Before version 21 D3PLOT would create a blocking event loop when the Window Show method was called (the call to the Window Show method would not return until the window was hidden again). In D3PLOT version 21 the logic has been changed so that Window Show maps the window and returns straight away. The window is managed from the main event loop in D3PLOT. In most cases this will make no differences to scripts but there may be rare cases where you specifically want the blocking behaviour. An example of this is using a keyout hook script, or if you want to give aprompt/question similarly to Window.Message() where you do not want to return to the main event loop. You want to block until the user has specified the action. Window.StartLoop() can be used to start a local blocking, event loop. To terminate the event loop and resume execution of the script use Window.EndLoop() Note that only a single loop can be active in D3PLOT at any one time. i.e. they cannot be nested. Window.StartLoop() should be used as sparingly as possible and only used for specific short events (e.g. something like the equivalent of Window.Message() where you really do need to block) as if it is used in one script it will prevent it from being used in another script.
 */
    static StartLoop(): void;

/**
 * Set or get a user interface theme.
 * @param theme If it is provided it is used to set the current theme. Can be either Window.USE_OLD_UI_JS, Window.THEME_CURRENT, Window.THEME_DARK, Window.THEME_LIGHT, Window.THEME_CLASSIC.
 * @returns Integer. When getting the theme one of: Window.USE_OLD_UI_JS, Window.THEME_DARK, Window.THEME_LIGHT, Window.THEME_CLASSIC
 */
    static Theme(theme?: number): number;

/**
 * Returns the vertical position of the top border (in range 0-1). This can be used to help position windows on the screen. This is no longer used in D3PLOT and will always be 1 but is left for backwards compatibility.
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


/** Object returned by GetWindowModels */
interface GetWindowModelsReturn {
    /** List of model numbers */
    list: number[];
    /** the number of models in the window */
    nm: number;
}

/**
 * Creates a new window containing one or more models contained in model_list
 * @param model_list Model number(s). Can be a single model number, an array of model numbers or the constant ALL
 * @returns boolean
 */
declare function CreateWindow(model_list: number[] | number): boolean;

/**
 * Deletes one or more windows in window_list, dealing with "orphaned" models according to dispose_flag. WARNING  D3PLOT does not permit gaps in window numbering, therefore when a window is deleted any windows higher than this are renumbered downwards to fill the gap. However D3PLOT does not renumber models following the deletion of preceding ones. Deleted model ids simply become "inactive".  This means that following a window deletion operation:  The total number of windows will change. Any window ids above those deleted will have been renumbered downwards. If any orphan models were deleted these models will now be inactive. If the current Javascript model has been deleted then the "current" model pointer will be reset to the first active model, or &lt;undefined&gt; if there are no such models.  Therefore if a script is to continue execution after a window deletion operation it is prudent to ensure that any "current" user-defined variables in the Javascript are reset to sensible values.
 * @param window_list Window numbers. Can be a single window number, an array of window numbers or the constant ALL
 * @param dispose_flag LEAVE (default) leaves orphaned models in the database or DELETE deletes orphaned models
 * @returns boolean
 */
declare function DeleteWindow(window_list: number[] | number, dispose_flag?: number): boolean;

/**
 * Returns the current "frame" in window_id See the notes in GetWindowMaxFrame() on how frame number relates to state number
 * @param window_id Window number or ALL. Specifies the window(s) to have the frame number set
 * @returns integer
 */
declare function GetWindowFrame(window_id: number): number;

/**
 * Returns the highest "frame" number in window_id "Frame" number is usually the same as state number, but there are a few situations when this is not the case:  Eigenvalue analyses. Each state is animated though #frames between +/-180 degrees phase angle Nastran-derived static analyses. Each loadcase is likewise animated through #frames Transient analyses that are being interpolated by time, giving (endtime / time interval) frames  In all cases animating a window results in it cycling through frames 1 to max #frames.
 * @param window_id Window number
 * @returns integer
 */
declare function GetWindowMaxFrame(window_id: number): number;

/**
 * Returns the model number(s) in window_id Every active window in D3PLOT must have at least one model, but may have any number
 * @param window_id Window number
 */
declare function GetWindowModels(window_id: number): GetWindowModelsReturn;

/**
 * Set the "active" flag on a window. When more than one window is in use it is convenient to be able to operate on a group of "active" windows with a single command in the JavaScript, rather than having to loop over selected windows each time, and this function provides that capability. This activity status is used solely within the Javascript interface and does not have any bearing upon or connection with the Wn "tabs" used in the graphical userinterface. By default all windows are active (ON), but you can change this by setting the activity of specific windows ON or OFF.
 * @param window_id Window number or ALL. Specifies the window(s) to have their status set
 * @param active_flag OFF or ON. OFF makes the selected window(s) inactive, ON makes window(s) active
 * @returns boolean
 */
declare function SetWindowActive(window_id: number, active_flag: number): boolean;

/**
 * Sets the current "frame" in the window(s) specified to frame_number. The effect is immediate and the window(s) will be redrawn if necessary to show the requested frame See the notes in GetWindowMaxFrame() on how frame number relates to state number
 * @param window_id Window number or ALL
 * @param frame_number The frame number to set. Should be a +ve integer value in the range 1 to max #frames in window. Values greater than max #frames are truncated to this
 * @returns boolean
 */
declare function SetWindowFrame(window_id: number, frame_number: number): boolean;


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

declare class XlsxWorkbook {
/**
 * Close a Xlsx file
 */
    Close(): void;

/**
 * Create a new XlsxWorkbook object for writing xlsx files.
 * @param filename Filename of the xlsx file you want to write. The file will be overwritten (if it exists).
 * @returns XlsxWorkbook object
 */
    constructor(filename: string);

/** Name of the xlsx file */
    readonly filename: string;
}

declare class XlsxWorksheet {
/**
 * Add an image to the Xlsx file. Note that the image will not actually be read/inserted until the workbook is written by calling XlsxWorkbook.Close so you must make sure the image file exists until then.
 * @param row The row in the xlsx file (rows start at zero)
 * @param column The column in the xlsx file (columns start at zero)
 * @param filename Name of the image file you want to add to the xlsx file. The image can be in png or jpeg format.
 * @param x_scale Scale factor for horizontally scaling the input image.
 * @param y_scale Scale factor for vertically scaling the input image.
 */
    AddImage(row: number, column: number, filename: string, x_scale?: number, y_scale?: number): void;

/**
 * Add number to the Xlsx file
 * @param row The row in the xlsx file (rows start at zero)
 * @param column The column in the xlsx file (columns start at zero)
 * @param value Number you want to add to the xlsx file
 */
    AddNumber(row: number, column: number, value: number): void;

/**
 * Add text to the Xlsx file
 * @param row The row in the xlsx file (rows start at zero)
 * @param column The column in the xlsx file (columns start at zero)
 * @param text Text you want to add to the xlsx file
 */
    AddText(row: number, column: number, text: string): void;

/**
 * Set the column properties in the worksheet
 * @param column The column in the xlsx file (columns start at zero)
 * @param width Width of the column to set
 */
    SetColumnProperties(column: number, width: number): void;

/**
 * Set the row properties in the worksheet
 * @param row The row in the xlsx file (rows start at zero)
 * @param height Height of the row to set
 */
    SetRowProperties(row: number, height: number): void;

/**
 * Create a new XlsxWorksheet object for writing xlsx files.
 * @param workbook The workbook to create the worksheet in.
 * @param name The name of the worksheet. If omitted the default names 'Sheet1', 'Sheet2' etc will be used.
 * @returns XlsxWorksheet object
 */
    constructor(workbook: XlsxWorkbook, name?: string);

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
 * Allocate a flag for use in the script. See also ReturnFlag(). Once allocated the flag is automatically cleared for all the models currently in D3PLOT.
 * @returns Flag to use
 */
declare function AllocateFlag(): number;

/**
 * Executes one or more command-line syntax commands. There is no limit to the number of lines that may be specified in a single call. See Dialogue Command Syntax for a full list of command-line commands The DialogueInputNoEcho variant is identical, except that it suppresses the echo of the commands to the dialogue box. D3PLOT provides a full command-line syntax as an alternative to graphical user interface commands, and a sequence of such commands may be provided here. Note that:  Each call to DialogueInput starts at the top of the D3PLOT command-line "tree", at the D3PLOT_MANAGER&gt;&gt;&gt; prompt Each call is autonomous, there is no "memory" of where in the command-line tree previous commands finished. However within a single call the current command-line tree is remembered from one line to the next. Commands are not case-sensitive, although filenames and titles in command strings are.  Therefore commands which require more than one line of input to complete must be specified in a single call; and it makes sense to group a sequence of related commands together in a single call, although this is not mandatory. If this succeeds it returns true, otherwise false.
 * @param command Command to be executed (as if it had been typed into the dialogue box)
 *        This argument can be repeated if required.
 */
declare function DialogueInput(...command: string[]): void;

/**
 * Executes one or more command-line syntax commands. There is no limit to the number of lines that may be specified in a single call. See Dialogue Command Syntax for a full list of command-line commands The DialogueInputNoEcho variant is identical, except that it suppresses the echo of the commands to the dialogue box. D3PLOT provides a full command-line syntax as an alternative to graphical user interface commands, and a sequence of such commands may be provided here. Note that:  Each call to DialogueInput starts at the top of the D3PLOT command-line "tree", at the D3PLOT_MANAGER&gt;&gt;&gt; prompt Each call is autonomous, there is no "memory" of where in the command-line tree previous commands finished. However within a single call the current command-line tree is remembered from one line to the next. Commands are not case-sensitive, although filenames and titles in command strings are.  Therefore commands which require more than one line of input to complete must be specified in a single call; and it makes sense to group a sequence of related commands together in a single call, although this is not mandatory. If this succeeds it returns true, otherwise false.
 * @param command Array where each element specifies a Command to be executed (as if it had been typed into the dialogue box)
 */
declare function DialogueInput(command: string[]): void;

/**
 * Executes one or more command-line syntax commands. There is no limit to the number of lines that may be specified in a single call. See Dialogue Command Syntax for a full list of command-line commands This does not echo the commands to the dialogue box. See DialogueInput for more information.
 * @param command Command to be executed (as if it had been typed into the dialogue box)
 *        This argument can be repeated if required.
 */
declare function DialogueInputNoEcho(...command: string[]): void;

/**
 * Executes one or more command-line syntax commands. There is no limit to the number of lines that may be specified in a single call. See Dialogue Command Syntax for a full list of command-line commands This does not echo the commands to the dialogue box. See DialogueInput for more information.
 * @param command Array where each element specifies a Command to be executed (as if it had been typed into the dialogue box)
 */
declare function DialogueInputNoEcho(command: string[]): void;

/**
 * Print an error message to the dialogue box adding a carriage return.
 * @param string The string/item that you want to print
 */
declare function ErrorMessage(string: any): void;

/**
 * Execute a program or script outside D3PLOT and get the standard output and error streams.
 * @param data Execute data
 */
declare function Execute(data: ExecuteArgument_data): ExecuteReturn;

/**
 * Exit script
 * @param write_hook_interrupt If Exit() is called from a write_hook.js script, the first argument will be processed as in the following: If the argument is provided and set to "true", it is used to interrupt the write out of the model, so that the script exits without anything being written out. An argument value of "false" exits the script and allows the model to be written out as normal. An example of this function's use in a Write Hook script can be found at $OA_INSTALL/primer_library/scripts/hooks/example_write_hook.js.
 */
declare function Exit(write_hook_interrupt?: boolean): void;

/**
 * Exits the T/HIS link from D3PLOT
 */
declare function ExitTHisLink(): void;

/**
 * Get the current working directory
 * @returns String containing current working directory
 */
declare function GetCurrentDirectory(): string;

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
 * Get the directory passed to D3PLOT by the -start_in command line argument
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
 * Return a flag used in the script. See also AllocateFlag().
 * @param flag The flag to return
 */
declare function ReturnFlag(flag: number): void;

/**
 * Sets the current working directory.
 * @param directory_path Path to the directory you would like to change into.
 * @returns true if successful, false if not
 */
declare function SetCurrentDirectory(directory_path: string): boolean;

/**
 * Pause execution of the script for time seconds. See also MilliSleep()
 * @param time Number of seconds to pause for
 */
declare function Sleep(time: number): void;

/**
 * Starts the T/HIS link from D3PLOT
 */
declare function StartTHisLink(): void;

/**
 * Do a system command outside D3PLOT. To run an external command and get the output then please use Execute() instead.
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
 * Print a warning message to the dialogue box adding a carriage return.
 * @param string The string/item that you want to print
 */
declare function WarningMessage(string: any): void;

/**
 * Test whether script is running on a Windows operating system. See also Unix()
 * @returns true if Windows, false if not
 */
declare function Windows(): boolean;

