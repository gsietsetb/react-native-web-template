import _ from 'lodash';
import {makeAutoObservable} from 'mobx';
import {animalGroups, specialityGroups, workPlaces} from '../utils/mock';

export const toggleList = (list, item, key = 'name') => {
  if (list[key]) {
    delete list[key];
  } else {
    list[key] = item;
  }
};

export const modalStore = (show = false) =>
  makeAutoObservable({
    show: show,
    /* id: nanoid(6),*/
    isMain: false,
    showModal() {
      this.show = true;
    },
    closeModal() {
      this.show = false;
    },
    toggleModal() {
      this.show = !this.show;
    },
  });

export const AuthStore = () =>
  makeAutoObservable({
    user: null,
    isLoggedIn: true,
    logIn(connect = true) {
      this.isLoggedIn = connect;
    },
    async googleSignin() {},
  });

/**Specific Vet Props*/
export const ServiceStore = () =>
  makeAutoObservable({
    type: workPlaces.HOME,
    address: '',
    prices: [],
    workingHours: '',
  });

/**Specific Vet Props*/
export const VetStore = () =>
  makeAutoObservable({
    /**Specialities*/
    specialities: specialityGroups.Veterinaria.specialities,
    get activeSpecialities() {
      return Object.values(this.specialities).filter(
        ({name, active}) => !!active,
      );
    },
    get hasSpecialities() {
      return !_.isEmpty(this.activeSpecialities);
    },
    toggleSpeciality(key) {
      this.specialities[key].active = !this.specialities[key].active;
      //toggleList(this.specialities, spec);
    },

    /**Animals*/
    animalGroups: [],
    animals: animalGroups,
    get activeAnimals() {
      return _.flatten(
        Object.values(this.animals).map(({animals}) => {
          return Object.values(animals).filter(({name, active}) => !!active);
        }),
      );
    },
    toggleAnimalGroup(key, animals) {
      this.animals[key].active = !this.animals[key].active;
      Object.keys(animals).map(currKey => this.toggleAnimal(currKey, key));
    },
    toggleAnimal(key, groupKey) {
      this.animals[groupKey].animals[key].active = !this.animals[groupKey]
        .animals[key].active;
    },
    get hasAnimals() {
      return !_.isEmpty(this.activeAnimals);
    },

    /**params*/
    vetNum: '',
    setVetNum: newVal => {
      this.age = newVal;
    },
    degree: '',
    setDegree: newVal => {
      this.age = newVal;
    },
    services: [], //list of @ServiceStore
  });

/**General User Props*/
export const UserStore = () =>
  makeAutoObservable({
    user: null,
    auth: AuthStore(),
    vet: VetStore(),
    soonModal: modalStore(),
    name: '',
    setName: newName => {
      this.name = newName;
    },
    age: '',
    setAge: newVal => {
      this.age = newVal;
    },
    desc: '',
    setDesc: newVal => {
      this.age = newVal;
    },
    isActive: false,
    isLoggedIn: true,
    logIn(connect = true) {
      this.isLoggedIn = connect;
    },
    async googleSignin() {},
  });
