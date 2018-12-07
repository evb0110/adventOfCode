constant @directions = "input.txt".IO.slurp.comb;

constant @dirSanta = @directions[0,2...*];
constant @dirRobot = @directions[1,3...*];

sub houseCount(@directions) {
  my @position = ( 0, 0 );
  my %houses;

  for @directions -> $direction {
    my $positionString = @position.join("_");
    %houses{$positionString}++;
    given $direction {
      when ">" {@position[0]++};
      when "<" {@position[0]--};
      when "^" {@position[1]++};
      when "v" {@position[1]--};
    }
  }

  return %houses;
}

say (houseCount(@dirSanta) (+) houseCount(@dirRobot)).elems;
