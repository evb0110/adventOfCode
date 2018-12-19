constant @instructions = 'input.txt'.IO.split(',').map({.trim});

my $dirindex = 0; # 0 -> North, 1 -> East etc.

my $x = 0; # Initial position
my $y = 0;

my SetHash $visited;
$visited{ ($x, $y).join('_') }++;

for @instructions -> $instruction {
  my ($rotation, $number) = $instruction.comb(/ \w | \d+ /);
  $dirindex = rotate($dirindex, $rotation);
  ($x, $y, my @blocks) = step($x, $y, $dirindex, $number);

  for @blocks -> $block {
    if $visited{$block} {
      say "Block: $block";
      say "Distance: ", $block.split('_').map(&abs).sum;
      exit;
    } else {
      $visited{$block}++;
    }
  }
}


sub rotate($dirindex is copy, $rotation) {
  $dirindex += $rotation eq 'R' ?? 1 !! 3;
  $dirindex %= 4;
  return $dirindex;
}

sub step($x, $y, $dirindex, $number) {
  my @blocks;
  my $x_ = $x;
  my $y_ = $y;
  given $dirindex {
    when 0 { $y_ += $number }
    when 1 { $x_ += $number }
    when 2 { $y_ -= $number }
    when 3 { $x_ -= $number }
  }

  for $x ... $x_ -> $X {
    for $y ... $y_ -> $Y {
      @blocks.push: ($X, $Y).join('_');
    }
  }
  @blocks.shift;

  return ($x_, $y_, |@blocks);
}