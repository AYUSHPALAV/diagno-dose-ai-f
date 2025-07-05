import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  ExternalLink, 
  Search, 
  PlusCircle, 
  Users, 
  Pill,
  ChevronRight
} from 'lucide-react';
import { usePredictionContext, Prediction } from '../context/PredictionContext';
import { Particle } from '../types';

// ... existing code ...