import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

type SectionId = 'home' | 'about' | 'service' | 'faq' | 'contact';

interface Section {
  id: SectionId;
  navId: string;
  sectionId: string;
}

interface SectionState {
  sections: Section[];
}

const getNavId = (id: SectionId) => `nav-${id}`;

const sectionIds: SectionId[] = ['home', 'about', 'service', 'faq', 'contact'];

const sections: Section[] = sectionIds.map(s => {
  return {
    id: s,
    navId: getNavId(s),
    sectionId: s
  };
});

const initialState: SectionState = { sections };

export const sectionSlice = createSlice({
  name: 'sections',
  initialState,
  reducers: {}
});

// selectors

const selectById = (allSections: Section[], id: SectionId): Section => {
  const section = allSections.find(s => s.id === id);
  // should not be executed
  if (section === undefined) {
    throw new Error('invalid id must be present');
  }
  return section;
};

export const selectSections = (state: RootState) => state.sections.sections;
export const selectHome = (state: RootState) => selectById(selectSections(state), 'home');
export const selectAbout = (state: RootState) => selectById(selectSections(state), 'about');
export const selectService = (state: RootState) => selectById(selectSections(state), 'service');
export const selectFAQ = (state: RootState) => selectById(selectSections(state), 'faq');
export const selectContact = (state: RootState) => selectById(selectSections(state), 'contact');

export default sectionSlice.reducer;
