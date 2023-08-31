import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'],
})
export class CompaniesComponent implements OnInit {
  text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit';
  selectedCompany: {
    name: string;
    logo: string;
    trips: {
      start: string;
      end: string;
      from: string;
      to: string;
      seats: number;
      cost: number;
    }[];
  } | null = null;
  indexOfTripSelected: number | undefined;
  selectedCompanyIndex: number | null = null;
  selectedCityIndex: number | null = null;
  selectedTripIndex: number | null = null;
  user = {
    name: 'Ward Sultan',
    role: 'Super Admin',
    img: '../../../assets/panal/Companies/profile.png',
  };
  cities = [
    'Damascus',
    'Alzabadani',
    'Daraa',
    'Lattakia',
    'Der Al-Zour',
    'Aleepo',
    'Raqqa',
    'Hammah',
    'As-Suwayda',
  ];
  companies = [
    {
      name: 'Alkadmous',
      logo: '../../../assets/panal/Companies/companyLogo.png',
      trips: [
        {
          start: '06:50 AM',
          end: '11:05 AM',
          from: 'Damascus',
          to: 'Aleppo',
          seats: 11,
          cost: 8500,
        },
        {
          start: '07:50 AM',
          end: '12:05 PM',
          from: 'Der Al-Zour',
          to: 'Damascus',
          seats: 6,
          cost: 900,
        },
        {
          start: '08:50 AM',
          end: '11:05 AM',
          from: 'Damascus',
          to: 'Aleppo',
          seats: 9,
          cost: 7500,
        },
      ],
    },
    {
      name: 'Alrafeden',
      logo: '../../../assets/panal/Companies/companyLogo.png',

      trips: [
        {
          start: '06:50 AM',
          end: '11:05 AM',
          from: 'Damascus',
          to: 'Aleppo',
          seats: 12,
          cost: 7500,
        },
        {
          start: '07:50 AM',
          end: '12:05 AM',
          from: 'Damascus',
          to: 'Daraa',
          seats: 8,
          cost: 6500,
        },
      ],
    },
    {
      name: 'Alforat',
      logo: '../../../assets/panal/Companies/companyLogo.png',
      trips: [
        {
          start: '08:00 AM',
          end: '11:05 AM',
          from: 'Lattakia',
          to: 'Hammah',
          seats: 5,
          cost: 9500,
        },
      ],
    },
    {
      name: 'Ezla',
      logo: '../../../assets/panal/Companies/companyLogo.png',
      trips: [
        {
          start: '09:40 AM',
          end: '11:05 AM',
          from: 'As-Suwayda',
          to: 'Damascus',
          seats: 7,
          cost: 7500,
        },
        {
          start: '07:50 AM',
          end: '1:05 PM',
          from: 'Damascus',
          to: 'Aleppo',
          seats: 4,
          cost: 4500,
        },
      ],
    },
    {
      name: 'Alkadmous',
      logo: '../../../assets/panal/Companies/companyLogo.png',
      trips: [],
    },
    {
      name: 'Alkadmous',
      logo: '../../../assets/panal/Companies/companyLogo.png',
      trips: [],
    },
    {
      name: 'Alkadmous',
      logo: '../../../assets/panal/Companies/companyLogo.png',
      trips: [],
    },
    {
      name: 'Alkadmous',
      logo: '../../../assets/panal/Companies/companyLogo.png',
      trips: [],
    },
    {
      name: 'Alkadmous',
      logo: '../../../assets/panal/Companies/companyLogo.png',
      trips: [],
    },
    {
      name: 'Alkadmous',
      logo: '../../../assets/panal/Companies/companyLogo.png',
      trips: [],
    },
    {
      name: 'Alkadmous',
      logo: '../../../assets/panal/Companies/companyLogo.png',
      trips: [],
    },
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {}
  checkAuth() {
    if (
      localStorage.getItem('auth') == null ||
      localStorage.getItem('auth') == 'false'
    ) {
      this.router.navigateByUrl('login');
      return false;
    }

    return true;
  }

  selectCompany(
    company: {
      name: string;
      logo: string;
      trips: {
        start: string;
        end: string;
        from: string;
        to: string;
        seats: number;
        cost: number;
      }[];
    },
    index: number
  ) {
    this.selectedCompany = company;
    this.selectedCompanyIndex = index;
    this.indexOfTripSelected = undefined;
  }
  selectCity(index: number) {
    this.selectedCityIndex = index;
  }
  selectTrip(index: number) {
    this.indexOfTripSelected = index;
    this.selectedTripIndex = index;
  }

  calculateTripDuration(startTime: string, endTime: string) {
    const [startHour, startMinute, startPeriod] = startTime.split(/:| /);
    const [endHour, endMinute, endPeriod] = endTime.split(/:| /);

    const startInMinutes =
      parseInt(startHour) * 60 +
      parseInt(startMinute) +
      (startPeriod === 'PM' ? 12 * 60 : 0);
    const endInMinutes =
      parseInt(endHour) * 60 +
      parseInt(endMinute) +
      (endPeriod === 'PM' ? 12 * 60 : 0);

    const durationMinutes = endInMinutes - startInMinutes;
    const hours = Math.floor(durationMinutes / 60);
    const minutes = durationMinutes % 60;

    return { hours, minutes };
  }
}
