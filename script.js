/* ==========================================================
   FUO TEST DRILLER
   MAIN JAVASCRIPT ENGINE
========================================================== */


/* ==========================================================
   QUESTION BANK
==========================================================

   FORMAT:

   {
       id: 1,
       topic: "Sets",
       question: "Question...",
       options: [
           "Option A",
           "Option B",
           "Option C",
           "Option D"
       ],
       answer: 1,
       explanation: "Explanation..."
   }

   answer:
   0 = A
   1 = B
   2 = C
   3 = D

========================================================== */


const questionBank = {

    MTH101: [

        {
            id: 1,
            topic: "Set Theory",
            question: "Which of the following is a well-defined set?",
            options: [
                "Beautiful students in FUO",
                "Prime numbers less than 20",
                "Interesting books",
                "Tall students"
            ],
            answer: 1,
            explanation:
                "A well-defined set has elements that can be clearly identified."
        },

        {
            id: 2,
            topic: "Set Theory",
            question: "How many elements are contained in A = {1, 2, 3, 4, 5}?",
            options: [
                "4",
                "5",
                "6",
                "10"
            ],
            answer: 1,
            explanation:
                "There are five distinct elements in the set."
        },

        {
            id: 3,
            topic: "Set Theory",
            question: "Which symbol means 'is an element of'?",
            options: [
                "⊂",
                "∈",
                "∪",
                "∩"
            ],
            answer: 1,
            explanation:
                "The symbol ∈ means that an element belongs to a set."
        },

        {
            id: 4,
            topic: "Set Theory",
            question: "Which statement is correct?",
            options: [
                "6 ∉ {2,4,6,8}",
                "6 ∈ {2,4,6,8}",
                "6 ⊂ {2,4,6,8}",
                "6 = {2,4,6,8}"
            ],
            answer: 1,
            explanation:
                "6 is one of the elements in the set."
        },

        {
            id: 5,
            topic: "Set Theory",
            question: "A set containing no element is called what?",
            options: [
                "Universal set",
                "Singleton set",
                "Empty set",
                "Infinite set"
            ],
            answer: 2,
            explanation:
                "An empty set contains no elements."
        },

        {
            id: 6,
            topic: "Set Theory",
            question: "What symbol represents the empty set?",
            options: [
                "U",
                "∅",
                "∈",
                "⊆"
            ],
            answer: 1,
            explanation:
                "The empty set is represented by ∅."
        },

        {
            id: 7,
            topic: "Set Theory",
            question: "A set containing exactly one element is called a:",
            options: [
                "Universal set",
                "Singleton set",
                "Empty set",
                "Power set"
            ],
            answer: 1,
            explanation:
                "A singleton set contains exactly one element."
        },

        {
            id: 8,
            topic: "Set Theory",
            question: "Which statement is true?",
            options: [
                "{a,b} ⊄ {a,b,c}",
                "{a,b} ⊆ {a,b,c}",
                "{a,b,c} ⊂ {a,b}",
                "{a} = {a,b}"
            ],
            answer: 1,
            explanation:
                "Every element of {a,b} is contained in {a,b,c}."
        },

        {
            id: 9,
            topic: "Set Theory",
            question: "If a set has n elements, how many subsets does it have?",
            options: [
                "n²",
                "2n",
                "2ⁿ",
                "n!"
            ],
            answer: 2,
            explanation:
                "A set containing n elements has 2ⁿ subsets."
        },

        {
            id: 10,
            topic: "Set Theory",
            question: "How many subsets does a set containing 4 elements have?",
            options: [
                "4",
                "8",
                "12",
                "16"
            ],
            answer: 3,
            explanation:
                "2⁴ = 16."
        },


        /* SEQUENCES */

        {
            id: 31,
            topic: "Sequences and Series",
            question: "What is the next term in the sequence 2, 4, 6, 8, ...?",
            options: [
                "9",
                "10",
                "12",
                "14"
            ],
            answer: 1,
            explanation:
                "The common difference is 2, so the next term is 10."
        },

        {
            id: 32,
            topic: "Sequences and Series",
            question: "What is the next term in 3, 6, 12, 24, ...?",
            options: [
                "30",
                "36",
                "48",
                "54"
            ],
            answer: 2,
            explanation:
                "Each term is multiplied by 2."
        },

        {
            id: 33,
            topic: "Sequences and Series",
            question: "Find the nth term of 2, 5, 8, 11, ...",
            options: [
                "2n + 1",
                "3n - 1",
                "3n + 1",
                "n + 3"
            ],
            answer: 1,
            explanation:
                "The nth term is aₙ = 2 + (n−1)3 = 3n−1."
        },

        {
            id: 34,
            topic: "Arithmetic Progression",
            question: "Which expression gives the nth term of an arithmetic progression?",
            options: [
                "a + nr",
                "a + (n−1)d",
                "arⁿ",
                "a(n+d)"
            ],
            answer: 1,
            explanation:
                "For an AP, aₙ = a + (n−1)d."
        },

        {
            id: 35,
            topic: "Arithmetic Progression",
            question: "Find the 10th term of 3, 7, 11, 15, ...",
            options: [
                "35",
                "39",
                "40",
                "43"
            ],
            answer: 1,
            explanation:
                "a₁₀ = 3 + 9(4) = 39."
        },


        /* QUADRATIC EQUATIONS */

        {
            id: 66,
            topic: "Quadratic Equations",
            question: "Which is the general form of a quadratic equation?",
            options: [
                "ax + b = 0",
                "ax² + bx + c = 0",
                "ax³ + bx² + c = 0",
                "ax⁴ + bx + c = 0"
            ],
            answer: 1,
            explanation:
                "A quadratic equation has the general form ax² + bx + c = 0, where a ≠ 0."
        },

        {
            id: 67,
            topic: "Quadratic Equations",
            question: "What is the degree of a quadratic equation?",
            options: [
                "1",
                "2",
                "3",
                "4"
            ],
            answer: 1,
            explanation:
                "The highest power of x in a quadratic equation is 2."
        },

        {
            id: 68,
            topic: "Quadratic Equations",
            question: "Which of the following is a quadratic equation?",
            options: [
                "3x + 2 = 0",
                "3x² − 5x + 2 = 0",
                "x³ + 2 = 0",
                "x⁴ − 1 = 0"
            ],
            answer: 1,
            explanation:
                "The highest power of x is 2."
        },

        {
            id: 69,
            topic: "Quadratic Equations",
            question: "Which formula is used to solve ax² + bx + c = 0?",
            options: [
                "x = −b ± √(b²−4ac) / 2a",
                "x = b ± √(b²−4ac) / 2a",
                "x = −b ± √(b²+4ac) / 2a",
                "x = 2a / −b"
            ],
            answer: 0,
            explanation:
                "The quadratic formula is x = [−b ± √(b²−4ac)]/(2a)."
        },

        {
            id: 70,
            topic: "Quadratic Equations",
            question: "What is the discriminant of ax² + bx + c = 0?",
            options: [
                "b² + 4ac",
                "b² − 4ac",
                "4ac − b²",
                "a² − 4bc"
            ],
            answer: 1,
            explanation:
                "The discriminant is Δ = b² − 4ac."
        },

        {
            id: 71,
            topic: "Nature of Roots",
            question: "If the discriminant is positive, the quadratic equation has:",
            options: [
                "Two distinct real roots",
                "Two equal real roots",
                "No roots",
                "Only imaginary roots"
            ],
            answer: 0,
            explanation:
                "A positive discriminant gives two distinct real roots."
        },

        {
            id: 72,
            topic: "Nature of Roots",
            question: "If the discriminant is zero, the roots are:",
            options: [
                "Distinct",
                "Equal",
                "Imaginary",
                "Undefined"
            ],
            answer: 1,
            explanation:
                "When Δ = 0, the two roots are real and equal."
        },

        {
            id: 73,
            topic: "Nature of Roots",
            question: "If b² − 4ac < 0, the roots are:",
            options: [
                "Real and distinct",
                "Real and equal",
                "Non-real complex",
                "Both zero"
            ],
            answer: 2,
            explanation:
                "A negative discriminant gives complex roots."
        },

        {
            id: 74,
            topic: "Quadratic Equations",
            question: "Find the roots of x² − 5x + 6 = 0.",
            options: [
                "1 and 6",
                "2 and 3",
                "−2 and −3",
                "3 and 5"
            ],
            answer: 1,
            explanation:
                "(x−2)(x−3)=0, so x=2 or x=3."
        },

        {
            id: 75,
            topic: "Quadratic Equations",
            question: "Find the roots of x² − 7x + 12 = 0.",
            options: [
                "2 and 6",
                "3 and 4",
                "−3 and −4",
                "1 and 12"
            ],
            answer: 1,
            explanation:
                "(x−3)(x−4)=0."
        },


        /* COMPLEX NUMBERS */

        {
            id: 101,
            topic: "Complex Numbers",
            question: "What is the value of i²?",
            options: [
                "1",
                "−1",
                "i",
                "−i"
            ],
            answer: 1,
            explanation:
                "By definition, i² = −1."
        },

        {
            id: 102,
            topic: "Complex Numbers",
            question: "What is i³?",
            options: [
                "1",
                "−1",
                "i",
                "−i"
            ],
            answer: 3,
            explanation:
                "i³ = i² × i = −i."
        },

        {
            id: 103,
            topic: "Complex Numbers",
            question: "What is i⁴?",
            options: [
                "1",
                "−1",
                "i",
                "−i"
            ],
            answer: 0,
            explanation:
                "i⁴ = (i²)² = 1."
        },

        {
            id: 104,
            topic: "Complex Numbers",
            question: "What is the real part of 5 − 4i?",
            options: [
                "5",
                "−4",
                "4",
                "−5"
            ],
            answer: 0,
            explanation:
                "The real part is 5."
        },

        {
            id: 105,
            topic: "Complex Numbers",
            question: "What is the imaginary part of 5 − 4i?",
            options: [
                "5",
                "−5",
                "4",
                "−4"
            ],
            answer: 3,
            explanation:
                "The coefficient of i is −4."
        },


        /* BINOMIAL */

        {
            id: 121,
            topic: "Binomial Theorem",
            question: "How many terms are contained in the expansion of (x + y)ⁿ?",
            options: [
                "n",
                "n + 1",
                "2n",
                "n²"
            ],
            answer: 1,
            explanation:
                "The expansion contains n+1 terms."
        },

        {
            id: 122,
            topic: "Binomial Theorem",
            question: "What is (x + y)²?",
            options: [
                "x² + y²",
                "x² + xy + y²",
                "x² + 2xy + y²",
                "2x² + 2y²"
            ],
            answer: 2,
            explanation:
                "(x+y)² = x² + 2xy + y²."
        },

        {
            id: 123,
            topic: "Binomial Theorem",
            question: "What is ⁵C₂?",
            options: [
                "5",
                "10",
                "15",
                "20"
            ],
            answer: 1,
            explanation:
                "5C2 = 5!/(2!3!) = 10."
        },


        /* PERMUTATIONS */

        {
            id: 141,
            topic: "Permutations and Combinations",
            question: "What is 5!?",
            options: [
                "25",
                "60",
                "120",
                "240"
            ],
            answer: 2,
            explanation:
                "5! = 5×4×3×2×1 = 120."
        },

        {
            id: 142,
            topic: "Permutations and Combinations",
            question: "What is 0!?",
            options: [
                "0",
                "1",
                "Undefined",
                "10"
            ],
            answer: 1,
            explanation:
                "By definition, 0! = 1."
        },

        {
            id: 143,
            topic: "Permutations and Combinations",
            question: "How many ways can 3 distinct students be arranged in a row?",
            options: [
                "3",
                "6",
                "9",
                "12"
            ],
            answer: 1,
            explanation:
                "3! = 6."
        },

        {
            id: 144,
            topic: "Permutations and Combinations",
            question: "In a permutation, does order matter?",
            options: [
                "No",
                "Yes",
                "Only sometimes",
                "Never"
            ],
            answer: 1,
            explanation:
                "Permutation is an arrangement where order matters."
        },

        {
            id: 145,
            topic: "Permutations and Combinations",
            question: "What is ⁵P₂?",
            options: [
                "10",
                "15",
                "20",
                "25"
            ],
            answer: 2,
            explanation:
                "5P2 = 5×4 = 20."
        }

    ],



    /* ======================================================
       CHEMISTRY
    ====================================================== */

    CHEM101: [

        {
            id: 1,
            topic: "Chemical Reactions",
            question:
                "A chemical reaction involves the rearrangement of atoms to form:",
            options: [
                "New substances",
                "Only mixtures",
                "Only elements",
                "Nothing new"
            ],
            answer: 0,
            explanation:
                "Chemical reactions rearrange atoms and produce new substances."
        },

        {
            id: 2,
            topic: "Chemical Reactions",
            question:
                "Rusting of iron is an example of:",
            options: [
                "A physical change",
                "A chemical reaction",
                "Evaporation",
                "Melting"
            ],
            answer: 1,
            explanation:
                "Rusting produces new iron oxide substances."
        },

        {
            id: 3,
            topic: "Chemical Reactions",
            question:
                "The substances present before a chemical reaction are called:",
            options: [
                "Products",
                "Reactants",
                "Catalysts",
                "Solvents"
            ],
            answer: 1,
            explanation:
                "Reactants are the starting substances in a chemical reaction."
        },

        {
            id: 4,
            topic: "Chemical Reactions",
            question:
                "The substances formed after a chemical reaction are called:",
            options: [
                "Reactants",
                "Products",
                "Elements",
                "Catalysts"
            ],
            answer: 1,
            explanation:
                "Products are formed during a chemical reaction."
        },

        {
            id: 5,
            topic: "Chemical Reactions",
            question:
                "Which equation represents a combination reaction?",
            options: [
                "AB → A + B",
                "A + B → AB",
                "A + BC → AC + B",
                "AB + CD → AD + CB"
            ],
            answer: 1,
            explanation:
                "Two or more substances combine to form one product."
        },

        {
            id: 6,
            topic: "Chemical Reactions",
            question:
                "A reaction in which one compound breaks into simpler substances is called:",
            options: [
                "Combination",
                "Decomposition",
                "Neutralization",
                "Combustion"
            ],
            answer: 1,
            explanation:
                "Decomposition involves breaking one compound into simpler substances."
        },

        {
            id: 7,
            topic: "Chemical Reactions",
            question:
                "CaCO₃ → CaO + CO₂ is an example of:",
            options: [
                "Combination",
                "Decomposition",
                "Neutralization",
                "Single displacement"
            ],
            answer: 1,
            explanation:
                "One compound breaks down into two products."
        },

        {
            id: 8,
            topic: "Chemical Reactions",
            question:
                "Zn + CuSO₄ → ZnSO₄ + Cu is an example of:",
            options: [
                "Combination",
                "Single displacement",
                "Decomposition",
                "Double displacement"
            ],
            answer: 1,
            explanation:
                "Zinc displaces copper from copper sulfate."
        },

        {
            id: 9,
            topic: "Chemical Reactions",
            question:
                "An acid reacting with a base to form salt and water is called:",
            options: [
                "Combustion",
                "Neutralization",
                "Decomposition",
                "Oxidation"
            ],
            answer: 1,
            explanation:
                "Acid + base → salt + water is neutralization."
        },

        {
            id: 10,
            topic: "Chemical Reactions",
            question:
                "What is the coefficient of H₂ in 2H₂ + O₂ → 2H₂O?",
            options: [
                "1",
                "2",
                "3",
                "4"
            ],
            answer: 1,
            explanation:
                "The coefficient in front of H₂ is 2."
        },


        /* ATOMIC STRUCTURE */

        {
            id: 21,
            topic: "Atomic Structure",
            question:
                "The smallest unit of an element that retains its chemical properties is the:",
            options: [
                "Molecule",
                "Atom",
                "Ion",
                "Electron"
            ],
            answer: 1,
            explanation:
                "An atom is the smallest unit of an element that retains its chemical identity."
        },

        {
            id: 22,
            topic: "Atomic Structure",
            question:
                "Which subatomic particle has a negative charge?",
            options: [
                "Proton",
                "Neutron",
                "Electron",
                "Nucleus"
            ],
            answer: 2,
            explanation:
                "Electrons carry negative electric charge."
        },

        {
            id: 23,
            topic: "Atomic Structure",
            question:
                "Which particle has a positive charge?",
            options: [
                "Proton",
                "Electron",
                "Neutron",
                "Atom"
            ],
            answer: 0,
            explanation:
                "Protons carry positive electric charge."
        },

        {
            id: 24,
            topic: "Atomic Structure",
            question:
                "Which subatomic particle has no electrical charge?",
            options: [
                "Proton",
                "Electron",
                "Neutron",
                "Ion"
            ],
            answer: 2,
            explanation:
                "Neutrons have zero electrical charge."
        },

        {
            id: 25,
            topic: "Atomic Structure",
            question:
                "Most of the mass of an atom is concentrated in the:",
            options: [
                "Electron cloud",
                "Nucleus",
                "Valence shell",
                "Orbital"
            ],
            answer: 1,
            explanation:
                "The nucleus contains protons and neutrons."
        },


        /* PERIODIC TABLE */

        {
            id: 41,
            topic: "Periodic Table",
            question:
                "The modern periodic table is arranged according to increasing:",
            options: [
                "Mass number",
                "Atomic number",
                "Number of neutrons",
                "Density"
            ],
            answer: 1,
            explanation:
                "Modern periodic law arranges elements by increasing atomic number."
        },

        {
            id: 42,
            topic: "Periodic Table",
            question:
                "The horizontal rows in the periodic table are called:",
            options: [
                "Groups",
                "Periods",
                "Families",
                "Blocks"
            ],
            answer: 1,
            explanation:
                "Horizontal rows are periods."
        },

        {
            id: 43,
            topic: "Periodic Table",
            question:
                "The vertical columns in the periodic table are called:",
            options: [
                "Periods",
                "Groups",
                "Rows",
                "Series"
            ],
            answer: 1,
            explanation:
                "Vertical columns are groups."
        },

        {
            id: 44,
            topic: "Periodic Table",
            question:
                "Elements in the same group generally have similar:",
            options: [
                "Mass numbers",
                "Chemical properties",
                "Atomic masses",
                "Number of shells"
            ],
            answer: 1,
            explanation:
                "Elements in the same group have similar valence-electron arrangements."
        },

        {
            id: 45,
            topic: "Periodic Table",
            question:
                "Group 1 elements are known as:",
            options: [
                "Halogens",
                "Noble gases",
                "Alkali metals",
                "Transition metals"
            ],
            answer: 2,
            explanation:
                "Group 1 contains the alkali metals."
        },


        /* ELECTRONIC CONFIGURATION */

        {
            id: 61,
            topic: "Electronic Configuration",
            question:
                "What is the maximum number of electrons that can occupy an s orbital?",
            options: [
                "1",
                "2",
                "6",
                "10"
            ],
            answer: 1,
            explanation:
                "An s orbital can contain a maximum of two electrons."
        },

        {
            id: 62,
            topic: "Electronic Configuration",
            question:
                "What is the maximum number of electrons in a p subshell?",
            options: [
                "2",
                "6",
                "8",
                "10"
            ],
            answer: 1,
            explanation:
                "A p subshell contains three orbitals, each holding two electrons."
        },

        {
            id: 63,
            topic: "Electronic Configuration",
            question:
                "What is the maximum number of electrons in a d subshell?",
            options: [
                "2",
                "6",
                "10",
                "14"
            ],
            answer: 2,
            explanation:
                "A d subshell has five orbitals, giving a maximum of 10 electrons."
        },

        {
            id: 64,
            topic: "Electronic Configuration",
            question:
                "What is the maximum number of electrons in an f subshell?",
            options: [
                "6",
                "10",
                "12",
                "14"
            ],
            answer: 3,
            explanation:
                "An f subshell contains seven orbitals and can hold 14 electrons."
        },


        /* BONDING */

        {
            id: 81,
            topic: "Chemical Bonding",
            question:
                "A chemical bond is a force that holds:",
            options: [
                "Atoms or ions together",
                "Only neutrons",
                "Only electrons",
                "Only gases"
            ],
            answer: 0,
            explanation:
                "Chemical bonds hold atoms or ions together."
        },

        {
            id: 82,
            topic: "Chemical Bonding",
            question:
                "An ionic bond involves:",
            options: [
                "Sharing of electrons",
                "Transfer of electrons",
                "Sharing of protons",
                "Transfer of neutrons"
            ],
            answer: 1,
            explanation:
                "Ionic bonding results from electron transfer."
        },

        {
            id: 83,
            topic: "Chemical Bonding",
            question:
                "A covalent bond involves:",
            options: [
                "Sharing of electrons",
                "Transfer of protons",
                "Loss of neutrons",
                "Transfer of nuclei"
            ],
            answer: 0,
            explanation:
                "Covalent bonds are formed by sharing electron pairs."
        },

        {
            id: 84,
            topic: "Chemical Bonding",
            question:
                "Metallic bonding occurs primarily between:",
            options: [
                "Metals",
                "Non-metals",
                "Noble gases",
                "Acids"
            ],
            answer: 0,
            explanation:
                "Metallic bonding is characteristic of metals."
        },


        /* THERMOCHEMISTRY */

        {
            id: 106,
            topic: "Thermochemistry",
            question:
                "Thermochemistry deals mainly with:",
            options: [
                "Heat changes in chemical reactions",
                "Atomic numbers only",
                "Electron shells only",
                "Crystal shapes only"
            ],
            answer: 0,
            explanation:
                "Thermochemistry studies heat and energy changes associated with reactions."
        },

        {
            id: 107,
            topic: "Thermochemistry",
            question:
                "The symbol commonly used for enthalpy is:",
            options: [
                "E",
                "H",
                "S",
                "G"
            ],
            answer: 1,
            explanation:
                "Enthalpy is represented by H."
        },

        {
            id: 108,
            topic: "Thermochemistry",
            question:
                "The symbol for change in enthalpy is:",
            options: [
                "ΔH",
                "ΔS",
                "ΔG",
                "ΔU"
            ],
            answer: 0,
            explanation:
                "Change in enthalpy is represented as ΔH."
        },

        {
            id: 109,
            topic: "Thermochemistry",
            question:
                "For an exothermic reaction, ΔH is:",
            options: [
                "Positive",
                "Negative",
                "Zero",
                "Infinite"
            ],
            answer: 1,
            explanation:
                "Exothermic reactions release heat, so ΔH is negative."
        },

        {
            id: 110,
            topic: "Thermochemistry",
            question:
                "For an endothermic reaction, ΔH is:",
            options: [
                "Positive",
                "Negative",
                "Always zero",
                "Undefined"
            ],
            answer: 0,
            explanation:
                "Endothermic reactions absorb heat, so ΔH is positive."
        },


        /* THERMODYNAMICS */

        {
            id: 131,
            topic: "Thermodynamics",
            question:
                "The part of the universe being studied is called the:",
            options: [
                "System",
                "Surroundings",
                "Environment",
                "Boundary"
            ],
            answer: 0,
            explanation:
                "The system is the portion being studied."
        },

        {
            id: 132,
            topic: "Thermodynamics",
            question:
                "Everything outside the system is called the:",
            options: [
                "Boundary",
                "Surroundings",
                "Pressure",
                "Volume"
            ],
            answer: 1,
            explanation:
                "The surroundings are everything outside the system."
        },

        {
            id: 133,
            topic: "Thermodynamics",
            question:
                "An open system can exchange:",
            options: [
                "Matter and energy",
                "Energy only",
                "Matter only",
                "Neither matter nor energy"
            ],
            answer: 0,
            explanation:
                "An open system exchanges both matter and energy."
        },

        {
            id: 134,
            topic: "Thermodynamics",
            question:
                "A closed system can exchange:",
            options: [
                "Matter only",
                "Energy but not matter",
                "Neither",
                "Matter and energy"
            ],
            answer: 1,
            explanation:
                "A closed system exchanges energy but not matter."
        },

        {
            id: 135,
            topic: "Thermodynamics",
            question:
                "An isolated system exchanges:",
            options: [
                "Matter only",
                "Energy only",
                "Neither matter nor energy",
                "Both matter and energy"
            ],
            answer: 2,
            explanation:
                "An isolated system exchanges neither matter nor energy."
        },


        /* MIXED CHEMISTRY */

        {
            id: 151,
            topic: "Mixed Chemistry",
            question:
                "An atom has 13 protons and 14 neutrons. What is its mass number?",
            options: [
                "13",
                "14",
                "27",
                "28"
            ],
            answer: 2,
            explanation:
                "Mass number = protons + neutrons = 13 + 14 = 27."
        },

        {
            id: 152,
            topic: "Mixed Chemistry",
            question:
                "An atom has 17 protons and 18 electrons. What is its charge?",
            options: [
                "+1",
                "−1",
                "+2",
                "0"
            ],
            answer: 1,
            explanation:
                "There is one more electron than proton, giving a charge of −1."
        },

        {
            id: 153,
            topic: "Mixed Chemistry",
            question:
                "Which statement about Na⁺, Ne, F⁻ and Mg²⁺ is correct?",
            options: [
                "Na⁺ has the most electrons",
                "Ne has the most electrons",
                "They all have 10 electrons",
                "Mg²⁺ has the most electrons"
            ],
            answer: 2,
            explanation:
                "Na⁺, Ne, F⁻ and Mg²⁺ are all isoelectronic with 10 electrons."
        },

        {
            id: 154,
            topic: "Atomic Structure",
            question:
                "C-12 and C-14 are:",
            options: [
                "Isotopes",
                "Isobars",
                "Ions",
                "Isomers"
            ],
            answer: 0,
            explanation:
                "They are isotopes because they are carbon atoms with different numbers of neutrons."
        },

        {
            id: 155,
            topic: "Electronic Configuration",
            question:
                "Which element has the electron configuration 2,8,1?",
            options: [
                "Mg",
                "Na",
                "Ne",
                "Cl"
            ],
            answer: 1,
            explanation:
                "2 + 8 + 1 = 11 electrons, corresponding to sodium."
        }

    ],



    /* ======================================================
       PHYSICS
    ====================================================== */

    PHY101: [

        {
            id: 1,
            topic: "Units and Dimensions",
            question:
                "What is the SI unit of length?",
            options: [
                "Centimetre",
                "Metre",
                "Kilometre",
                "Millimetre"
            ],
            answer: 1,
            explanation:
                "The SI base unit of length is the metre (m)."
        },

        {
            id: 2,
            topic: "Units and Dimensions",
            question:
                "What is the SI unit of mass?",
            options: [
                "Gram",
                "Kilogram",
                "Pound",
                "Newton"
            ],
            answer: 1,
            explanation:
                "The SI base unit of mass is the kilogram."
        },

        {
            id: 3,
            topic: "Units and Dimensions",
            question:
                "What is the SI unit of time?",
            options: [
                "Minute",
                "Hour",
                "Second",
                "Day"
            ],
            answer: 2,
            explanation:
                "The SI base unit of time is the second."
        },

        {
            id: 4,
            topic: "Units and Dimensions",
            question:
                "What is the dimension of velocity?",
            options: [
                "[L]",
                "[LT⁻¹]",
                "[LT⁻²]",
                "[MLT⁻¹]"
            ],
            answer: 1,
            explanation:
                "Velocity = displacement/time, so its dimension is [LT⁻¹]."
        },

        {
            id: 5,
            topic: "Units and Dimensions",
            question:
                "What is the dimension of acceleration?",
            options: [
                "[L]",
                "[LT⁻¹]",
                "[LT⁻²]",
                "[MLT⁻²]"
            ],
            answer: 2,
            explanation:
                "Acceleration is change of velocity per unit time."
        },


        /* MEASUREMENTS */

        {
            id: 21,
            topic: "Measurements",
            question:
                "Which instrument is commonly used to measure length accurately?",
            options: [
                "Thermometer",
                "Metre rule",
                "Ammeter",
                "Barometer"
            ],
            answer: 1,
            explanation:
                "A metre rule is used for ordinary length measurements."
        },

        {
            id: 22,
            topic: "Measurements",
            question:
                "Which instrument is used to measure very small external dimensions accurately?",
            options: [
                "Vernier caliper",
                "Stopwatch",
                "Thermometer",
                "Ammeter"
            ],
            answer: 0,
            explanation:
                "A vernier caliper measures dimensions more precisely than an ordinary ruler."
        },


        /* VELOCITY */

        {
            id: 31,
            topic: "Velocity",
            question:
                "Speed is defined as:",
            options: [
                "Distance divided by time",
                "Displacement divided by time",
                "Force divided by mass",
                "Change in velocity"
            ],
            answer: 0,
            explanation:
                "Speed = distance/time."
        },

        {
            id: 32,
            topic: "Velocity",
            question:
                "Velocity is:",
            options: [
                "Distance per unit time",
                "Displacement per unit time",
                "Mass per unit time",
                "Force per unit distance"
            ],
            answer: 1,
            explanation:
                "Velocity is displacement per unit time."
        },

        {
            id: 33,
            topic: "Velocity",
            question:
                "A car travels 100 m in 20 s. What is its average speed?",
            options: [
                "2 m/s",
                "5 m/s",
                "20 m/s",
                "2000 m/s"
            ],
            answer: 1,
            explanation:
                "Speed = 100/20 = 5 m/s."
        },


        /* ACCELERATION */

        {
            id: 46,
            topic: "Acceleration",
            question:
                "Acceleration is the rate of change of:",
            options: [
                "Distance",
                "Velocity",
                "Mass",
                "Force"
            ],
            answer: 1,
            explanation:
                "Acceleration is the rate of change of velocity."
        },

        {
            id: 47,
            topic: "Acceleration",
            question:
                "What is the SI unit of acceleration?",
            options: [
                "m/s",
                "m/s²",
                "N/s",
                "kg/m"
            ],
            answer: 1,
            explanation:
                "Acceleration is measured in metres per second squared."
        },

        {
            id: 49,
            topic: "Equations of Motion",
            question:
                "Which equation is one of the basic equations of uniformly accelerated motion?",
            options: [
                "v = u + at",
                "F = mv",
                "P = VI",
                "W = mg"
            ],
            answer: 0,
            explanation:
                "v = u + at is one of the equations of motion."
        },

        {
            id: 50,
            topic: "Equations of Motion",
            question:
                "Which equation gives displacement for uniform acceleration?",
            options: [
                "s = ut + ½at²",
                "s = vt",
                "s = ma",
                "s = F/t"
            ],
            answer: 0,
            explanation:
                "For constant acceleration, s = ut + ½at²."
        },


        /* GRAVITY */

        {
            id: 61,
            topic: "Gravity",
            question:
                "The acceleration produced by gravity near the Earth's surface is approximately:",
            options: [
                "1.8 m/s²",
                "9.8 m/s²",
                "98 m/s²",
                "0.98 m/s²"
            ],
            answer: 1,
            explanation:
                "The standard approximate value of g is 9.8 m/s²."
        },

        {
            id: 62,
            topic: "Gravity",
            question:
                "The force acting on a body due to gravity is called:",
            options: [
                "Mass",
                "Weight",
                "Momentum",
                "Inertia"
            ],
            answer: 1,
            explanation:
                "Weight is the gravitational force acting on a body."
        },

        {
            id: 63,
            topic: "Gravity",
            question:
                "The formula for weight is:",
            options: [
                "W = mg",
                "W = ma",
                "W = mv",
                "W = m/g"
            ],
            answer: 0,
            explanation:
                "Weight W = mg."
        },


        /* NEWTON */

        {
            id: 71,
            topic: "Newton's Laws",
            question:
                "Newton's first law is also known as the law of:",
            options: [
                "Momentum",
                "Inertia",
                "Acceleration",
                "Gravitation"
            ],
            answer: 1,
            explanation:
                "Newton's first law is commonly called the law of inertia."
        },

        {
            id: 72,
            topic: "Newton's Laws",
            question:
                "Newton's second law relates force to:",
            options: [
                "Mass and acceleration",
                "Mass and volume",
                "Distance and time",
                "Energy and power"
            ],
            answer: 0,
            explanation:
                "Newton's second law gives F = ma."
        },

        {
            id: 73,
            topic: "Newton's Laws",
            question:
                "Newton's third law states that for every action there is:",
            options: [
                "No reaction",
                "An equal and opposite reaction",
                "A smaller reaction",
                "A larger reaction"
            ],
            answer: 1,
            explanation:
                "Action and reaction forces are equal in magnitude and opposite in direction."
        },

        {
            id: 77,
            topic: "Newton's Laws",
            question:
                "A force of 20 N acts on a mass of 5 kg. What is the acceleration?",
            options: [
                "2 m/s²",
                "4 m/s²",
                "5 m/s²",
                "10 m/s²"
            ],
            answer: 1,
            explanation:
                "a = F/m = 20/5 = 4 m/s²."
        },


        /* MASS AND WEIGHT */

        {
            id: 86,
            topic: "Mass and Weight",
            question:
                "Mass is a measure of the:",
            options: [
                "Amount of matter in a body",
                "Gravitational force only",
                "Speed of a body",
                "Acceleration of a body"
            ],
            answer: 0,
            explanation:
                "Mass measures the amount of matter in a body."
        },

        {
            id: 87,
            topic: "Mass and Weight",
            question:
                "Which quantity is measured in newtons?",
            options: [
                "Mass",
                "Weight",
                "Time",
                "Length"
            ],
            answer: 1,
            explanation:
                "Weight is a force, and force is measured in newtons."
        },


        /* MOMENTUM */

        {
            id: 96,
            topic: "Momentum",
            question:
                "Linear momentum is defined as:",
            options: [
                "Mass × velocity",
                "Mass × acceleration",
                "Force × distance",
                "Mass ÷ velocity"
            ],
            answer: 0,
            explanation:
                "Momentum p = mv."
        },

        {
            id: 97,
            topic: "Momentum",
            question:
                "What is the SI unit of linear momentum?",
            options: [
                "N",
                "kg m/s",
                "J",
                "W"
            ],
            answer: 1,
            explanation:
                "Momentum has SI unit kg m/s."
        },

        {
            id: 101,
            topic: "Conservation of Linear Momentum",
            question:
                "The law of conservation of linear momentum states that total momentum remains constant when:",
            options: [
                "There is no external resultant force",
                "There is always friction",
                "Mass is increasing",
                "Velocity is zero"
            ],
            answer: 0,
            explanation:
                "Momentum is conserved in an isolated system with no external resultant force."
        },

        {
            id: 109,
            topic: "Conservation of Linear Momentum",
            question:
                "A 2 kg object moving at 5 m/s collides with a stationary 3 kg object and they stick together. What is their common velocity?",
            options: [
                "1 m/s",
                "2 m/s",
                "3 m/s",
                "5 m/s"
            ],
            answer: 1,
            explanation:
                "Initial momentum = 2×5 = 10 kg m/s. Total mass = 5 kg. v = 10/5 = 2 m/s."
        },


        /* COORDINATE SYSTEM */

        {
            id: 111,
            topic: "Coordinate System",
            question:
                "A vector can be resolved into:",
            options: [
                "Only one component",
                "Two or more components",
                "No components",
                "Only scalar quantities"
            ],
            answer: 1,
            explanation:
                "A vector can be resolved into components along chosen axes."
        },

        {
            id: 121,
            topic: "Coordinate System",
            question:
                "What is the magnitude of vector 3i + 4j?",
            options: [
                "3",
                "4",
                "5",
                "7"
            ],
            answer: 2,
            explanation:
                "Magnitude = √(3²+4²) = 5."
        },


        /* CIRCULAR MOTION */

        {
            id: 126,
            topic: "Circular Motion",
            question:
                "Motion in which an object moves along a circular path is called:",
            options: [
                "Linear motion",
                "Circular motion",
                "Random motion",
                "Oscillatory motion"
            ],
            answer: 1,
            explanation:
                "An object moving around a circular path undergoes circular motion."
        },

        {
            id: 127,
            topic: "Circular Motion",
            question:
                "The time taken to complete one revolution is called:",
            options: [
                "Frequency",
                "Period",
                "Velocity",
                "Angular speed"
            ],
            answer: 1,
            explanation:
                "The period is the time for one complete revolution."
        },

        {
            id: 137,
            topic: "Circular Motion",
            question:
                "The relationship between period T and frequency f is:",
            options: [
                "T = f",
                "T = 1/f",
                "T = f²",
                "T = 2f"
            ],
            answer: 1,
            explanation:
                "Frequency is the reciprocal of period."
        },


        /* CENTRIPETAL FORCE */

        {
            id: 141,
            topic: "Centripetal and Centrifugal Force",
            question:
                "Centripetal force is directed:",
            options: [
                "Away from the centre",
                "Toward the centre",
                "Upward only",
                "Downward only"
            ],
            answer: 1,
            explanation:
                "Centripetal force always acts toward the centre of circular motion."
        },

        {
            id: 144,
            topic: "Centripetal and Centrifugal Force",
            question:
                "The magnitude of centripetal force is:",
            options: [
                "mv/r",
                "mv²/r",
                "mr/v²",
                "mvr"
            ],
            answer: 1,
            explanation:
                "Fc = mv²/r."
        },


        /* ANGULAR MOMENTUM */

        {
            id: 151,
            topic: "Angular Momentum",
            question:
                "What is the SI unit of angular momentum?",
            options: [
                "kg m/s",
                "kg m²/s",
                "N/m",
                "J/s"
            ],
            answer: 1,
            explanation:
                "Angular momentum has SI unit kg m²/s."
        },

        {
            id: 152,
            topic: "Angular Momentum",
            question:
                "Angular momentum is represented by:",
            options: [
                "L",
                "F",
                "P",
                "W"
            ],
            answer: 0,
            explanation:
                "Angular momentum is commonly represented by L."
        },


        /* TORQUE */

        {
            id: 161,
            topic: "Torque and Angular Momentum",
            question:
                "Torque is the rate of change of:",
            options: [
                "Linear momentum",
                "Angular momentum",
                "Mass",
                "Energy"
            ],
            answer: 1,
            explanation:
                "Torque τ = dL/dt."
        },

        {
            id: 162,
            topic: "Torque and Angular Momentum",
            question:
                "The rotational equivalent of F = ma is:",
            options: [
                "τ = Iα",
                "τ = mv",
                "τ = ma",
                "τ = mg"
            ],
            answer: 0,
            explanation:
                "For rotational motion, τ = Iα."
        },


        /* ROTATIONAL MOTION */

        {
            id: 171,
            topic: "Rotational Motion",
            question:
                "Moment of inertia is the rotational equivalent of:",
            options: [
                "Mass",
                "Velocity",
                "Force",
                "Energy"
            ],
            answer: 0,
            explanation:
                "Moment of inertia plays a role in rotational motion similar to mass in linear motion."
        },

        {
            id: 196,
            topic: "Rotational Motion",
            question:
                "A point mass of 2 kg is located 3 m from an axis. What is its moment of inertia?",
            options: [
                "6 kg m²",
                "9 kg m²",
                "18 kg m²",
                "36 kg m²"
            ],
            answer: 2,
            explanation:
                "I = mr² = 2 × 3² = 18 kg m²."
        },

        {
            id: 198,
            topic: "Rotational Motion",
            question:
                "If I = 2 kg m² and angular velocity is 3 rad/s, what is the rotational kinetic energy?",
            options: [
                "3 J",
                "6 J",
                "9 J",
                "18 J"
            ],
            answer: 2,
            explanation:
                "KE = ½Iω² = ½×2×9 = 9 J."
        },

        {
            id: 200,
            topic: "Angular Momentum",
            question:
                "The angular momentum of a planet orbiting the Sun is conserved because:",
            options: [
                "Gravity produces no torque about the Sun",
                "The planet has no mass",
                "The planet does not move",
                "There is no gravitational force"
            ],
            answer: 0,
            explanation:
                "The gravitational force is central, so its torque about the Sun is zero."
        }

    ]

};


/* ==========================================================
   APPLICATION STATE
========================================================== */

const state = {

    course: "MTH101",

    topic: "all",

    mode: "practice",

    questions: [],

    currentIndex: 0,

    answers: [],

    timeLeft: 0,

    timerId: null,

    submitted: false,

    results: null

};


/* ==========================================================
   COURSE NAMES
========================================================== */

const courseNames = {

    MTH101: "MTH 101",

    PHY101: "PHY 101",

    CHEM101: "CHEM 101"

};


/* ==========================================================
   DOM ELEMENTS
========================================================== */

const homeScreen =
    document.getElementById("homeScreen");

const setupScreen =
    document.getElementById("setupScreen");

const quizScreen =
    document.getElementById("quizScreen");

const resultScreen =
    document.getElementById("resultScreen");

const reviewScreen =
    document.getElementById("reviewScreen");


const topicSelect =
    document.getElementById("topicSelect");

const questionCount =
    document.getElementById("questionCount");

const timeSelect =
    document.getElementById("timeSelect");

const availableQuestions =
    document.getElementById("availableQuestions");


const questionText =
    document.getElementById("questionText");

const optionsContainer =
    document.getElementById("optionsContainer");

const questionNumber =
    document.getElementById("questionNumber");

const answeredCount =
    document.getElementById("answeredCount");

const progressFill =
    document.getElementById("progressFill");

const questionMap =
    document.getElementById("questionMap");

const timer =
    document.getElementById("timer");


/* ==========================================================
   SCREEN NAVIGATION
========================================================== */

function showScreen(screen) {

    document
        .querySelectorAll(".screen")
        .forEach(s => {

            s.classList.remove("active");

        });

    screen.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ==========================================================
   HOME
========================================================== */

document
    .getElementById("startBtn")
    .addEventListener("click", () => {

        openSetup("MTH101");

    });


document
    .querySelectorAll(".course-card")
    .forEach(card => {

        card.addEventListener("click", () => {

            openSetup(
                card.dataset.course
            );

        });

    });


document
    .getElementById("homeBtn")
    .addEventListener("click", goHome);


document
    .getElementById("resultHomeBtn")
    .addEventListener("click", goHome);


function goHome() {

    stopTimer();

    showScreen(homeScreen);

    renderBestScores();

}


/* ==========================================================
   SETUP
========================================================== */

function openSetup(course) {

    state.course = course;

    document
        .getElementById("setupCourseBadge")
        .textContent =
        courseNames[course];

    populateTopics();

    updateAvailableQuestions();

    showScreen(setupScreen);

}


document
    .getElementById("backHomeBtn")
    .addEventListener("click", goHome);


topicSelect.addEventListener(
    "change",
    updateAvailableQuestions
);


questionCount.addEventListener(
    "change",
    validateQuestionCount
);


document
    .querySelectorAll(".mode-card")
    .forEach(button => {

        button.addEventListener("click", () => {

            document
                .querySelectorAll(".mode-card")
                .forEach(b =>
                    b.classList.remove("active")
                );

            button.classList.add("active");

            state.mode =
                button.dataset.mode;

            const isExam =
                state.mode === "exam";

            timeSelect.disabled = !isExam;

        });

    });


function populateTopics() {

    const questions =
        questionBank[state.course] || [];

    const topics =
        [...new Set(
            questions.map(q => q.topic)
        )];

    topicSelect.innerHTML = "";

    const allOption =
        document.createElement("option");

    allOption.value = "all";

    allOption.textContent =
        "General — All Topics";

    topicSelect.appendChild(
        allOption
    );


    topics.forEach(topic => {

        const option =
            document.createElement("option");

        option.value = topic;

        option.textContent = topic;

        topicSelect.appendChild(
            option
        );

    });

}


function getFilteredQuestions() {

    const questions =
        questionBank[state.course] || [];

    const topic =
        topicSelect.value;

    if (topic === "all") {

        return [...questions];

    }

    return questions.filter(
        q => q.topic === topic
    );

}


function updateAvailableQuestions() {

    const filtered =
        getFilteredQuestions();

    availableQuestions.textContent =
        `Available: ${filtered.length}`;

    validateQuestionCount();

}


function validateQuestionCount() {

    const available =
        getFilteredQuestions().length;

    const options =
        [...questionCount.options];

    options.forEach(option => {

        option.disabled =
            Number(option.value) > available;

    });

    const current =
        Number(questionCount.value);

    if (current > available) {

        const valid =
            options.find(
                option =>
                    !option.disabled
            );

        if (valid) {

            questionCount.value =
                valid.value;

        }

    }

}


/* ==========================================================
   BEGIN TEST
========================================================== */

document
    .getElementById("beginTestBtn")
    .addEventListener(
        "click",
        beginTest
    );


function beginTest() {

    const available =
        getFilteredQuestions();

    const requested =
        Number(questionCount.value);

    if (!available.length) {

        alert(
            "There are no questions available for this selection."
        );

        return;
    }


    const count =
        Math.min(
            requested,
            available.length
        );


    const shuffled =
        shuffle([...available])
            .slice(0, count);


    state.topic =
        topicSelect.value;

    state.questions =
        shuffled;

    state.answers =
        new Array(count).fill(null);

    state.currentIndex = 0;

    state.submitted = false;

    state.results = null;


    document
        .getElementById("quizCourse")
        .textContent =
        courseNames[state.course];


    document
        .getElementById("quizTopic")
        .textContent =
        state.topic === "all"
            ? "General Test"
            : state.topic;


    if (state.mode === "exam") {

        state.timeLeft =
            Number(timeSelect.value) * 60;

        startTimer();

        document
            .getElementById("timerBox")
            .style.display = "flex";

    } else {

        stopTimer();

        document
            .getElementById("timerBox")
            .style.display = "none";

    }


    renderQuestionMap();

    renderQuestion();

    showScreen(quizScreen);

}


/* ==========================================================
   SHUFFLE
========================================================== */

function shuffle(array) {

    for (
        let i = array.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );

        [
            array[i],
            array[j]
        ] =
        [
            array[j],
            array[i]
        ];

    }

    return array;

}


/* ==========================================================
   RENDER QUESTION
========================================================== */

function renderQuestion() {

    const question =
        state.questions[
            state.currentIndex
        ];

    if (!question) return;


    questionNumber.textContent =
        `Question ${
            state.currentIndex + 1
        } of ${
            state.questions.length
        }`;


    const answered =
        state.answers.filter(
            answer => answer !== null
        ).length;


    answeredCount.textContent =
        `${answered} answered`;


    const percentage =
        (
            (state.currentIndex + 1) /
            state.questions.length
        ) * 100;


    progressFill.style.width =
        `${percentage}%`;


    questionText.textContent =
        question.question;


    optionsContainer.innerHTML = "";


    const letters =
        ["A", "B", "C", "D"];


    question.options.forEach(
        (optionText, index) => {

            const button =
                document.createElement("button");

            button.className =
                "option";


            if (
                state.answers[
                    state.currentIndex
                ] === index
            ) {

                button.classList.add(
                    "selected"
                );

            }


            const letter =
                document.createElement("span");

            letter.className =
                "option-letter";

            letter.textContent =
                letters[index];


            const text =
                document.createElement("span");

            text.textContent =
                optionText;


            button.appendChild(letter);

            button.appendChild(text);


            button.addEventListener(
                "click",
                () =>
                    selectAnswer(index)
            );


            optionsContainer.appendChild(
                button
            );

        }
    );


    document
        .getElementById("practiceExplanation")
        .classList.add("hidden");


    document
        .getElementById("prevBtn")
        .disabled =
        state.currentIndex === 0;


    document
        .getElementById("nextBtn")
        .textContent =
        state.currentIndex ===
        state.questions.length - 1
            ? "Finish →"
            : "Next →";


    updateQuestionMap();

}


/* ==========================================================
   SELECT ANSWER
========================================================== */

function selectAnswer(index) {

    if (state.submitted) return;

    state.answers[
        state.currentIndex
    ] = index;


    renderQuestion();


    if (state.mode === "practice") {

        showPracticeFeedback();

    }

}


/* ==========================================================
   PRACTICE FEEDBACK
========================================================== */

function showPracticeFeedback() {

    const question =
        state.questions[
            state.currentIndex
        ];

    const selected =
        state.answers[
            state.currentIndex
        ];


    if (selected === null) return;


    const options =
        document.querySelectorAll(
            ".option"
        );


    options.forEach(
        (option, index) => {

            if (
                index === question.answer
            ) {

                option.classList.add(
                    "correct"
                );

            }

            if (
                index === selected &&
                selected !== question.answer
            ) {

                option.classList.add(
                    "wrong"
                );

            }

        }
    );


    const explanation =
        document.getElementById(
            "practiceExplanation"
        );

    const explanationText =
        document.getElementById(
            "explanationText"
        );


    explanationText.textContent =
        question.explanation ||
        "Review the correct answer and try again.";


    explanation.classList.remove(
        "hidden"
    );

}


/* ==========================================================
   NEXT
========================================================== */

document
    .getElementById("nextBtn")
    .addEventListener(
        "click",
        nextQuestion
    );


function nextQuestion() {

    if (
        state.currentIndex <
        state.questions.length - 1
    ) {

        state.currentIndex++;

        renderQuestion();

    } else {

        askSubmit();

    }

}


/* ==========================================================
   PREVIOUS
========================================================== */

document
    .getElementById("prevBtn")
    .addEventListener(
        "click",
        previousQuestion
    );


function previousQuestion() {

    if (
        state.currentIndex > 0
    ) {

        state.currentIndex--;

        renderQuestion();

    }

}


/* ==========================================================
   QUESTION MAP
========================================================== */

function renderQuestionMap() {

    questionMap.innerHTML = "";


    state.questions.forEach(
        (_, index) => {

            const button =
                document.createElement("button");

            button.className =
                "map-btn";

            button.textContent =
                index + 1;


            button.addEventListener(
                "click",
                () => {

                    state.currentIndex =
                        index;

                    renderQuestion();

                }
            );


            questionMap.appendChild(
                button
            );

        }
    );


    updateQuestionMap();

}


function updateQuestionMap() {

    const buttons =
        document.querySelectorAll(
            ".map-btn"
        );


    buttons.forEach(
        (button, index) => {

            button.classList.remove(
                "current",
                "answered"
            );


            if (
                index ===
                state.currentIndex
            ) {

                button.classList.add(
                    "current"
                );

            }


            if (
                state.answers[index] !==
                null
            ) {

                button.classList.add(
                    "answered"
                );

            }

        }
    );

}


/* ==========================================================
   SUBMIT
========================================================== */

document
    .getElementById("submitBtn")
    .addEventListener(
        "click",
        askSubmit
    );


function askSubmit() {

    if (state.submitted) return;


    document
        .getElementById("confirmModal")
        .classList.remove("hidden");

}


document
    .getElementById("cancelSubmit")
    .addEventListener(
        "click",
        () => {

            document
                .getElementById("confirmModal")
                .classList.add("hidden");

        }
    );


document
    .getElementById("confirmSubmit")
    .addEventListener(
        "click",
        submitTest
    );


function submitTest() {

    if (state.submitted) return;


    state.submitted = true;

    stopTimer();


    document
        .getElementById("confirmModal")
        .classList.add("hidden");


    calculateResults();

}


/* ==========================================================
   RESULTS
========================================================== */

function calculateResults() {

    let correct = 0;

    let wrong = 0;

    let unanswered = 0;


    state.questions.forEach(
        (question, index) => {

            const selected =
                state.answers[index];


            if (selected === null) {

                unanswered++;

            } else if (
                selected === question.answer
            ) {

                correct++;

            } else {

                wrong++;

            }

        }
    );


    const total =
        state.questions.length;


    const percentage =
        total === 0
            ? 0
            : Math.round(
                (correct / total) * 100
            );


    const grade =
        calculateGrade(
            percentage
        );


    state.results = {

        correct,

        wrong,

        unanswered,

        total,

        percentage,

        grade

    };


    saveBestScore();


    document
        .getElementById("correctAnswers")
        .textContent =
        correct;


    document
        .getElementById("wrongAnswers")
        .textContent =
        wrong;


    document
        .getElementById("unansweredAnswers")
        .textContent =
        unanswered;


    document
        .getElementById("scorePercentage")
        .textContent =
        `${percentage}%`;


    document
        .getElementById("grade")
        .textContent =
        grade;


    document
        .getElementById("resultTitle")
        .textContent =
        getResultMessage(
            percentage
        );


    updateScoreCircle(
        percentage
    );


    showScreen(resultScreen);

}


function calculateGrade(score) {

    if (score >= 70) return "A";

    if (score >= 60) return "B";

    if (score >= 50) return "C";

    if (score >= 45) return "D";

    if (score >= 40) return "E";

    return "F";

}


function getResultMessage(score) {

    if (score >= 80)
        return "Outstanding! 🔥";

    if (score >= 70)
        return "Excellent Work! 🎉";

    if (score >= 60)
        return "Very Good! 👏";

    if (score >= 50)
        return "Good Job! 💪";

    if (score >= 40)
        return "Keep Practicing! 📚";

    return "Don't Give Up! 🚀";

}


function updateScoreCircle(score) {

    const circle =
        document.querySelector(
            ".score-circle"
        );


    const degrees =
        score * 3.6;


    circle.style.background =
        `conic-gradient(
            var(--primary)
            ${degrees}deg,
            #e5e7eb
            ${degrees}deg
        )`;

}


/* ==========================================================
   SAVE SCORES
========================================================== */

function saveBestScore() {

    if (!state.results) return;


    const key =
        `fuo_best_${state.course}`;


    const old =
        JSON.parse(
            localStorage.getItem(key)
        );


    if (
        !old ||
        state.results.percentage >
        old.percentage
    ) {

        localStorage.setItem(
            key,
            JSON.stringify({

                percentage:
                    state.results.percentage,

                grade:
                    state.results.grade,

                correct:
                    state.results.correct,

                total:
                    state.results.total,

                date:
                    new Date().toLocaleDateString()

            })
        );

    }

}


function renderBestScores() {

    const container =
        document.getElementById(
            "bestScores"
        );


    container.innerHTML = "";


    let hasScore = false;


    Object.keys(courseNames)
        .forEach(course => {

            const data =
                JSON.parse(
                    localStorage.getItem(
                        `fuo_best_${course}`
                    )
                );


            if (!data) return;


            hasScore = true;


            const card =
                document.createElement("div");

            card.className =
                "score-card";


            card.innerHTML = `

                <h4>
                    ${courseNames[course]}
                </h4>

                <div class="score-value">
                    ${data.percentage}%
                </div>

                <p>
                    Grade ${data.grade}
                    · ${data.correct}/${data.total}
                    correct
                </p>

                <small>
                    Best score
                </small>

            `;


            container.appendChild(card);

        });


    if (!hasScore) {

        container.innerHTML = `

            <div class="no-score">

                📚 You haven't completed a test yet.

                <br>

                Start your first drill to see
                your best score here.

            </div>

        `;

    }

}


/* ==========================================================
   REVIEW
========================================================== */

document
    .getElementById("reviewBtn")
    .addEventListener(
        "click",
        openReview
    );


function openReview() {

    renderReview();

    showScreen(reviewScreen);

}


function renderReview() {

    const container =
        document.getElementById(
            "reviewContainer"
        );


    container.innerHTML = "";


    state.questions.forEach(
        (question, index) => {

            const selected =
                state.answers[index];


            let className =
                "review-item";


            if (
                selected ===
                question.answer
            ) {

                className +=
                    " correct-review";

            } else if (
                selected === null
            ) {

                className +=
                    " unanswered-review";

            } else {

                className +=
                    " wrong-review";

            }


            const item =
                document.createElement("div");


            item.className =
                className;


            let optionsHTML = "";


            question.options.forEach(
                (option, optionIndex) => {

                    let optionClass =
                        "review-option";


                    if (
                        optionIndex ===
                        question.answer
                    ) {

                        optionClass +=
                            " correct-answer";

                    }


                    if (
                        optionIndex === selected &&
                        selected !==
                        question.answer
                    ) {

                        optionClass +=
                            " user-wrong";

                    }


                    const letter =
                        String.fromCharCode(
                            65 + optionIndex
                        );


                    optionsHTML += `

                        <div class="${optionClass}">

                            <strong>
                                ${letter}.
                            </strong>

                            ${escapeHTML(option)}

                            ${
                                optionIndex ===
                                question.answer
                                    ? " ✓ Correct Answer"
                                    : ""
                            }

                        </div>

                    `;

                }
            );


            item.innerHTML = `

                <div class="review-question">

                    ${index + 1}.
                    ${escapeHTML(
                        question.question
                    )}

                </div>

                ${optionsHTML}

                <div class="review-explanation">

                    <strong>
                        💡 Explanation:
                    </strong>

                    ${escapeHTML(
                        question.explanation ||
                        "No explanation provided."
                    )}

                </div>

            `;


            container.appendChild(item);

        }
    );

}


function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent =
        text;

    return div.innerHTML;

}


document
    .getElementById("reviewBackBtn")
    .addEventListener(
        "click",
        () => {

            showScreen(resultScreen);

        }
    );


/* ==========================================================
   RETAKE
========================================================== */

document
    .getElementById("retakeBtn")
    .addEventListener(
        "click",
        () => {

            beginTest();

        }
    );


/* ==========================================================
   TIMER
========================================================== */

function startTimer() {

    stopTimer();

    updateTimer();


    state.timerId =
        setInterval(
            () => {

                state.timeLeft--;

                updateTimer();


                if (
                    state.timeLeft <= 0
                ) {

                    stopTimer();

                    alert(
                        "Time is up! Your test will be submitted automatically."
                    );

                    submitTest();

                }

            },
            1000
        );

}


function stopTimer() {

    if (state.timerId) {

        clearInterval(
            state.timerId
        );

        state.timerId = null;

    }

}


function updateTimer() {

    const minutes =
        Math.floor(
            state.timeLeft / 60
        );


    const seconds =
        state.timeLeft % 60;


    timer.textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;


    const timerBox =
        document.getElementById(
            "timerBox"
        );


    if (
        state.timeLeft <= 60
    ) {

        timerBox.classList.add(
            "timer-warning"
        );

    } else {

        timerBox.classList.remove(
            "timer-warning"
        );

    }

}


/* ==========================================================
   DARK MODE
========================================================== */

document
    .getElementById("darkModeBtn")
    .addEventListener(
        "click",
        toggleDarkMode
    );


function toggleDarkMode() {

    document.body.classList.toggle(
        "dark"
    );


    const dark =
        document.body.classList.contains(
            "dark"
        );


    localStorage.setItem(
        "fuo_dark_mode",
        dark
            ? "true"
            : "false"
    );

}


function loadDarkMode() {

    const dark =
        localStorage.getItem(
            "fuo_dark_mode"
        );


    if (dark === "true") {

        document.body.classList.add(
            "dark"
        );

    }

}


/* ==========================================================
   INITIALIZE
========================================================== */

function initialize() {

    loadDarkMode();

    renderBestScores();

    timeSelect.disabled = true;

}


initialize();