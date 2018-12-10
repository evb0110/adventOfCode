constant @instructions = 'input.txt'.IO.split(',').map({.trim});

my $dirindex = 0;

my $x = 0;
my $y = 0;



for @instructions -> $instruction {
  my ($rotation, $number) = $instruction.comb(/ \w | \d+ /);
  $dirindex = rotate($dirindex, $rotation);
  ($x, $y) = step($x, $y, $dirindex, $number);
}

say $x+$y;

sub rotate($dirindex is copy, $rotation) {
  $dirindex += $rotation eq 'R' ?? 1 !! 3;
  $dirindex %= 4;
  return $dirindex;
}

sub step($x is copy, $y is copy, $dirindex, $number) {
  given $dirindex {
    when 0 { $y += $number }
    when 1 { $x += $number }
    when 2 { $y -= $number }
    when 3 { $x -= $number }
  }
  return ($x, $y);
}