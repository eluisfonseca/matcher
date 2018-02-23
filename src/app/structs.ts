export interface Player {
  id: string;
  firstName: string;
  lastName: string;
  stats: PlayerStats;
}

export class Player {
  id: string;
  firstName: string;
  lastName: string;
  stats: PlayerStats;

  constructor(
    id: string,
    firstName: string,
    lastName: string,
    pass?: number,
    marking?: number,
    handling?: number,
    shot?: number,
    speed?: number,
    endurance?: number,
    strength?: number,
    vision?: number,
    gk?: number,
    tackle?: number,
    focus?: number) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.stats = new PlayerStats(pass, marking, handling, shot, speed, endurance, strength, vision, gk, tackle, focus);
  }

  getAggregates(): AggregatedStats {
    return this.stats.calcAgregates();
  }

  getScore(): number {
    return this.stats.getTotal();
  }
}

export class PlayerStats {
  pass: number;
  marking: number;
  handling: number;
  shot: number;
  speed: number;
  endurance: number;
  strength: number;
  vision: number;
  goalkeeping: number;
  tackle: number;
  focus: number;

  constructor(
    pass: number = 0,
    marking: number = 0,
    handling: number = 0,
    shot: number = 0,
    speed: number = 0,
    endurance: number = 0,
    strength: number = 0,
    vision: number = 0,
    gk: number = 0,
    tackle: number = 0,
    focus: number = 0) {
      this.pass = pass;
      this.marking = marking;
      this.handling = handling;
      this.shot = shot;
      this.speed = speed;
      this.endurance = endurance;
      this.strength = strength;
      this.vision = vision;
      this.goalkeeping = gk;
      this.tackle = tackle;
      this.focus = focus;
  }

  calcAgregates(): AggregatedStats {
    return new AggregatedStats(this.getDefence(), this.getOffense(), this.getGoalkeeping(), this.getSkill(), this.getPhysique());
  }

  getOffense(): number {
    return this.shot + this.speed + this.handling + this.endurance + this.vision;
  }

  getDefence(): number {
    return this.marking + this.endurance + this.strength + this.tackle + this.focus;
  }

  getGoalkeeping(): number {
    return this.goalkeeping + this.vision + this.focus + this.marking;
  }

  getSkill(): number {
    return this.handling + this.pass + this.vision + this.shot;
  }

  getPhysique(): number {
    return this.speed + this.endurance + this.strength;
  }

  getTotal(): number {
    return this.goalkeeping + this.pass + this.handling + this.shot + this.speed + this.handling + this.endurance + this.vision + this.marking + this.strength + this.tackle;
  }
}

export class AggregatedStats {
  defence: number;
  offense: number;
  goalkeeping: number;
  skill: number;
  physique: number;

  constructor(
    defence: number = 0,
    offense: number = 0,
    goalkeeping: number = 0,
    skill: number = 0,
    physique: number = 0,
  ) {
    this.defence = defence;
    this.offense = offense;
    this.goalkeeping = goalkeeping;
    this.skill = skill;
    this.physique = physique;
  }
}

export interface Match {
  id: number;
  date: string;
  teamA: number[];
  teamB:  number[];
  totalSkillA: number;
  totalSkillB: number;
  offenceSkillA: number;
  offenceSkillB: number;
  defenceSkillA: number;
  defenceSkillB: number;
  goalkeepingSkillA: number;
  goalkeepingSkillB: number;
  score: number[];
}
