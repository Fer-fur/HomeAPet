
export const initialFormData = {
    name: '',
    type: '',
    breed: '',
    color: '',
    gender: '',
    age: '',
    medical_condition: '',
    reason: '',
    characteristics: '',
    terms: false,
  };

export const formSections = [
    {
        section: 'A',
        section_title: 'Basic Pet Information',
    },
    {
        section: 'B',
        section_title: 'Health & Photo',
    },
    {
        section: 'C',
        section_title: 'Personality',
    },
    {
        section: 'D',
        section_title: 'Reasons for Rehoming',
    },
]

export const pet_traits = [
    'Children Friendly',
    'House-trained',
    'Can live with other pets',
    'Good with Commands',
    'Separation Anxiety',
    'Knows Tricks',
    'Indoor preference',
    'Toilet-Trained',
    'Vaccinated'
]

export type FormErrors = {
    [section: string]: {
      [field: string]: string;
    };
  };