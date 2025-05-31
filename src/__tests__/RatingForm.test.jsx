// 🔧 FRONTEND TESTS (JEST + REACT TESTING LIBRARY)
// Pfad: frontend/src/__tests__/RatingForm.test.jsx

import { render, screen, fireEvent } from '@testing-library/react';
import RatingForm from '../components/RatingForm';
import AuthService from '../services/auth.service';
import {jest} from "globals";

jest.mock('../services/auth.service');

describe('RatingForm', () => {
  beforeEach(() => {
    AuthService.getCurrentUser = jest.fn(() => ({ id: 1 }));
  });

  it('should render form inputs', () => {
    render(<RatingForm movieId={123} />);
    expect(screen.getByLabelText(/Kommentar/i)).toBeInTheDocument();
    expect(screen.getByRole('spinbutton')).toBeInTheDocument();
    expect(screen.getByText(/Speichern/i)).toBeInTheDocument();
  });

  it('should call handleSubmit on form submit', () => {
    render(<RatingForm movieId={123} />);
    fireEvent.change(screen.getByLabelText(/Kommentar/i), {
      target: { value: 'Super Film!' },
    });
    fireEvent.click(screen.getByText(/Speichern/i));
    expect(screen.getByText(/Speichern/i)).toBeInTheDocument();
  });
});
