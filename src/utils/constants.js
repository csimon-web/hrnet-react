const departments = [
  'Sales',
  'Marketing',
  'Engineering',
  'Human Resources',
  'Legal',
]

const states = [
  {
    name: 'Alabama',
    abbreviation: 'AL',
  },
  {
    name: 'Alaska',
    abbreviation: 'AK',
  },
  {
    name: 'American Samoa',
    abbreviation: 'AS',
  },
  {
    name: 'Arizona',
    abbreviation: 'AZ',
  },
  {
    name: 'Arkansas',
    abbreviation: 'AR',
  },
  {
    name: 'California',
    abbreviation: 'CA',
  },
  {
    name: 'Colorado',
    abbreviation: 'CO',
  },
  {
    name: 'Connecticut',
    abbreviation: 'CT',
  },
  {
    name: 'Delaware',
    abbreviation: 'DE',
  },
  {
    name: 'District Of Columbia',
    abbreviation: 'DC',
  },
  {
    name: 'Federated States Of Micronesia',
    abbreviation: 'FM',
  },
  {
    name: 'Florida',
    abbreviation: 'FL',
  },
  {
    name: 'Georgia',
    abbreviation: 'GA',
  },
  {
    name: 'Guam',
    abbreviation: 'GU',
  },
  {
    name: 'Hawaii',
    abbreviation: 'HI',
  },
  {
    name: 'Idaho',
    abbreviation: 'ID',
  },
  {
    name: 'Illinois',
    abbreviation: 'IL',
  },
  {
    name: 'Indiana',
    abbreviation: 'IN',
  },
  {
    name: 'Iowa',
    abbreviation: 'IA',
  },
  {
    name: 'Kansas',
    abbreviation: 'KS',
  },
  {
    name: 'Kentucky',
    abbreviation: 'KY',
  },
  {
    name: 'Louisiana',
    abbreviation: 'LA',
  },
  {
    name: 'Maine',
    abbreviation: 'ME',
  },
  {
    name: 'Marshall Islands',
    abbreviation: 'MH',
  },
  {
    name: 'Maryland',
    abbreviation: 'MD',
  },
  {
    name: 'Massachusetts',
    abbreviation: 'MA',
  },
  {
    name: 'Michigan',
    abbreviation: 'MI',
  },
  {
    name: 'Minnesota',
    abbreviation: 'MN',
  },
  {
    name: 'Mississippi',
    abbreviation: 'MS',
  },
  {
    name: 'Missouri',
    abbreviation: 'MO',
  },
  {
    name: 'Montana',
    abbreviation: 'MT',
  },
  {
    name: 'Nebraska',
    abbreviation: 'NE',
  },
  {
    name: 'Nevada',
    abbreviation: 'NV',
  },
  {
    name: 'New Hampshire',
    abbreviation: 'NH',
  },
  {
    name: 'New Jersey',
    abbreviation: 'NJ',
  },
  {
    name: 'New Mexico',
    abbreviation: 'NM',
  },
  {
    name: 'New York',
    abbreviation: 'NY',
  },
  {
    name: 'North Carolina',
    abbreviation: 'NC',
  },
  {
    name: 'North Dakota',
    abbreviation: 'ND',
  },
  {
    name: 'Northern Mariana Islands',
    abbreviation: 'MP',
  },
  {
    name: 'Ohio',
    abbreviation: 'OH',
  },
  {
    name: 'Oklahoma',
    abbreviation: 'OK',
  },
  {
    name: 'Oregon',
    abbreviation: 'OR',
  },
  {
    name: 'Palau',
    abbreviation: 'PW',
  },
  {
    name: 'Pennsylvania',
    abbreviation: 'PA',
  },
  {
    name: 'Puerto Rico',
    abbreviation: 'PR',
  },
  {
    name: 'Rhode Island',
    abbreviation: 'RI',
  },
  {
    name: 'South Carolina',
    abbreviation: 'SC',
  },
  {
    name: 'South Dakota',
    abbreviation: 'SD',
  },
  {
    name: 'Tennessee',
    abbreviation: 'TN',
  },
  {
    name: 'Texas',
    abbreviation: 'TX',
  },
  {
    name: 'Utah',
    abbreviation: 'UT',
  },
  {
    name: 'Vermont',
    abbreviation: 'VT',
  },
  {
    name: 'Virgin Islands',
    abbreviation: 'VI',
  },
  {
    name: 'Virginia',
    abbreviation: 'VA',
  },
  {
    name: 'Washington',
    abbreviation: 'WA',
  },
  {
    name: 'West Virginia',
    abbreviation: 'WV',
  },
  {
    name: 'Wisconsin',
    abbreviation: 'WI',
  },
  {
    name: 'Wyoming',
    abbreviation: 'WY',
  },
]

const defaultEmployees = [
  {
    firstName: 'John',
    lastName: 'Doe',
    startDate: '2020-01-01',
    department: 'Sales',
    dateOfBirth: '1990-01-01',
    street: '',
    city: '',
    state: '',
    zipCode: '',
  },
  {
    firstName: 'Jack',
    lastName: 'Doe',
    startDate: '2020-01-01',
    department: 'Marketing',
    dateOfBirth: '1989-01-01',
    street: '',
    city: '',
    state: '',
    zipCode: '',
  },
  {
    firstName: 'Michelle',
    lastName: 'Obama',
    startDate: '2020-01-01',
    department: 'Engineering',
    dateOfBirth: '1988-01-01',
    street: '',
    city: '',
    state: '',
    zipCode: '',
  },
  {
    firstName: 'John',
    lastName: 'Major',
    startDate: '2020-01-01',
    department: 'Human Resources',
    dateOfBirth: '1988-01-01',
    street: '',
    city: '',
    state: '',
    zipCode: '',
  },
  {
    firstName: 'David',
    lastName: 'Beckam',
    startDate: '2020-01-01',
    department: 'Legal',
    dateOfBirth: '1990-01-01',
    street: '',
    city: '',
    state: '',
    zipCode: '',
  },
  {
    firstName: 'Hilary',
    lastName: 'Clinton',
    startDate: '2020-01-01',
    department: 'Sales',
    dateOfBirth: '1970-01-01',
    street: '',
    city: '',
    state: '',
    zipCode: '',
  },
  {
    firstName: 'Megan',
    lastName: 'Markle',
    startDate: '2020-01-01',
    department: 'Marketing',
    dateOfBirth: '1970-01-01',
    street: '',
    city: '',
    state: '',
    zipCode: '',
  },
  {
    firstName: 'Joe',
    lastName: 'Biden',
    startDate: '2020-01-01',
    department: 'Engineering',
    dateOfBirth: '1980-01-01',
    street: '',
    city: '',
    state: '',
    zipCode: '',
  },
  {
    firstName: 'Charles',
    lastName: 'Doe',
    startDate: '2020-01-01',
    department: 'Human Resources',
    dateOfBirth: '1980-01-01',
    street: '',
    city: '',
    state: '',
    zipCode: '',
  },
  {
    firstName: 'Terry',
    lastName: 'Doe',
    startDate: '2020-01-01',
    department: 'Legal',
    dateOfBirth: '1990-01-01',
    street: '',
    city: '',
    state: '',
    zipCode: '',
  },
  {
    firstName: 'Alex',
    lastName: 'Johnson',
    startDate: '2020-01-01',
    department: 'Sales',
    dateOfBirth: '1975-01-01',
    street: '',
    city: '',
    state: '',
    zipCode: '',
  },
  {
    firstName: 'Sue',
    lastName: 'Jackson',
    startDate: '2020-01-01',
    department: 'Sales',
    dateOfBirth: '1975-01-01',
    street: '',
    city: '',
    state: '',
    zipCode: '',
  },
]

export { departments, states, defaultEmployees }
