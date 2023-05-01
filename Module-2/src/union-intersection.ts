type NobDeveloperType = {
  name: string;
};
type JnDeveloperType = {
  name: string;
  experience: number;
  expertise: string;
};

type NextLevelDeveloperType = JnDeveloperType & {
  level: number;
  level2?: string;
  level3?: "junior" | "mid" | "senior";
};
// union type
const nobDeveloper: NobDeveloperType = {
  name: "Al Amin",
};

const jnDeveloper: JnDeveloperType = {
  name: "Al Amin",
  experience: 1,
  expertise: "Javascript",
};

const newDeveloper: NobDeveloperType | JnDeveloperType = {
  name: "Al Amin",
  experience: 1,
  expertise: "Javascript",
  //   level: 2,  error
};

//intersection type
const nextLevelDeveloper: NextLevelDeveloperType = {
  name: "Al Amin",
  experience: 1,
  expertise: "Javascript",
  level: 2,
  level3: "junior",
};

//  enum
// enum type not recommended for professional applications

enum Level {
  Junior = "Junior",
  Mid = "Mid",
  Senior = "Senior",
}

const nextLevelDeveloper2: NextLevelDeveloperType = {
  name: "Al Amin",
  experience: 1,
  expertise: "Javascript",
  level: 2,
  level2: Level.Junior,
};
