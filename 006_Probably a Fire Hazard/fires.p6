my @input = "input.txt".IO.lines.map({.subst("n o", "no")});

my Hash @directions;
for @input {
  my @words = .words;
  my $command = @words[0];
  my ($xFrom, $yFrom) = @words[1].split(',');
  my ($xTo, $yTo) = @words[3].split(',');
  ($xFrom, $yFrom, $xTo, $yTo) = (+$xFrom, +$yFrom, +$xTo, +$yTo);
 # this explicit conversion from strings to numbers makes 
 # the program many times faster 
  @directions.push({
    :$command,
    :$xFrom,
    :$yFrom,
    :$xTo,
    :$yTo,
  })
}

# sub inside ( $x, $y, $xFrom, $yFrom, $xTo, $yTo ) {
#   return (
#     $xFrom <= $x <= $xTo
#       and
#     $yFrom <= $y <= $yTo
#   )
# }

# sub switcher ( $command, $light is copy ) {
#   given $command {
#     when "turnon" { $light = 1 }
#     when "turnoff" { $light = 0 }
#     when "toggle" { $light = 1 - $light }
#   }
#   return $light;
# }

my $counter = 0;

for ^1_000 -> $x {
  say $x; # shows $x (from 1000) to know the remaining time
  for ^1_000 -> $y {
    my $light = 0;

    for @directions -> $direction {
      my $command = $direction<command>;
      my $xFrom = $direction<xFrom>;
      my $yFrom = $direction<yFrom>;
      my $xTo = $direction<xTo>;
      my $yTo = $direction<yTo>;

      if $xFrom <= $x <= $xTo and $yFrom <= $y <= $yTo {

        given $command {
          when "turnon" { $light = 1 }
          when "turnoff" { $light = 0 }
          when "toggle" { $light = 1 - $light }
        }

      }
    }
    $counter += $light;
  }
}

say $counter;