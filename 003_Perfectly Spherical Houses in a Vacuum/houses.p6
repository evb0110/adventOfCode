my @directions = "input.txt".IO.slurp.comb;

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

say %houses.keys.elems;