const QUESTIONS = [

    { subject: 'Math', question: 'What is 9 x 9?', answers: ['81', '72', '99', '90'], correct: 0, difficulty: 'easy' },
    { subject: 'Math', question: 'What is 144 divided by 12?', answers: ['10', '12', '14', '16'], correct: 1, difficulty: 'easy' },
    { subject: 'Math', question: 'What is the next prime after 7?', answers: ['9', '11', '13', '17'], correct: 1, difficulty: 'easy' },
    { subject: 'Math', question: 'What is 2 to the power of 5?', answers: ['8', '16', '32', '64'], correct: 2, difficulty: 'medium' },
    { subject: 'Math', question: 'What is the value of cos(0°)?', answers: ['0', '1', '-1', '0.5'], correct: 1, difficulty: 'medium' },
    { subject: 'Math', question: 'What is the sum of the first 10 natural numbers?', answers: ['45', '50', '55', '60'], correct: 2, difficulty: 'medium' },
    { subject: 'Math', question: 'What is the value of e (Euler\'s number) to 2 decimal places?', answers: ['2.71', '3.14', '1.62', '2.17'], correct: 0, difficulty: 'medium' },
    { subject: 'Math', question: 'What is the solution to 3x = 12?', answers: ['2', '3', '4', '5'], correct: 2, difficulty: 'easy' },
    { subject: 'Math', question: 'What is the median of [3, 5, 7]?', answers: ['3', '5', '7', '6'], correct: 1, difficulty: 'easy' },
    { subject: 'Math', question: 'What is the mode of [2, 4, 4, 6, 8]?', answers: ['2', '4', '6', '8'], correct: 1, difficulty: 'easy' },
    { subject: 'Math', question: 'What is the mean of [2, 4, 6, 8, 10]?', answers: ['4', '6', '8', '10'], correct: 1, difficulty: 'easy' },
    { subject: 'Math', question: 'What is the value of tan(45°)?', answers: ['0', '1', '√3', '∞'], correct: 1, difficulty: 'medium' },
    { subject: 'Math', question: 'What is the sum of the interior angles of a pentagon?', answers: ['360°', '540°', '720°', '900°'], correct: 1, difficulty: 'medium' },
    { subject: 'Math', question: 'What is the hypotenuse of a right triangle with legs 3 and 4?', answers: ['5', '6', '7', '8'], correct: 0, difficulty: 'easy' },
    { subject: 'Math', question: 'What is the value of log10(100)?', answers: ['1', '2', '3', '4'], correct: 1, difficulty: 'easy' },
    { subject: 'Math', question: 'What is the value of 0 factorial (0!)?', answers: ['0', '1', 'Undefined', 'Infinity'], correct: 1, difficulty: 'medium' },
    { subject: 'Math', question: 'What is the area of a rectangle with length 8 and width 5?', answers: ['13', '30', '40', '45'], correct: 1, difficulty: 'easy' },
    { subject: 'Math', question: 'What is the perimeter of a square with side 6?', answers: ['12', '18', '24', '36'], correct: 2, difficulty: 'easy' },
    { subject: 'Math', question: 'What is the volume of a cube with side 4?', answers: ['16', '32', '48', '64'], correct: 3, difficulty: 'medium' },
    { subject: 'Math', question: 'What is the solution to x^2 = 49?', answers: ['7', '-7', '±7', '0'], correct: 2, difficulty: 'medium' },
    { subject: 'Math', question: 'What is 12 + 8?', answers: ['18', '20', '22', '24'], correct: 1, difficulty: 'easy' },
    { subject: 'Math', question: 'What is the square root of 64?', answers: ['6', '7', '8', '9'], correct: 2, difficulty: 'medium' },
    { subject: 'Math', question: 'What is 15 x 15?', answers: ['200', '225', '250', '275'], correct: 1, difficulty: 'hard' },
    { subject: 'Math', question: 'What is the derivative of x^2?', answers: ['x', '2x', 'x^2', '2x^2'], correct: 1, difficulty: 'medium' },
    { subject: 'Math', question: 'What is the integral of 1/x?', answers: ['ln(x)', 'x', '1/x', 'x^2'], correct: 0, difficulty: 'hard' },
    { subject: 'Math', question: 'What is 100 divided by 4?', answers: ['20', '25', '30', '40'], correct: 1, difficulty: 'easy' },
    { subject: 'Math', question: 'What is 7 x 8?', answers: ['54', '56', '58', '60'], correct: 1, difficulty: 'easy' },
    { subject: 'Math', question: 'What is the value of π (pi) to 2 decimal places?', answers: ['3.12', '3.14', '3.16', '3.18'], correct: 1, difficulty: 'medium' },
    { subject: 'Math', question: 'What is the factorial of 5?', answers: ['100', '120', '150', '180'], correct: 1, difficulty: 'hard' },
    { subject: 'Math', question: 'What is 25% of 200?', answers: ['25', '50', '75', '100'], correct: 1, difficulty: 'easy' },
    { subject: 'Math', question: 'What is the area of a circle with radius 7?', answers: ['154', '144', '164', '134'], correct: 0, difficulty: 'medium' },
    { subject: 'Math', question: 'What is the Pythagorean theorem?', answers: ['a^2 + b^2 = c^2', 'a + b = c', 'a^2 - b^2 = c^2', 'a^2 + b = c'], correct: 0, difficulty: 'hard' },
    { subject: 'Math', question: 'What is the cube root of 27?', answers: ['2', '3', '4', '5'], correct: 1, difficulty: 'medium' },
    { subject: 'Math', question: 'What is the sum of the angles in a triangle?', answers: ['90°', '180°', '270°', '360°'], correct: 1, difficulty: 'easy' },
    { subject: 'Math', question: 'Solve for x: 2x + 3 = 7.', answers: ['1', '2', '3', '4'], correct: 1, difficulty: 'medium' },
    { subject: 'Math', question: 'What is the square of 12?', answers: ['124', '144', '164', '184'], correct: 1, difficulty: 'medium' },
    { subject: 'Math', question: 'What is the value of sin(90°)?', answers: ['0', '1', '0.5', 'Undefined'], correct: 1, difficulty: 'medium' },
    { subject: 'Math', question: 'What is the derivative of sin(x)?', answers: ['cos(x)', '-cos(x)', 'sin(x)', '-sin(x)'], correct: 0, difficulty: 'hard' },
    { subject: 'Math', question: 'What is the logarithm of 1000 to base 10?', answers: ['1', '2', '3', '4'], correct: 2, difficulty: 'medium' },
    { subject: 'Math', question: 'What is the solution to x^2 - 4 = 0?', answers: ['2', '-2', '±2', '0'], correct: 2, difficulty: 'hard' },
    { subject: 'Math', question: 'What is 12 + 8?', answers: ['18', '20', '22', '24'], correct: 1, difficulty: 'easy' },
    { subject: 'Math', question: 'What is the square root of 64?', answers: ['6', '7', '8', '9'], correct: 2, difficulty: 'medium' },
    { subject: 'Math', question: 'What is 15 x 15?', answers: ['200', '225', '250', '275'], correct: 1, difficulty: 'hard' },
    { subject: 'Math', question: 'What is the derivative of x^2?', answers: ['x', '2x', 'x^2', '2x^2'], correct: 1, difficulty: 'medium' },
    { subject: 'Math', question: 'What is the integral of 1/x?', answers: ['ln(x)', 'x', '1/x', 'x^2'], correct: 0, difficulty: 'hard' },
    { subject: 'English', question: 'What is the synonym of "angry"?', answers: ['Happy', 'Furious', 'Calm', 'Joyful'], correct: 1, difficulty: 'easy' },
    { subject: 'English', question: 'What is the antonym of "difficult"?', answers: ['Hard', 'Easy', 'Tough', 'Complex'], correct: 1, difficulty: 'easy' },
    { subject: 'English', question: 'What is the plural of "goose"?', answers: ['Gooses', 'Geese', 'Goose', 'Geeses'], correct: 1, difficulty: 'medium' },
    { subject: 'English', question: 'What is the meaning of "ambiguous"?', answers: ['Clear', 'Uncertain', 'Simple', 'Direct'], correct: 1, difficulty: 'hard' },
    { subject: 'English', question: 'What is the synonym of "brave"?', answers: ['Cowardly', 'Timid', 'Courageous', 'Weak'], correct: 2, difficulty: 'easy' },
    { subject: 'English', question: 'What is the antonym of "increase"?', answers: ['Grow', 'Expand', 'Decrease', 'Rise'], correct: 2, difficulty: 'easy' },
    { subject: 'English', question: 'What is the plural of "analysis"?', answers: ['Analysises', 'Analyses', 'Analysis', 'Analysiseses'], correct: 1, difficulty: 'medium' },
    { subject: 'English', question: 'What is the meaning of "gregarious"?', answers: ['Shy', 'Sociable', 'Angry', 'Sad'], correct: 1, difficulty: 'hard' },
    { subject: 'English', question: 'What is the synonym of "tiny"?', answers: ['Huge', 'Small', 'Large', 'Gigantic'], correct: 1, difficulty: 'easy' },
    { subject: 'English', question: 'What is the antonym of "optimistic"?', answers: ['Hopeful', 'Positive', 'Pessimistic', 'Cheerful'], correct: 2, difficulty: 'medium' },
    { subject: 'English', question: 'What is the plural of "cactus"?', answers: ['Cactuses', 'Cacti', 'Cactis', 'Cactae'], correct: 1, difficulty: 'medium' },
    { subject: 'English', question: 'What is the meaning of "lucid"?', answers: ['Clear', 'Dark', 'Confusing', 'Dull'], correct: 0, difficulty: 'hard' },
    { subject: 'English', question: 'What is the synonym of "rapid"?', answers: ['Slow', 'Fast', 'Lazy', 'Calm'], correct: 1, difficulty: 'easy' },
    { subject: 'English', question: 'What is the antonym of "ancient"?', answers: ['Modern', 'Old', 'Historic', 'Timeless'], correct: 0, difficulty: 'medium' },
    { subject: 'English', question: 'What is the plural of "phenomenon"?', answers: ['Phenomenons', 'Phenomena', 'Phenomenas', 'Phenomenae'], correct: 1, difficulty: 'hard' },
    { subject: 'English', question: 'What is the meaning of "meticulous"?', answers: ['Careless', 'Thorough', 'Quick', 'Lazy'], correct: 1, difficulty: 'hard' },
    { subject: 'English', question: 'What is the synonym of "generous"?', answers: ['Stingy', 'Kind', 'Mean', 'Selfish'], correct: 1, difficulty: 'easy' },
    { subject: 'English', question: 'What is the antonym of "victory"?', answers: ['Defeat', 'Win', 'Success', 'Triumph'], correct: 0, difficulty: 'easy' },
    { subject: 'English', question: 'What is the plural of "crisis"?', answers: ['Crises', 'Crisises', 'Crisis', 'Crisiseses'], correct: 0, difficulty: 'medium' },
    { subject: 'English', question: 'What is the meaning of "obsolete"?', answers: ['Modern', 'Outdated', 'Popular', 'Current'], correct: 1, difficulty: 'hard' },
    { subject: 'English', question: 'What is the synonym of "fragile"?', answers: ['Strong', 'Delicate', 'Tough', 'Solid'], correct: 1, difficulty: 'easy' },
    { subject: 'English', question: 'What is the antonym of "expand"?', answers: ['Grow', 'Contract', 'Increase', 'Enlarge'], correct: 1, difficulty: 'easy' },
    { subject: 'English', question: 'What is the plural of "datum"?', answers: ['Datums', 'Data', 'Datas', 'Date'], correct: 1, difficulty: 'medium' },
    { subject: 'English', question: 'What is the meaning of "vivid"?', answers: ['Dull', 'Bright', 'Dark', 'Faint'], correct: 1, difficulty: 'hard' },
    { subject: 'English', question: 'What is the synonym of "enormous"?', answers: ['Tiny', 'Huge', 'Small', 'Little'], correct: 1, difficulty: 'easy' },
    { subject: 'English', question: 'What is the antonym of "scarce"?', answers: ['Rare', 'Abundant', 'Few', 'Limited'], correct: 1, difficulty: 'medium' },
    { subject: 'English', question: 'What is the plural of "thesis"?', answers: ['Thesises', 'Theses', 'Thesae', 'Thesias'], correct: 1, difficulty: 'hard' },
    { subject: 'English', question: 'What is the meaning of "pristine"?', answers: ['Dirty', 'Clean', 'Old', 'Used'], correct: 1, difficulty: 'hard' },
    { subject: 'English', question: 'What is the synonym of "diligent"?', answers: ['Lazy', 'Hardworking', 'Careless', 'Slow'], correct: 1, difficulty: 'easy' },
    { subject: 'English', question: 'What is the antonym of "frequent"?', answers: ['Often', 'Rare', 'Regular', 'Common'], correct: 1, difficulty: 'easy' },
    { subject: 'English', question: 'What is the plural of "index"?', answers: ['Indexes', 'Indices', 'Indexs', 'Indeces'], correct: 1, difficulty: 'medium' },
    { subject: 'English', question: 'What is the meaning of "succinct"?', answers: ['Wordy', 'Brief', 'Long', 'Verbose'], correct: 1, difficulty: 'hard' },
    { subject: 'English', question: 'What is the synonym of "elaborate"?', answers: ['Simple', 'Detailed', 'Short', 'Quick'], correct: 1, difficulty: 'easy' },
    { subject: 'English', question: 'What is the antonym of "visible"?', answers: ['Seen', 'Hidden', 'Clear', 'Apparent'], correct: 1, difficulty: 'easy' },
    { subject: 'English', question: 'What is the plural of "appendix"?', answers: ['Appendixes', 'Appendices', 'Appendixs', 'Appendixies'], correct: 1, difficulty: 'medium' },
    { subject: 'English', question: 'What is the meaning of "arduous"?', answers: ['Easy', 'Difficult', 'Simple', 'Quick'], correct: 1, difficulty: 'hard' },
    { subject: 'English', question: 'What is the synonym of "vague"?', answers: ['Clear', 'Unclear', 'Precise', 'Exact'], correct: 1, difficulty: 'easy' },
    { subject: 'English', question: 'What is the antonym of "permanent"?', answers: ['Temporary', 'Lasting', 'Enduring', 'Constant'], correct: 0, difficulty: 'easy' },
    { subject: 'English', question: 'What is the plural of "criterion"?', answers: ['Criterions', 'Criteria', 'Criterias', 'Criteriae'], correct: 1, difficulty: 'medium' },
    { subject: 'English', question: 'What is the meaning of "inevitable"?', answers: ['Avoidable', 'Certain', 'Unlikely', 'Optional'], correct: 1, difficulty: 'hard' },
    { subject: 'English', question: 'What is the synonym of "amiable"?', answers: ['Unfriendly', 'Friendly', 'Rude', 'Mean'], correct: 1, difficulty: 'easy' },
    { subject: 'English', question: 'What is the antonym of "scarce"?', answers: ['Abundant', 'Rare', 'Few', 'Limited'], correct: 0, difficulty: 'easy' },
    { subject: 'English', question: 'What is the plural of "focus"?', answers: ['Focuses', 'Foci', 'Focuss', 'Focae'], correct: 1, difficulty: 'medium' },
    { subject: 'English', question: 'What is the meaning of "candid"?', answers: ['Secretive', 'Honest', 'Dishonest', 'Shy'], correct: 1, difficulty: 'hard' },
    { subject: 'English', question: 'What is the synonym of "lucid"?', answers: ['Clear', 'Confusing', 'Dark', 'Dull'], correct: 0, difficulty: 'easy' },
    { subject: 'English', question: 'What is the antonym of "expand"?', answers: ['Contract', 'Grow', 'Increase', 'Enlarge'], correct: 0, difficulty: 'easy' },
    { subject: 'English', question: 'What is the plural of "medium"?', answers: ['Mediums', 'Media', 'Medians', 'Medias'], correct: 1, difficulty: 'medium' },
    { subject: 'English', question: 'What is the meaning of "tedious"?', answers: ['Exciting', 'Boring', 'Short', 'Quick'], correct: 1, difficulty: 'hard' },
    { subject: 'English', question: 'What is the synonym of "precise"?', answers: ['Exact', 'Vague', 'Rough', 'Unclear'], correct: 0, difficulty: 'easy' },
    { subject: 'English', question: 'What is the antonym of "complex"?', answers: ['Simple', 'Complicated', 'Difficult', 'Intricate'], correct: 0, difficulty: 'easy' },
    { subject: 'English', question: 'What is the plural of "radius"?', answers: ['Radiuses', 'Radii', 'Radius', 'Radiae'], correct: 1, difficulty: 'medium' },
    { subject: 'English', question: 'What is the meaning of "transient"?', answers: ['Permanent', 'Temporary', 'Lasting', 'Enduring'], correct: 1, difficulty: 'hard' },
    { subject: 'English', question: 'What is the synonym of "serene"?', answers: ['Calm', 'Noisy', 'Loud', 'Wild'], correct: 0, difficulty: 'easy' },
    { subject: 'English', question: 'What is the antonym of "scarce"?', answers: ['Abundant', 'Rare', 'Few', 'Limited'], correct: 0, difficulty: 'easy' },
    { subject: 'English', question: 'What is the plural of "alumnus"?', answers: ['Alumnuses', 'Alumni', 'Alumnis', 'Alumnae'], correct: 1, difficulty: 'medium' },
    { subject: 'English', question: 'What is the meaning of "ardent"?', answers: ['Indifferent', 'Passionate', 'Cold', 'Calm'], correct: 1, difficulty: 'hard' },
    { subject: 'English', question: 'What is the synonym of "vivid"?', answers: ['Bright', 'Dull', 'Dark', 'Faint'], correct: 0, difficulty: 'easy' },
    { subject: 'English', question: 'What is the antonym of "scarce"?', answers: ['Abundant', 'Rare', 'Few', 'Limited'], correct: 0, difficulty: 'easy' },
    { subject: 'English', question: 'What is the plural of "fungus"?', answers: ['Funguses', 'Fungi', 'Fungis', 'Fungae'], correct: 1, difficulty: 'medium' },
    { subject: 'English', question: 'What is the meaning of "copious"?', answers: ['Scarce', 'Abundant', 'Few', 'Limited'], correct: 1, difficulty: 'hard' },
    { subject: 'English', question: 'What is the synonym of "succinct"?', answers: ['Brief', 'Wordy', 'Long', 'Verbose'], correct: 0, difficulty: 'easy' },
    { subject: 'English', question: 'What is the antonym of "scarce"?', answers: ['Abundant', 'Rare', 'Few', 'Limited'], correct: 0, difficulty: 'easy' },
    { subject: 'English', question: 'What is the plural of "syllabus"?', answers: ['Syllabuses', 'Syllabi', 'Syllabus', 'Syllabae'], correct: 1, difficulty: 'medium' },
    { subject: 'English', question: 'What is the meaning of "gregarious"?', answers: ['Shy', 'Sociable', 'Angry', 'Sad'], correct: 1, difficulty: 'hard' },
    { subject: 'English', question: 'What is the synonym of "lucid"?', answers: ['Clear', 'Confusing', 'Dark', 'Dull'], correct: 0, difficulty: 'easy' },
    { subject: 'English', question: 'What is the antonym of "scarce"?', answers: ['Abundant', 'Rare', 'Few', 'Limited'], correct: 0, difficulty: 'easy' },
    { subject: 'English', question: 'What is the plural of "stimulus"?', answers: ['Stimulus', 'Stimuli', 'Stimulae', 'Stimulusis'], correct: 1, difficulty: 'medium' },
    { subject: 'English', question: 'What is the meaning of "tenacious"?', answers: ['Weak', 'Persistent', 'Lazy', 'Quick'], correct: 1, difficulty: 'hard' },
    { subject: 'English', question: 'What is the synonym of "lucid"?', answers: ['Clear', 'Confusing', 'Dark', 'Dull'], correct: 0, difficulty: 'easy' },
    { subject: 'English', question: 'What is the antonym of "fast"?', answers: ['Slow', 'Quick', 'Rapid', 'Swift'], correct: 0, difficulty: 'easy' },
    { subject: 'English', question: 'What is the plural of "child"?', answers: ['Childs', 'Children', 'Childes', 'Child'], correct: 1, difficulty: 'medium' },
    { subject: 'English', question: 'What is the meaning of "ubiquitous"?', answers: ['Rare', 'Everywhere', 'Unique', 'Hidden'], correct: 1, difficulty: 'hard' },
    { subject: 'English', question: 'What is the synonym of "happy"?', answers: ['Sad', 'Joyful', 'Angry', 'Tired'], correct: 1, difficulty: 'easy' },
    { subject: 'English', question: 'What is the meaning of "ephemeral"?', answers: ['Short-lived', 'Eternal', 'Bright', 'Dark'], correct: 0, difficulty: 'hard' },
    { subject: 'English', question: 'What is the antonym of "bright"?', answers: ['Dark', 'Dim', 'Dull', 'Shiny'], correct: 0, difficulty: 'easy' },
    { subject: 'English', question: 'What is the plural of "mouse"?', answers: ['Mouses', 'Mice', 'Mouse', 'Mices'], correct: 1, difficulty: 'medium' },
    { subject: 'English', question: 'What is the meaning of "serendipity"?', answers: ['Luck', 'Sadness', 'Anger', 'Confusion'], correct: 0, difficulty: 'hard' },
    { subject: 'English', question: 'What is the antonym of "ancient"?', answers: ['Modern', 'Old', 'Historic', 'Timeless'], correct: 0, difficulty: 'medium' },
    { subject: 'English', question: 'What is the meaning of "benevolent"?', answers: ['Kind', 'Cruel', 'Angry', 'Selfish'], correct: 0, difficulty: 'medium' },
    { subject: 'English', question: 'What is the antonym of "fast"?', answers: ['Slow', 'Quick', 'Rapid', 'Swift'], correct: 0, difficulty: 'easy' },
    { subject: 'English', question: 'What is the plural of "child"?', answers: ['Childs', 'Children', 'Childes', 'Child'], correct: 1, difficulty: 'medium' },
    { subject: 'English', question: 'What is the meaning of "ubiquitous"?', answers: ['Rare', 'Everywhere', 'Unique', 'Hidden'], correct: 1, difficulty: 'hard' },
    { subject: 'English', question: 'What is the synonym of "happy"?', answers: ['Sad', 'Joyful', 'Angry', 'Tired'], correct: 1, difficulty: 'easy' },
    { subject: 'English', question: 'What is the meaning of "ephemeral"?', answers: ['Short-lived', 'Eternal', 'Bright', 'Dark'], correct: 0, difficulty: 'hard' },
    { subject: 'Chemistry', question: 'What is the atomic number of Oxygen?', answers: ['6', '7', '8', '9'], correct: 2, difficulty: 'easy' },
    { subject: 'Chemistry', question: 'What is the pH of pure water?', answers: ['5', '6', '7', '8'], correct: 2, difficulty: 'medium' },
    { subject: 'Chemistry', question: 'What is the chemical formula for table salt?', answers: ['NaCl', 'KCl', 'CaCl2', 'MgCl2'], correct: 0, difficulty: 'hard' },
    { subject: 'Chemistry', question: 'What is the molar mass of H2O?', answers: ['18 g/mol', '20 g/mol', '22 g/mol', '24 g/mol'], correct: 0, difficulty: 'medium' },
    { subject: 'Chemistry', question: 'What is the main component of natural gas?', answers: ['Methane', 'Ethane', 'Propane', 'Butane'], correct: 0, difficulty: 'hard' },
    { subject: 'Chemistry', question: 'What is the chemical symbol for gold?', answers: ['Au', 'Ag', 'Pb', 'Fe'], correct: 0, difficulty: 'easy' },
    { subject: 'Chemistry', question: 'What is the formula for sulfuric acid?', answers: ['H2SO4', 'HCl', 'HNO3', 'H2CO3'], correct: 0, difficulty: 'medium' },
    { subject: 'Chemistry', question: 'What is the chemical formula for glucose?', answers: ['C6H12O6', 'C12H22O11', 'CH4', 'C2H5OH'], correct: 0, difficulty: 'hard' },
    { subject: 'Chemistry', question: 'What is the atomic number of Oxygen?', answers: ['6', '7', '8', '9'], correct: 2, difficulty: 'easy' },
    { subject: 'Chemistry', question: 'What is the pH of pure water?', answers: ['5', '6', '7', '8'], correct: 2, difficulty: 'medium' },
    { subject: 'Chemistry', question: 'What is the chemical formula for table salt?', answers: ['NaCl', 'KCl', 'CaCl2', 'MgCl2'], correct: 0, difficulty: 'hard' },
    { subject: 'Chemistry', question: 'What is the molar mass of H2O?', answers: ['18 g/mol', '20 g/mol', '22 g/mol', '24 g/mol'], correct: 0, difficulty: 'medium' },
    { subject: 'Chemistry', question: 'What is the main component of natural gas?', answers: ['Methane', 'Ethane', 'Propane', 'Butane'], correct: 0, difficulty: 'hard' },
    { subject: 'Physics', question: 'What is the unit of force?', answers: ['Newton', 'Joule', 'Pascal', 'Watt'], correct: 0, difficulty: 'easy' },
    { subject: 'Physics', question: 'What is the speed of light?', answers: ['3x10^8 m/s', '3x10^6 m/s', '3x10^5 m/s', '3x10^7 m/s'], correct: 0, difficulty: 'medium' },
    { subject: 'Physics', question: 'What is the formula for kinetic energy?', answers: ['mv', '1/2mv^2', 'mgh', 'F=ma'], correct: 1, difficulty: 'hard' },
    { subject: 'Physics', question: 'What is the unit of power?', answers: ['Watt', 'Joule', 'Newton', 'Pascal'], correct: 0, difficulty: 'easy' },
    { subject: 'Physics', question: 'What is the formula for acceleration?', answers: ['v/t', 'F/m', 'm/v', 'v^2'], correct: 1, difficulty: 'medium' },
    { subject: 'Physics', question: 'What is the first law of motion?', answers: ['Inertia', 'Force', 'Energy', 'Momentum'], correct: 0, difficulty: 'medium' },
    { subject: 'Physics', question: 'What is the unit of force?', answers: ['Newton', 'Joule', 'Pascal', 'Watt'], correct: 0, difficulty: 'easy' },
    { subject: 'Physics', question: 'What is the speed of light?', answers: ['3x10^8 m/s', '3x10^6 m/s', '3x10^5 m/s', '3x10^7 m/s'], correct: 0, difficulty: 'medium' },
    { subject: 'Physics', question: 'What is the formula for kinetic energy?', answers: ['mv', '1/2mv^2', 'mgh', 'F=ma'], correct: 1, difficulty: 'hard' },
    { subject: 'Physics', question: 'What is the unit of power?', answers: ['Watt', 'Joule', 'Newton', 'Pascal'], correct: 0, difficulty: 'easy' },
    { subject: 'Physics', question: 'What is the formula for acceleration?', answers: ['v/t', 'F/m', 'm/v', 'v^2'], correct: 1, difficulty: 'medium' },
    { subject: 'Physics', question: 'What is the unit of energy?', answers: ['Joule', 'Newton', 'Watt', 'Pascal'], correct: 0, difficulty: 'easy' },
    { subject: 'Physics', question: 'What is the acceleration due to gravity on Earth?', answers: ['9.8 m/s²', '10 m/s²', '8.9 m/s²', '9.2 m/s²'], correct: 0, difficulty: 'medium' },
    { subject: 'Physics', question: 'What is the SI unit of electric current?', answers: ['Ampere', 'Volt', 'Ohm', 'Coulomb'], correct: 0, difficulty: 'easy' },
    { subject: 'Physics', question: 'What is the formula for work?', answers: ['Force x Distance', 'Mass x Acceleration', 'Energy x Time', 'Power x Time'], correct: 0, difficulty: 'medium' },
    { subject: 'Physics', question: 'What is the speed of sound in air?', answers: ['343 m/s', '300 m/s', '400 m/s', '500 m/s'], correct: 0, difficulty: 'medium' },
    { subject: 'Physics', question: 'What is the unit of frequency?', answers: ['Hertz', 'Joule', 'Watt', 'Newton'], correct: 0, difficulty: 'easy' },
    { subject: 'Physics', question: 'What is the formula for momentum?', answers: ['mv', 'mgh', '1/2mv^2', 'F=ma'], correct: 0, difficulty: 'medium' },
    { subject: 'Physics', question: 'What is the SI unit of temperature?', answers: ['Kelvin', 'Celsius', 'Fahrenheit', 'Rankine'], correct: 0, difficulty: 'easy' },
    { subject: 'Physics', question: 'What is the law of conservation of energy?', answers: ['Energy cannot be created or destroyed', 'Force equals mass times acceleration', 'For every action there is an equal and opposite reaction', 'Energy is always lost'], correct: 0, difficulty: 'medium' },
    { subject: 'Physics', question: 'What is the unit of electric resistance?', answers: ['Ohm', 'Volt', 'Ampere', 'Watt'], correct: 0, difficulty: 'easy' },
    { subject: 'Physics', question: 'What is the formula for pressure?', answers: ['Force/Area', 'Mass/Volume', 'Energy/Time', 'Distance/Time'], correct: 0, difficulty: 'medium' },
    { subject: 'Physics', question: 'What is the SI unit of power?', answers: ['Watt', 'Joule', 'Newton', 'Pascal'], correct: 0, difficulty: 'easy' },
    { subject: 'Physics', question: 'What is the value of gravitational constant G?', answers: ['6.67x10^-11', '9.8', '3x10^8', '1.6x10^-19'], correct: 0, difficulty: 'hard' },
    { subject: 'Physics', question: 'What is the formula for density?', answers: ['Mass/Volume', 'Force/Area', 'Energy/Time', 'Distance/Time'], correct: 0, difficulty: 'medium' },
    { subject: 'Biology', question: 'What is the powerhouse of the cell?', answers: ['Nucleus', 'Mitochondria', 'Ribosome', 'Golgi Apparatus'], correct: 1, difficulty: 'easy' },
    { subject: 'Biology', question: 'What is the process of converting sunlight into energy called?', answers: ['Respiration', 'Photosynthesis', 'Digestion', 'Fermentation'], correct: 1, difficulty: 'medium' },
    { subject: 'Biology', question: 'What is the genetic material in cells?', answers: ['RNA', 'DNA', 'Protein', 'Lipid'], correct: 1, difficulty: 'hard' },
    { subject: 'Biology', question: 'What is the function of red blood cells?', answers: ['Transport oxygen', 'Fight infections', 'Clot blood', 'Store energy'], correct: 0, difficulty: 'easy' },
    { subject: 'Biology', question: 'What is the largest organ in the human body?', answers: ['Liver', 'Skin', 'Heart', 'Brain'], correct: 1, difficulty: 'medium' },
    { subject: 'Biology', question: 'What is the function of the liver?', answers: ['Produce bile', 'Store oxygen', 'Filter blood', 'Digest proteins'], correct: 0, difficulty: 'medium' },
    { subject: 'Biology', question: 'What is the powerhouse of the cell?', answers: ['Nucleus', 'Mitochondria', 'Ribosome', 'Golgi Apparatus'], correct: 1, difficulty: 'easy' },
    { subject: 'Biology', question: 'What is the process of converting sunlight into energy called?', answers: ['Respiration', 'Photosynthesis', 'Digestion', 'Fermentation'], correct: 1, difficulty: 'medium' },
    { subject: 'Biology', question: 'What is the genetic material in cells?', answers: ['RNA', 'DNA', 'Protein', 'Lipid'], correct: 1, difficulty: 'hard' },
    { subject: 'Biology', question: 'What is the function of red blood cells?', answers: ['Transport oxygen', 'Fight infections', 'Clot blood', 'Store energy'], correct: 0, difficulty: 'easy' },
    { subject: 'Biology', question: 'What is the largest organ in the human body?', answers: ['Liver', 'Skin', 'Heart', 'Brain'], correct: 1, difficulty: 'medium' },
    { subject: 'Biology', question: 'What is the basic unit of life?', answers: ['Cell', 'Tissue', 'Organ', 'Organism'], correct: 0, difficulty: 'easy' },
    { subject: 'Biology', question: 'What is the process by which plants make food?', answers: ['Photosynthesis', 'Respiration', 'Digestion', 'Fermentation'], correct: 0, difficulty: 'easy' },
    { subject: 'Biology', question: 'What is the largest bone in the human body?', answers: ['Femur', 'Tibia', 'Humerus', 'Fibula'], correct: 0, difficulty: 'medium' },
    { subject: 'Biology', question: 'What is the function of white blood cells?', answers: ['Fight infections', 'Transport oxygen', 'Clot blood', 'Store energy'], correct: 0, difficulty: 'easy' },
    { subject: 'Biology', question: 'What is the process of cell division called?', answers: ['Mitosis', 'Meiosis', 'Fission', 'Fusion'], correct: 0, difficulty: 'medium' },
    { subject: 'Biology', question: 'What is the main function of the heart?', answers: ['Pump blood', 'Digest food', 'Filter waste', 'Produce hormones'], correct: 0, difficulty: 'easy' },
    { subject: 'Biology', question: 'What is the largest organ inside the human body?', answers: ['Liver', 'Skin', 'Heart', 'Brain'], correct: 0, difficulty: 'medium' },
    { subject: 'Biology', question: 'What is the pigment that gives plants their green color?', answers: ['Chlorophyll', 'Hemoglobin', 'Melanin', 'Keratin'], correct: 0, difficulty: 'easy' },
    { subject: 'Biology', question: 'What is the process by which animals obtain energy from food?', answers: ['Respiration', 'Photosynthesis', 'Fermentation', 'Digestion'], correct: 0, difficulty: 'medium' },
    { subject: 'Biology', question: 'What is the smallest bone in the human body?', answers: ['Stapes', 'Femur', 'Tibia', 'Ulna'], correct: 0, difficulty: 'hard' },
    { subject: 'Biology', question: 'What is the function of the kidneys?', answers: ['Filter blood', 'Produce bile', 'Store oxygen', 'Digest proteins'], correct: 0, difficulty: 'medium' },
    { subject: 'Biology', question: 'What is the main function of the lungs?', answers: ['Exchange gases', 'Pump blood', 'Digest food', 'Produce hormones'], correct: 0, difficulty: 'easy' },
    { subject: 'Biology', question: 'What is the process by which plants lose water?', answers: ['Transpiration', 'Respiration', 'Photosynthesis', 'Fermentation'], correct: 0, difficulty: 'medium' },
    { subject: 'Biology', question: 'What is the main function of the stomach?', answers: ['Digest food', 'Pump blood', 'Filter waste', 'Produce hormones'], correct: 0, difficulty: 'easy' },
    { subject: 'Government', question: 'Who is the head of state in a parliamentary system?', answers: ['President', 'Prime Minister', 'Governor', 'Senator'], correct: 1, difficulty: 'easy' },
    { subject: 'Government', question: 'What is the supreme law of the land?', answers: ['Decree', 'Constitution', 'Act', 'Edict'], correct: 1, difficulty: 'easy' },
    { subject: 'Government', question: 'Which organ interprets the law?', answers: ['Executive', 'Judiciary', 'Legislature', 'Police'], correct: 1, difficulty: 'medium' },
    { subject: 'Government', question: 'What is the tenure of a Nigerian President?', answers: ['3 years', '4 years', '5 years', '6 years'], correct: 1, difficulty: 'medium' },
    { subject: 'Government', question: 'Who was Nigeria’s first president?', answers: ['Obasanjo', 'Buhari', 'Nnamdi Azikiwe', 'Gowon'], correct: 2, difficulty: 'hard' },
    { subject: 'Economics', question: 'What is the study of scarcity and choice?', answers: ['Biology', 'Economics', 'Geography', 'Accounting'], correct: 1, difficulty: 'easy' },
    { subject: 'Economics', question: 'What is demand?', answers: ['Desire for goods', 'Ability to buy goods', 'Willingness and ability to buy goods', 'None'], correct: 2, difficulty: 'easy' },
    { subject: 'Economics', question: 'What is the reward for labour?', answers: ['Rent', 'Wages', 'Interest', 'Profit'], correct: 1, difficulty: 'medium' },
    { subject: 'Economics', question: 'What is inflation?', answers: ['Decrease in prices', 'Increase in prices', 'Stable prices', 'None'], correct: 1, difficulty: 'medium' },
    { subject: 'Economics', question: 'Who is the father of Economics?', answers: ['Adam Smith', 'John Keynes', 'Karl Marx', 'Milton Friedman'], correct: 0, difficulty: 'hard' },
    { subject: 'Geography', question: 'What is the largest continent?', answers: ['Africa', 'Asia', 'Europe', 'America'], correct: 1, difficulty: 'easy' },
    { subject: 'Geography', question: 'What is the capital of Nigeria?', answers: ['Lagos', 'Abuja', 'Kano', 'Ibadan'], correct: 1, difficulty: 'easy' },
    { subject: 'Geography', question: 'What is the longest river in Africa?', answers: ['Niger', 'Nile', 'Congo', 'Zambezi'], correct: 1, difficulty: 'medium' },
    { subject: 'Geography', question: 'Which layer of the earth do we live on?', answers: ['Mantle', 'Crust', 'Core', 'Outer core'], correct: 1, difficulty: 'medium' },
    { subject: 'Geography', question: 'What is the study of weather called?', answers: ['Geology', 'Meteorology', 'Ecology', 'Cartography'], correct: 1, difficulty: 'hard' },
    { subject: 'Literature', question: 'Who wrote "Things Fall Apart"?', answers: ['Wole Soyinka', 'Chinua Achebe', 'Ngugi wa Thiong\'o', 'Ben Okri'], correct: 1, difficulty: 'easy' },
    { subject: 'Literature', question: 'What is a sonnet?', answers: ['A play', 'A poem of 14 lines', 'A novel', 'A short story'], correct: 1, difficulty: 'easy' },
    { subject: 'Literature', question: 'Who is the author of "The Lion and the Jewel"?', answers: ['Chinua Achebe', 'Wole Soyinka', 'J.P. Clark', 'Femi Osofisan'], correct: 1, difficulty: 'medium' },
    { subject: 'Literature', question: 'What is the main theme of "Animal Farm"?', answers: ['Love', 'Corruption of power', 'Friendship', 'War'], correct: 1, difficulty: 'medium' },
    { subject: 'Literature', question: 'What is a metaphor?', answers: ['Comparison using like or as', 'Direct comparison', 'Exaggeration', 'Understatement'], correct: 1, difficulty: 'hard' },
    { subject: 'Agricultural Science', question: 'What is the study of soil called?', answers: ['Botany', 'Pedology', 'Zoology', 'Ecology'], correct: 1, difficulty: 'easy' },
    { subject: 'Agricultural Science', question: 'What is poultry farming?', answers: ['Fish farming', 'Rearing of birds', 'Crop farming', 'Bee keeping'], correct: 1, difficulty: 'easy' },
    { subject: 'Agricultural Science', question: 'What is irrigation?', answers: ['Planting', 'Water supply to crops', 'Harvesting', 'Fertilizing'], correct: 1, difficulty: 'medium' },
    { subject: 'Agricultural Science', question: 'What is the process of breeding plants called?', answers: ['Grafting', 'Plant breeding', 'Pruning', 'Weeding'], correct: 1, difficulty: 'medium' },
    { subject: 'Agricultural Science', question: 'What is apiculture?', answers: ['Fish farming', 'Bee keeping', 'Bird rearing', 'Crop farming'], correct: 1, difficulty: 'hard' },
    { subject: 'Civic Education', question: 'What is democracy?', answers: ['Rule by one', 'Rule by few', 'Rule by the people', 'Rule by the rich'], correct: 2, difficulty: 'easy' },
    { subject: 'Civic Education', question: 'What is the national pledge?', answers: ['A song', 'A promise', 'A law', 'A dance'], correct: 1, difficulty: 'easy' },
    { subject: 'Civic Education', question: 'What is human right?', answers: ['Privilege', 'Entitlement', 'Basic right', 'Gift'], correct: 2, difficulty: 'medium' },
    { subject: 'Civic Education', question: 'What is the symbol of justice?', answers: ['Sword', 'Scale', 'Book', 'Pen'], correct: 1, difficulty: 'medium' },
    { subject: 'Civic Education', question: 'What is the meaning of patriotism?', answers: ['Love for money', 'Love for country', 'Love for family', 'Love for friends'], correct: 1, difficulty: 'hard' },
    { subject: 'Commerce', question: 'What is commerce?', answers: ['Buying and selling', 'Manufacturing', 'Farming', 'Mining'], correct: 0, difficulty: 'easy' },
    { subject: 'Commerce', question: 'What is a retailer?', answers: ['Buys from consumer', 'Sells to consumer', 'Produces goods', 'Exports goods'], correct: 1, difficulty: 'easy' },
    { subject: 'Commerce', question: 'What is a cheque?', answers: ['A coin', 'A written order to pay money', 'A bill', 'A receipt'], correct: 1, difficulty: 'medium' },
    { subject: 'Commerce', question: 'What is insurance?', answers: ['Protection against loss', 'Loan', 'Investment', 'Tax'], correct: 0, difficulty: 'medium' },
    { subject: 'Commerce', question: 'What is e-commerce?', answers: ['Electronic buying and selling', 'Exporting', 'Importing', 'Retailing'], correct: 0, difficulty: 'hard' },
    { subject: 'Accounting', question: 'What is accounting?', answers: ['Cooking', 'Recording financial transactions', 'Teaching', 'Driving'], correct: 1, difficulty: 'easy' },
    { subject: 'Accounting', question: 'What is a ledger?', answers: ['A book of accounts', 'A receipt', 'A cheque', 'A bill'], correct: 0, difficulty: 'easy' },
    { subject: 'Accounting', question: 'What is capital?', answers: ['Money for business', 'Profit', 'Loss', 'Goods'], correct: 0, difficulty: 'medium' },
    { subject: 'Accounting', question: 'What is a balance sheet?', answers: ['A statement of assets and liabilities', 'A receipt', 'A cheque', 'A bill'], correct: 0, difficulty: 'medium' },
    { subject: 'Accounting', question: 'Who is a creditor?', answers: ['Owes money', 'Is owed money', 'Sells goods', 'Buys goods'], correct: 1, difficulty: 'hard' },
    { subject: 'Further Mathematics', question: 'What is the derivative of sin(x)?', answers: ['cos(x)', '-cos(x)', 'sin(x)', '-sin(x)'], correct: 0, difficulty: 'easy' },
    { subject: 'Further Mathematics', question: 'What is the integral of 1/x?', answers: ['ln(x)', 'x', '1/x', 'x^2'], correct: 0, difficulty: 'easy' },
    { subject: 'Further Mathematics', question: 'What is the Laplace transform of 1?', answers: ['1/s', 's', 'e^s', 'ln(s)'], correct: 0, difficulty: 'medium' },
    { subject: 'Further Mathematics', question: 'What is the solution to x^2 = 16?', answers: ['4', '-4', '±4', '0'], correct: 2, difficulty: 'medium' },
    { subject: 'Further Mathematics', question: 'What is the value of e^0?', answers: ['0', '1', 'e', '-1'], correct: 1, difficulty: 'hard' },
    { subject: 'CRS', question: 'Who led the Israelites out of Egypt?', answers: ['Abraham', 'Moses', 'David', 'Solomon'], correct: 1, difficulty: 'easy' },
    { subject: 'CRS', question: 'What is the holy book of Christians?', answers: ['Quran', 'Bible', 'Torah', 'Vedas'], correct: 1, difficulty: 'medium' },
    { subject: 'CRS', question: 'Who betrayed Jesus?', answers: ['Peter', 'Judas', 'John', 'James'], correct: 1, difficulty: 'hard' }
];

const questionEl = document.getElementById('question');
const answerBtns = [
  document.getElementById('OptionA'),
  document.getElementById('OptionB'),
  document.getElementById('OptionC'),
  document.getElementById('OptionD')
];
const timerEl = document.getElementById('timer');
const scoreEl = document.getElementById('score');
const startBtn = document.getElementById('startQuizButton');
const subjectCheckboxes = document.querySelectorAll('.subjectCheckbox');
const subjectSection = document.getElementById('subjectSelection');
const progressBar = document.getElementById('progressBar');

// ========== GAME STATE ==========

let filteredQuestions = [];
let currentQuestion = 0;
let score = 0;
let timer = 30;
let timerInterval = null;
let quizStarted = false;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function updateLeaderboard(score) {
  let scores = JSON.parse(localStorage.getItem('quizScores') || '[]');
  scores.push(score);
  scores = scores.sort((a, b) => b - a).slice(0, 10);
  localStorage.setItem('quizScores', JSON.stringify(scores));
  const list = document.getElementById('leaderboardList');
  list.innerHTML = '';
  scores.forEach((s, i) => {
    const li = document.createElement('li');
    li.textContent = `#${i + 1}: $${s}`;
    list.appendChild(li);
  });
  document.getElementById('leaderboard').style.display = 'block';
}

function showConfetti() {
  for (let i = 0; i < 20; i++) {
    const confetti = document.createElement('span');
    confetti.textContent = '🎉😁☺️';
    confetti.style.position = 'fixed';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = '-30px';
    confetti.style.fontSize = (16 + Math.random() * 24) + 'px';
    confetti.style.transition = 'top 1s linear, opacity 1s';
    confetti.style.zIndex = 9999;
    document.body.appendChild(confetti);
    setTimeout(() => {
      confetti.style.top = '100vh';
      confetti.style.opacity = 0;
    }, 10);
    setTimeout(() => confetti.remove(), 1100);
  }
}

function shake(element) {
  element.classList.add('shake');
  setTimeout(() => element.classList.remove('shake'), 500);
}

function startQuiz() {
  // Get selected subjects
  const selectedSubjects = Array.from(subjectCheckboxes)
    .filter(cb => cb.checked)
    .map(cb => cb.value);

  filteredQuestions = QUESTIONS.filter(q => selectedSubjects.includes(q.subject));
  shuffle(filteredQuestions);

  if (filteredQuestions.length === 0) {
    alert('Please select at least one subject!');
    return;
  }

  currentQuestion = 0;
  score = 0;
  quizStarted = true;
  subjectSection.style.display = 'none';
  scoreEl.textContent = '$ 0';
  showQuestion();
}

function showQuestion() {
  if (currentQuestion >= filteredQuestions.length) {
    endQuiz();
    return;
  }

  // Progress bar
  if (progressBar) {
    progressBar.style.width = `${((currentQuestion) / filteredQuestions.length) * 100}%`;
    progressBar.textContent = `Question ${currentQuestion + 1} of ${filteredQuestions.length}`;
  }

  const q = filteredQuestions[currentQuestion];
  questionEl.textContent = q.question;
  answerBtns.forEach((btn, idx) => {
    btn.textContent = q.answers[idx];
    btn.disabled = false;
    btn.className = 'answerButton';
  });

  timer = 30;
  timerEl.textContent = `⏳ ${timer}s`;
  clearInterval(timerInterval);
  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  timer--;
  timerEl.textContent = `⏳ ${timer}s`;
  if (timer <= 0) {
    clearInterval(timerInterval);
    handleAnswer(-1); // No answer selected
  }
}

function handleAnswer(selectedIdx) {
  clearInterval(timerInterval);
  const q = filteredQuestions[currentQuestion];
  answerBtns.forEach(btn => btn.disabled = true);

  if (selectedIdx === q.correct) {
    score++;
    scoreEl.textContent = `$ ${score}`;
    answerBtns[selectedIdx].classList.add('correct');
    showConfetti();
  } else {
    if (selectedIdx >= 0) {
      answerBtns[selectedIdx].classList.add('wrong');
      shake(answerBtns[selectedIdx]);
    }
    answerBtns[q.correct].classList.add('correct');
  }

  setTimeout(() => {
    currentQuestion++;
    showQuestion();
  }, 1200);
}

function endQuiz() {
  questionEl.textContent = `Quiz Over! Your score: ${score} / ${filteredQuestions.length}`;
  answerBtns.forEach(btn => {
    btn.textContent = '—';
    btn.disabled = true;
    btn.className = 'answerButton';
  });
  timerEl.textContent = '';
  if (progressBar) {
    progressBar.style.width = '100%';
    progressBar.textContent = 'Quiz Complete!';
  }
  setTimeout(() => {
    subjectSection.style.display = '';
    quizStarted = false;
  }, 2500);
}

startBtn.addEventListener('click', startQuiz);

answerBtns.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    if (!quizStarted) return;
    handleAnswer(idx);
  });
});

// Optional: Keyboard navigation
document.addEventListener('keydown', e => {
  if (!quizStarted) return;
  if (e.key >= '1' && e.key <= '4') {
    handleAnswer(Number(e.key) - 1);
  }
});


